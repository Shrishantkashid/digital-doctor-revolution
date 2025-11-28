import { GoogleGenerativeAI } from "@google/generative-ai";
import { fileToBase64, blobToBase64 } from "../utils";
import { AnalysisResult, MentalHealthAnalysisResult, Language } from "../types";
import { auditTrail } from "../audit/AuditTrail";
import { drugDatabaseService } from "./DrugDatabaseService";
import { dosageValidationService, type PatientInfo } from "./DosageValidationService";

// Language names mapping for the AI prompt - limited to languages up to Kannada
const languageNames: Record<Language, string> = {
    en: 'English',
    hi: 'Hindi',
    te: 'Telugu',
    ta: 'Tamil',
    kn: 'Kannada',
    ml: 'Malayalam',
    mr: 'Marathi',
    bn: 'Bengali',
    gu: 'Gujarati',
    pa: 'Punjabi'
};

// The API key is assumed to be available in the environment variables.
const ai = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

interface AnalyzePrescriptionParams {
    imageFile: File;
    allergies: string;
    age: string;
    conditions: string;
    language: Language;
}

export const analyzePrescription = async ({
    imageFile,
    allergies,
    age,
    conditions,
    language
}: AnalyzePrescriptionParams): Promise<AnalysisResult> => {

    const base64Image = await fileToBase64(imageFile);
    const imagePart = {
        inlineData: {
            data: base64Image,
            mimeType: imageFile.type,
        },
    };

    const patientInfo = `
- Allergies: ${allergies || 'None listed'}
- Age: ${age || 'Not provided'}
- Pre-existing conditions: ${conditions || 'None listed'}
    `.trim();

    // Get the model
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `You are an expert pharmacist AI with extensive experience in reading various handwriting styles, including cursive, printed, and潦草 (sloppy) handwriting. Your task is to carefully analyze the provided image of a medical prescription and the patient's health profile.
        
Patient Health Profile:
${patientInfo}

Please perform the following checks and provide the output in a structured JSON format. **All textual responses within the JSON object should be in ${languageNames[language]}**.

1.  **Medication Identification**: Identify all medications, their dosages, and frequencies from the prescription. If information is not available, use "N/A". Pay special attention to:
    - Different handwriting styles (cursive, printed,潦草/sloppy)
    - Common medical abbreviations (e.g., "q.d." for once daily, "b.i.d." for twice daily)
    - Numbers that might be unclear (e.g., distinguishing between 1 and 7, 0 and O)
    - Common medication names that might be misspelled due to poor handwriting

2.  **Drug Information Enhancement**: For each identified medication, provide:
    - A brief description of what the drug is used to treat
    - The optimal timing for taking the medication (Before Food, After Food, With Food, or Anytime)
    - Disease matching analysis: Compare the patient's conditions with the drug's intended use and provide a recommendation

3.  **Drug Interactions**: Check for potential interactions between the prescribed medications.

4.  **Allergy Alerts**: Cross-reference the medications with the patient's list of allergies.

5.  **Enhanced Safety Alerts**: Check for contraindications or warnings related to the patient's age and pre-existing conditions.

6.  **Cost Optimization**: Suggest generic alternatives for any brand-name drugs. For each generic alternative, **simulate** providing current pricing and local availability information. Use Indian Rupees (₹) for all pricing. Assume you have access to up-to-date pharmaceutical databases for this simulation.

7.  **Confidence Score**: Provide a confidence level (High, Medium, or Low) for the analysis and a brief reason (e.g., clarity of the image, legibility of handwriting).

If you encounter unclear handwriting:
- Make educated guesses based on context and common medical terms
- Note your uncertainty in the confidence reasoning
- If completely unable to read something, mark it as "UNREADABLE" and explain why in the confidence reasoning

Return *only* the JSON object that adheres to the provided schema. Do not include any explanatory text, markdown formatting, or code blocks before or after the JSON. If no interactions, alerts, or optimizations are found, return an empty array for the corresponding key.`;

    try {
        const result = await model.generateContent([
            prompt,
            imagePart
        ]);

        const response = await result.response;
        const responseText = response.text();
        
        // Extract JSON from the response
        const jsonStart = responseText.indexOf('{');
        const jsonEnd = responseText.lastIndexOf('}') + 1;
        const jsonString = responseText.substring(jsonStart, jsonEnd);
        
        let resultObj = JSON.parse(jsonString) as AnalysisResult;
        
        // Enhance safety alerts with dosage validation
        const enhancedSafetyAlerts = [...resultObj.enhancedSafetyAlerts];
        
        // Create patient info object for dosage validation
        const patientData: PatientInfo = {
          age: age ? parseInt(age, 10) : 0,
          conditions: conditions ? conditions.split(',').map(c => c.trim()) : [],
        };
        
        // Validate dosages for each medication
        for (const medication of resultObj.medications) {
          const validation = dosageValidationService.validateDosage(
            medication.name,
            medication.dosage,
            medication.frequency,
            patientData
          );
          
          // Add warnings if dosage validation failed
          if (!validation.isValid) {
            enhancedSafetyAlerts.push({
              drug: medication.name,
              alertType: 'Dosage Warning',
              warning: `Prescribed dosage may not be appropriate. Recommended: ${validation.recommendedDosage}, ${validation.recommendedFrequency}`
            });
          }
          
          // Add any additional warnings
          for (const warning of validation.warnings) {
            enhancedSafetyAlerts.push({
              drug: medication.name,
              alertType: 'Dosage Warning',
              warning
            });
          }
          
          // Add contraindications
          for (const contraindication of validation.contraindications) {
            enhancedSafetyAlerts.push({
              drug: medication.name,
              alertType: 'Contraindication',
              warning: contraindication
            });
          }
        }
        
        // Update the result with enhanced safety alerts
        resultObj = {
          ...resultObj,
          enhancedSafetyAlerts
        };
        
        // Enhance cost optimization with real-time drug database information
        const enhancedCostOptimization = [];
        for (const opt of resultObj.costOptimization) {
          // Get real-time drug information
          const drugInfo = await drugDatabaseService.getDrugInfo(opt.brandName);
          
          if (drugInfo) {
            // Get real generic alternatives
            const realGenerics = await drugDatabaseService.getGenericAlternatives(opt.brandName);
            
            // Use the first real generic if available, otherwise keep the AI suggestion
            const genericAlternative = realGenerics.length > 0 ? realGenerics[0] : opt.genericAlternative;
            
            // Get real pricing information
            const pharmacyPrices = drugInfo.typicalPrices;
            
            // Select the best price (lowest)
            let bestPrice = opt.currentPrice || '₹0.00 for 30 tablets';
            let bestAvailability = opt.availability || 'Unknown';
            
            for (const [pharmacy, info] of Object.entries(pharmacyPrices)) {
              // Simple price comparison (in a real implementation, we would parse the actual prices)
              if (info.availability === 'In Stock') {
                bestPrice = info.price;
                bestAvailability = `Available at ${pharmacy}`;
                break;
              }
            }
            
            enhancedCostOptimization.push({
              ...opt,
              genericAlternative,
              currentPrice: bestPrice,
              availability: bestAvailability
            });
          } else {
            // If we can't get real information, keep the AI suggestion but ensure it's in Rupees
            let price = opt.currentPrice || '₹0.00 for 30 tablets';
            // Convert any USD prices to Rupees (using approximate conversion rate)
            if (price.includes('$')) {
              const dollarAmount = parseFloat(price.replace(/[^0-9.]/g, ''));
              const rupeeAmount = (dollarAmount * 83).toFixed(2); // Approximate conversion rate
              price = `₹${rupeeAmount} for 30 tablets`;
            }
            enhancedCostOptimization.push({
              ...opt,
              currentPrice: price
            });
          }
        }
        
        // Update the result with enhanced cost optimization
        resultObj = {
          ...resultObj,
          costOptimization: enhancedCostOptimization
        };
        
        // Log the analysis decision to the audit trail
        // In a real implementation, we would get the actual user ID from the session
        const userId = "anonymous"; 
        auditTrail.logAnalysisDecision(
            userId,
            "prescription_analysis",
            "prescription",
            {
                allergies,
                age,
                conditions,
                language
            },
            resultObj,
            resultObj.confidenceScore,
            // In a real implementation, we would get the IP address and user agent from the request
            undefined, // ipAddress
            undefined  // userAgent
        );
        
        return resultObj;
    } catch (error) {
        console.error("Error analyzing prescription:", error);
        
        // Check if it's an API key issue
        if (error.message && error.message.includes('403')) {
            throw new Error("API key error: The Gemini API key may have been reported as leaked. Please obtain a new API key from Google AI Studio and update your .env file.");
        } else if (error.message && error.message.includes('404')) {
            throw new Error("Model not found: The specified Gemini model is not available. Please check your model configuration.");
        } else {
            throw new Error("Failed to analyze prescription. Please check your API key and try again. Error: " + error.message);
        }
    }
};

