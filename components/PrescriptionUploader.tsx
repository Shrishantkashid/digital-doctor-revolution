import React, { useState, useCallback } from 'react';
import { TranslationKeys } from '../services/translationService';

interface PrescriptionUploaderProps {
    onFileSelect: (file: File) => void;
    t?: Record<keyof TranslationKeys, string>;
}

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
);

const PrescriptionUploader: React.FC<PrescriptionUploaderProps> = ({ onFileSelect, t }) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    
    // Default translations
    const defaultT = {
        clickToUpload: 'Click to upload',
        dragDrop: 'Drag and drop',
        imageTypes: 'PNG, JPG, or WEBP',
        uploadPrescription: 'Upload Prescription'
    };
    
    const translations = t || defaultT;

    const handleFileChange = (files: FileList | null) => {
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                setFileName(file.name);
                onFileSelect(file);
            } else {
                alert('Please select an image file.');
            }
        }
    };

    const handleDragEnter = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);
    
    const handleDragOver = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        handleFileChange(e.dataTransfer.files);
    }, []);

    return (
        <div className="w-full">
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">Tips for Best Results:</h3>
                <ul className="text-xs text-blue-700 list-disc pl-5 space-y-1">
                    <li>Ensure good lighting when taking the photo</li>
                    <li>Place the prescription on a flat, contrasting surface</li>
                    <li>Hold the camera directly above the prescription</li>
                    <li>Make sure all text is in focus and readable</li>
                    <li>Include the entire prescription in the frame</li>
                </ul>
            </div>
            
            <label
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors
                ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadIcon />
                    <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">{translations.clickToUpload}</span> or {translations.dragDrop.toLowerCase()}
                    </p>
                    <p className="text-xs text-gray-500">{translations.imageTypes}</p>
                </div>
                {fileName && (
                    <div className="bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full -mt-2">
                        {fileName}
                    </div>
                )}
                <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e.target.files)}
                />
            </label>
        </div>
    );
};

export default PrescriptionUploader;