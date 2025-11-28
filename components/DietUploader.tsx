import React, { useState, useRef } from 'react';
import { Language } from '../types';
import { analyzeDiet } from '../services/dietRecommendationService';
import LoadingSpinner from './LoadingSpinner';

interface DietUploaderProps {
    language: Language;
    onAnalysisComplete: (result: any) => void;
}

const DietUploader: React.FC<DietUploaderProps> = ({ language, onAnalysisComplete }) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [dietaryGoal, setDietaryGoal] = useState('general');
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Default translations (English)
    const translations = {
        uploadTitle: 'Analyze Your Meal',
        uploadDescription: 'Upload photos of your meal to get nutritional information and healthier alternatives',
        selectPhotos: 'Select Photos',
        dragDrop: 'or drag and drop',
        dietaryGoal: 'Dietary Goal',
        generalWellness: 'General Wellness',
        weightLoss: 'Weight Loss',
        diabetesManagement: 'Diabetes Management',
        heartHealth: 'Heart Health',
        analyzeMeal: 'Analyze Meal',
        remove: 'Remove',
        uploadError: 'Please select at least one image',
        uploading: 'Analyzing your meal...',
        supportedFormats: 'PNG, JPG, GIF up to 10MB'
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const files = Array.from(e.target.files);
            setSelectedFiles(files);
            setUploadError(null);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const files = Array.from(e.dataTransfer.files);
            setSelectedFiles(files);
            setUploadError(null);
        }
    };

    const removeFile = (index: number) => {
        const newFiles = [...selectedFiles];
        newFiles.splice(index, 1);
        setSelectedFiles(newFiles);
    };

    const handleAnalyze = async () => {
        if (selectedFiles.length === 0) {
            setUploadError(translations.uploadError);
            return;
        }

        setIsUploading(true);
        setUploadError(null);

        try {
            // Use the first file for analysis
            const result = await analyzeDiet({
                imageFile: selectedFiles[0],
                dietaryGoal,
                language
            });
            
            onAnalysisComplete(result);
        } catch (error) {
            setUploadError(error instanceof Error ? error.message : 'An error occurred during analysis');
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 space-y-6">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{translations.uploadTitle}</h1>
                <p className="mt-2 text-gray-600">
                    {translations.uploadDescription}
                </p>
            </div>
            
            <div className="space-y-4">
                <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer transition-colors hover:border-blue-400"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600 justify-center">
                        <span className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                            <span>{translations.selectPhotos}</span>
                        </span>
                        <p className="pl-1">{translations.dragDrop}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                        {translations.supportedFormats}
                    </p>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="sr-only"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                
                {selectedFiles.length > 0 && (
                    <div className="mt-4">
                        <h3 className="text-sm font-medium text-gray-700">Selected Files:</h3>
                        <ul className="mt-2 divide-y divide-gray-200">
                            {selectedFiles.map((file, index) => (
                                <li key={index} className="flex items-center justify-between py-2">
                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-sm text-gray-900 truncate">{file.name}</span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeFile(index)}
                                        className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                                    >
                                        {translations.remove}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                <div>
                    <label htmlFor="dietaryGoal" className="block text-sm font-medium text-gray-700">
                        {translations.dietaryGoal}
                    </label>
                    <select
                        id="dietaryGoal"
                        value={dietaryGoal}
                        onChange={(e) => setDietaryGoal(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="general">{translations.generalWellness}</option>
                        <option value="weight-loss">{translations.weightLoss}</option>
                        <option value="diabetes">{translations.diabetesManagement}</option>
                        <option value="heart-health">{translations.heartHealth}</option>
                    </select>
                </div>
            </div>
            
            {uploadError && (
                <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">{uploadError}</h3>
                        </div>
                    </div>
                </div>
            )}
            
            <div className="border-t border-gray-200 pt-6">
                <button
                    onClick={handleAnalyze}
                    disabled={isUploading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors duration-300"
                >
                    {isUploading ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {translations.uploading}
                        </div>
                    ) : (
                        translations.analyzeMeal
                    )}
                </button>
            </div>
        </div>
    );
};

export default DietUploader;