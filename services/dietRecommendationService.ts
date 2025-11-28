import { GoogleGenerativeAI } from "@google/generative-ai";
import { fileToBase64 } from "../utils";
import { DietAnalysisResult, Language } from "../types";

// Language names mapping for the AI prompt
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
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

interface AnalyzeDietParams {
    imageFile: File;
    dietaryGoal: string;
    language: Language;
}

export const analyzeDiet = async ({
    imageFile,
    dietaryGoal,
    language
}: AnalyzeDietParams): Promise<DietAnalysisResult> => {

    const base64Image = await fileToBase64(imageFile);
    
    // Get the model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `You are an expert nutritionist AI with extensive knowledge of Indian regional cuisines. Your task is to analyze the provided image of a meal and provide detailed nutritional information and healthier alternatives.

Dietary Goal/Context: ${dietaryGoal || 'General wellness'}

Please perform the following analysis and provide the output in a structured JSON format. **All textual responses within the JSON object should be in ${languageNames[language]}**.

1.  **Food Detection**: Identify all food items in the image, including:
    - Main dishes
    - Side items
    - Accompaniments
    - Beverages
    Provide quantity estimates where possible and confidence scores for each detection.

2.  **Nutritional Content Estimation**: For each detected item:
    - Estimate calories
    - Calculate macronutrients (carbs, proteins, fats)
    - Include key micronutrients where relevant
    - Combine all items into total meal nutrition

3.  **Healthier Alternative Suggestions**: Based on the detected meal:
    - Suggest culturally appropriate swaps
    - Recommend portion reductions where relevant
    - Propose additions to improve nutritional balance
    - Tailor suggestions to the dietary goal

4.  **Regional Focus**: Ensure all suggestions respect Indian culinary traditions and regional preferences.

Provide your response in the following JSON structure:
{
  "detected_items": [
    {
      "name": "food item name",
      "quantity_estimate": "quantity description",
      "confidence_score": 0-100
    }
  ],
  "nutrition_per_item": [
    {
      "item_name": "food item name",
      "calories": number,
      "carbs_g": number,
      "protein_g": number,
      "fat_g": number,
      "extra_info": "additional information"
    }
  ],
  "total_meal_nutrition": {
    "total_calories": number,
    "total_carbs_g": number,
    "total_protein_g": number,
    "total_fat_g": number
  },
  "healthier_alternatives": [
    {
      "suggestion_title": "title of suggestion",
      "description": "detailed description",
      "change_type": "swap|reduce|add",
      "estimated_calorie_impact": "calorie impact description"
    }
  ],
  "assumptions": [
    "assumption made during analysis"
  ],
  "disclaimer": "disclaimer about recommendations"
}`;

    try {
        const imagePart = {
            inlineData: {
                data: base64Image,
                mimeType: imageFile.type,
            },
        };

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
        
        const dietAnalysisResult: DietAnalysisResult = JSON.parse(jsonString);
        
        return dietAnalysisResult;
    } catch (error) {
        console.error("Error analyzing diet:", error);
        
        // Check if it's an API key issue
        if (error.message && error.message.includes('403')) {
            throw new Error("API key error: The Gemini API key may have been reported as leaked. Please obtain a new API key from Google AI Studio and update your .env file.");
        } else if (error.message && error.message.includes('404')) {
            throw new Error("Model not found: The specified Gemini model is not available. Please check your model configuration.");
        } else if (error.message && error.message.includes('JSON')) {
            throw new Error("Response format error: Unable to parse the AI response. This may be due to an API issue or unexpected response format.");
        } else {
            throw new Error("Failed to analyze diet. Please check your API key and try again. Error: " + error.message);
        }
    }
};