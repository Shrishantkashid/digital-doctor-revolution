import React from 'react';
import { TranslationKeys } from '../services/translationService';

interface PatientInfoFormProps {
    age: string;
    setAge: (value: string) => void;
    conditions: string;
    setConditions: (value: string) => void;
    t?: Record<keyof TranslationKeys, string>;
}

const PatientInfoForm: React.FC<PatientInfoFormProps> = ({
    age,
    setAge,
    conditions,
    setConditions,
    t
}) => {
    // Default translations
    const defaultT = {
        additionalInfo: 'Additional Information (Optional)',
        age: 'Age',
        agePlaceholder: 'e.g., 35',
        conditions: 'Pre-existing Conditions',
        conditionsPlaceholder: 'e.g., Diabetes, Hypertension',
        additionalInfoNote: 'Note: Please list all your current health conditions. This will help us match your medications to your specific needs and provide better timing recommendations.'
    };
    
    const translations = t || defaultT;

    return (
        <div className="space-y-4">
             <div className="border-t border-gray-200 pt-4">
                 <h3 className="text-lg font-medium text-gray-800">{translations.additionalInfo}</h3>
                 <p className="mt-1 text-sm text-gray-500">Providing these details helps us perform a more thorough safety check.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                        {translations.age}
                    </label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder={translations.agePlaceholder}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="conditions" className="block text-sm font-medium text-gray-700">
                        {translations.conditions}
                    </label>
                    <input
                        type="text"
                        id="conditions"
                        value={conditions}
                        onChange={(e) => setConditions(e.target.value)}
                        placeholder={translations.conditionsPlaceholder}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                <p className="text-sm text-blue-700">
                    <span className="font-semibold">Note:</span> {translations.additionalInfoNote}
                </p>
            </div>
        </div>
    );
};

export default PatientInfoForm;