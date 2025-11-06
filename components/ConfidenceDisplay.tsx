import React from 'react';
import { TranslationKeys } from '../services/translationService';

interface ConfidenceDisplayProps {
    confidence: 'High' | 'Medium' | 'Low';
    score: number;
    reasoning: string;
    t?: Record<keyof TranslationKeys, string>;
}

const getConfidenceClass = (confidence: 'High' | 'Medium' | 'Low') => {
    switch (confidence) {
        case 'High': return 'bg-green-100 text-green-800 border-green-400';
        case 'Medium': return 'bg-orange-100 text-orange-800 border-orange-400';
        case 'Low': return 'bg-red-100 text-red-800 border-red-400';
        default: return 'bg-gray-100 text-gray-800 border-gray-400';
    }
};

const ConfidenceDisplay: React.FC<ConfidenceDisplayProps> = ({ confidence, score, reasoning, t }) => {
    // Default translations
    const defaultT = {
        confidenceTip: 'Tip: If the confidence is low due to handwriting clarity, try retaking the photo with better lighting and focus.'
    };
    
    const translations = t || defaultT;

    return (
        <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                <span className={`px-3 py-1 text-sm font-semibold rounded-full border whitespace-nowrap ${getConfidenceClass(confidence)}`}>
                    {confidence} Confidence
                </span>
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Score:</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2.5">
                        <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${score}%` }}
                        ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{score}%</span>
                </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold">Analysis Details:</span> {reasoning}
            </p>
            {confidence !== 'High' && (
                <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700">
                    <span className="font-semibold">Tip:</span> {translations.confidenceTip}
                </div>
            )}
        </div>
    );
};

export default ConfidenceDisplay;