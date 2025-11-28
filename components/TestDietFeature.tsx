import React, { useState } from 'react';
import DietUploader from './DietUploader';
import DietAnalysisResult from './DietAnalysisResult';

const TestDietFeature: React.FC = () => {
    const [analysisResult, setAnalysisResult] = useState<any>(null);

    const handleAnalysisComplete = (result: any) => {
        setAnalysisResult(result);
    };

    const handleNewAnalysis = () => {
        setAnalysisResult(null);
    };

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Diet Recommendation Feature Test</h1>
            
            {analysisResult ? (
                <DietAnalysisResult 
                    result={analysisResult} 
                    onNewAnalysis={handleNewAnalysis} 
                />
            ) : (
                <DietUploader 
                    language="en" 
                    onAnalysisComplete={handleAnalysisComplete} 
                />
            )}
        </div>
    );
};

export default TestDietFeature;