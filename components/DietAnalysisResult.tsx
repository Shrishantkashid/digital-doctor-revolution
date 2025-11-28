import React from 'react';
import type { DietAnalysisResult } from '../types';

interface DietAnalysisResultProps {
    result: DietAnalysisResult;
    onNewAnalysis: () => void;
}

const DietAnalysisResult: React.FC<DietAnalysisResultProps> = ({ result, onNewAnalysis }) => {
    // Default translations (English)
    const translations = {
        analysisResults: 'Analysis Results',
        detectedItems: 'Detected Items',
        nutritionInfo: 'Nutrition Information',
        totalMealNutrition: 'Total Meal Nutrition',
        healthierAlternatives: 'Healthier Alternatives',
        assumptions: 'Assumptions Made',
        disclaimer: 'Disclaimer',
        itemName: 'Item Name',
        quantity: 'Quantity',
        confidence: 'Confidence',
        calories: 'Calories',
        carbs: 'Carbs (g)',
        protein: 'Protein (g)',
        fat: 'Fat (g)',
        totalCalories: 'Total Calories',
        totalCarbs: 'Total Carbs',
        totalProtein: 'Total Protein',
        totalFat: 'Total Fat',
        newAnalysis: 'Analyze Another Meal',
        high: 'High',
        medium: 'Medium',
        low: 'Low'
    };

    const getConfidenceColor = (score: number) => {
        if (score >= 80) return 'bg-green-100 text-green-800';
        if (score >= 60) return 'bg-yellow-100 text-yellow-800';
        return 'bg-red-100 text-red-800';
    };

    const getChangeTypeColor = (type: string) => {
        switch (type) {
            case 'swap': return 'bg-blue-100 text-blue-800';
            case 'reduce': return 'bg-orange-100 text-orange-800';
            case 'add': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{translations.analysisResults}</h1>
                <button
                    onClick={onNewAnalysis}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    {translations.newAnalysis}
                </button>
            </div>

            {/* Detected Items */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{translations.detectedItems}</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {translations.itemName}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {translations.quantity}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {translations.confidence}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {result.detected_items.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.quantity_estimate}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getConfidenceColor(item.confidence_score)}`}>
                                            {item.confidence_score}%
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Nutrition Information */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{translations.nutritionInfo}</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {translations.itemName}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {translations.calories}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {translations.carbs}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {translations.protein}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {translations.fat}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Info
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {result.nutrition_per_item.map((nutrition, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {nutrition.item_name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {nutrition.calories}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {nutrition.carbs_g}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {nutrition.protein_g}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {nutrition.fat_g}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {nutrition.extra_info}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Total Meal Nutrition */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{translations.totalMealNutrition}</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <p className="text-sm text-gray-600">{translations.totalCalories}</p>
                        <p className="text-2xl font-bold text-blue-700">{result.total_meal_nutrition.total_calories}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                        <p className="text-sm text-gray-600">{translations.totalCarbs}</p>
                        <p className="text-2xl font-bold text-green-700">{result.total_meal_nutrition.total_carbs_g}g</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                        <p className="text-sm text-gray-600">{translations.totalProtein}</p>
                        <p className="text-2xl font-bold text-purple-700">{result.total_meal_nutrition.total_protein_g}g</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4 text-center">
                        <p className="text-sm text-gray-600">{translations.totalFat}</p>
                        <p className="text-2xl font-bold text-yellow-700">{result.total_meal_nutrition.total_fat_g}g</p>
                    </div>
                </div>
            </div>

            {/* Healthier Alternatives */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{translations.healthierAlternatives}</h2>
                <div className="space-y-4">
                    {result.healthier_alternatives.map((alternative, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-medium text-gray-900">{alternative.suggestion_title}</h3>
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getChangeTypeColor(alternative.change_type)}`}>
                                    {alternative.change_type.charAt(0).toUpperCase() + alternative.change_type.slice(1)}
                                </span>
                            </div>
                            <p className="mt-2 text-gray-600">{alternative.description}</p>
                            <div className="mt-2">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    {alternative.estimated_calorie_impact}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Assumptions */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{translations.assumptions}</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {result.assumptions.map((assumption, index) => (
                        <li key={index} className="text-gray-600">{assumption}</li>
                    ))}
                </ul>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">{translations.disclaimer}</h3>
                        <div className="mt-2 text-sm text-yellow-700">
                            <p>{result.disclaimer}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DietAnalysisResult;