interface AnalyzeMentalHealthParams {
    audioBlob: Blob;
    language: Language;
}

export const analyzeMentalHealthAudio = async ({ audioBlob, language }: AnalyzeMentalHealthParams): Promise<MentalHealthAnalysisResult> => {
    // Convert Blob to base64 string
    const base64Audio = await blobToBase64(audioBlob);

    // Assuming the Blob is already in 'audio/pcm;rate=16000' or can be processed by the model
    // The createPcmBlob function in utils converts raw Float32Array to PCM Blob.
    // Here we're using a Blob that might come directly from MediaRecorder, often WebM or MP3.
    // For direct PCM, ensure the recording setup yields that format, otherwise the model
    // might expect a more common audio format MIME type.
    const audioPart = {
        inlineData: {
            data: base64Audio,
            mimeType: audioBlob.type, // Use the actual MIME type of the recorded blob
        },
    };

    // Get the model
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `You are a mental health support AI. Analyze the provided audio input from a user.
        
Please perform the following tasks and provide the output in a structured JSON format. **All textual responses within the JSON object should be in ${languageNames[language]}**.

1.  **Transcription**: Transcribe the spoken content accurately.
2.  **Sentiment Analysis**: Determine the overall sentiment or emotional tone (e.g., Neutral, Anxious, Depressed, Hopeful, Calm, Stressed, Angry).
3.  **Crisis Detection**: Identify if the transcription contains language indicating self-harm, suicidal ideation, or severe distress. If a crisis is detected, provide a crisis message offering immediate advice and support.
4.  **Personalized Recommendations**: Based on the sentiment and content, provide 2-3 actionable, general wellness recommendations (e.g., mindfulness exercises, seeking professional help, connecting with loved ones).

Return *only* the JSON object that adheres to the provided schema. Do not include any explanatory text, markdown formatting, or code blocks before or after the JSON.`;

    try {
        const result = await model.generateContent([
            prompt,
            audioPart
        ]);

        const response = await result.response;
        const responseText = response.text();
        
        // Extract JSON from the response
        const jsonStart = responseText.indexOf('{');
        const jsonEnd = responseText.lastIndexOf('}') + 1;
        const jsonString = responseText.substring(jsonStart, jsonEnd);
        
        const resultObj = JSON.parse(jsonString) as MentalHealthAnalysisResult;
        
        // Log the analysis decision to the audit trail
        // In a real implementation, we would get the actual user ID from the session
        const userId = "anonymous";
        auditTrail.logAnalysisDecision(
            userId,
            "mental_health_analysis",
            "audio",
            { language },
            resultObj,
            resultObj.confidenceScore,
            // In a real implementation, we would get the IP address and user agent from the request
            undefined, // ipAddress
            undefined  // userAgent
        );
        
        return resultObj;
    } catch (error) {
        console.error("Error analyzing mental health audio:", error);
        
        // Check if it's an API key issue
        if (error.message && error.message.includes('403')) {
            throw new Error("API key error: The Gemini API key may have been reported as leaked. Please obtain a new API key from Google AI Studio and update your .env file.");
        } else if (error.message && error.message.includes('404')) {
            throw new Error("Model not found: The specified Gemini model is not available. Please check your model configuration.");
        } else {
            throw new Error("Failed to analyze mental health audio. Please check your API key and try again. Error: " + error.message);
        }
    }
};

export const generateMentalHealthTestContent = async (language: Language): Promise<string> => {
    const prompt = `Generate a short paragraph (around 50-70 words) that expresses a specific sentiment (e.g., neutral, anxious, slightly depressed, or hopeful) suitable for testing a mental health monitoring AI. The text should be in ${languageNames[language]}. Avoid explicit crisis language for this test content unless specifically asked, but allow for nuanced emotional expression.`;

    // Get the model
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text().trim();
    } catch (error) {
        console.error("Error generating mental health test content:", error);
        
        // Check if it's an API key issue
        if (error.message && error.message.includes('403')) {
            throw new Error("API key error: The Gemini API key may have been reported as leaked. Please obtain a new API key from Google AI Studio and update your .env file.");
        } else if (error.message && error.message.includes('404')) {
            throw new Error("Model not found: The specified Gemini model is not available. Please check your model configuration.");
        } else {
            throw new Error("Failed to generate test content. Please check your API key and try again. Error: " + error.message);
        }
    }
};