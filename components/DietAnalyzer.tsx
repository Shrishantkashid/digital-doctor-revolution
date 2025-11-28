import React, { useState } from 'react';
import { Language } from '../types';
import DietUploader from './DietUploader';
import DietAnalysisResult from './DietAnalysisResult';
import { analyzeDiet } from '../services/dietRecommendationService';
import LoadingSpinner from './LoadingSpinner';

interface DietAnalyzerProps {
    language: Language;
    userId: string | null;
}

const DietAnalyzer: React.FC<DietAnalyzerProps> = ({ language, userId }) => {
    const [analysisResult, setAnalysisResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleAnalysisComplete = async (result: any) => {
        setIsLoading(true);
        setError(null);

        try {
            setAnalysisResult(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred during analysis');
            console.error('Diet analysis error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNewAnalysis = () => {
        setAnalysisResult(null);
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-64">
                <LoadingSpinner />
                <p className="mt-4 text-gray-600">Analyzing your meal...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
                <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">Analysis Error</h3>
                            <div className="mt-2 text-sm text-red-700">
                                <p>{error}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        onClick={handleNewAnalysis}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-300"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            {analysisResult ? (
                <DietAnalysisResult 
                    result={analysisResult} 
                    onNewAnalysis={handleNewAnalysis} 
                />
            ) : (
                <DietUploader 
                    language={language} 
                    onAnalysisComplete={handleAnalysisComplete} 
                />
            )}
        </div>
    );
};

export default DietAnalyzer;