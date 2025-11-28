export interface Medication {
    name: string;
    dosage: string;
    frequency: string;
    // New fields for enhanced drug information
    description?: string; // What the drug is used to treat
    timing?: 'Before Food' | 'After Food' | 'With Food' | 'Anytime'; // When to take the medication
    diseaseMatch?: {
        patientDisease: string;
        isMatch: boolean;
        recommendation: string;
    }; // Match with patient's disease
}

export interface Interaction {
    drugs: string[];
    description: string;
    severity: 'High' | 'Moderate' | 'Low';
}

export interface AllergyAlert {
    drug: string;
    warning: string;
}

export interface EnhancedSafetyAlert {
    drug: string;
    alertType: string;
    warning: string;
}

export interface CostOptimization {
    brandName: string;
    genericAlternative: string;
    notes: string;
    currentPrice?: string;
    availability?: string; // Simulated availability
}

export interface AnalysisResult {
    analysisConfidence: 'High' | 'Medium' | 'Low';
    confidenceScore: number; // New numerical confidence score (0-100)
    confidenceReasoning: string;
    medications: Medication[];
    interactions: Interaction[];
    allergyAlerts: AllergyAlert[];
    enhancedSafetyAlerts: EnhancedSafetyAlert[];
    costOptimization: CostOptimization[];
}

export interface MentalHealthAnalysisResult {
    transcription: string;
    sentiment: 'Neutral' | 'Anxious' | 'Depressed' | 'Hopeful' | 'Calm' | 'Stressed' | 'Angry';
    confidenceScore: number; // New numerical confidence score (0-100)
    crisisDetected: boolean;
    crisisMessage?: string;
    recommendations: string[];
}

// Diet Recommendation System Types
export interface DetectedFoodItem {
    name: string;
    quantity_estimate: string;
    confidence_score: number;
}

export interface NutritionInfo {
    item_name: string;
    calories: number;
    carbs_g: number;
    protein_g: number;
    fat_g: number;
    extra_info: string;
}

export interface TotalMealNutrition {
    total_calories: number;
    total_carbs_g: number;
    total_protein_g: number;
    total_fat_g: number;
}

export interface HealthierAlternative {
    suggestion_title: string;
    description: string;
    change_type: 'swap' | 'reduce' | 'add';
    estimated_calorie_impact: string;
}

export interface DietAnalysisResult {
    detected_items: DetectedFoodItem[];
    nutrition_per_item: NutritionInfo[];
    total_meal_nutrition: TotalMealNutrition;
    healthier_alternatives: HealthierAlternative[];
    assumptions: string[];
    disclaimer: string;
}

export type Tool = 'landing' | 'prescription' | 'mentalHealth' | 'chatbot' | 'diet';

// Extended language support - all languages
export type Language = 'en' | 'hi' | 'te' | 'ta' | 'kn' | 'ml' | 'mr' | 'bn' | 'gu' | 'pa';