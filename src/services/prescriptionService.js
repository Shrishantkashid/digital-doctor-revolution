import { prescriptionAPI } from './apiService.js';
const prescriptionService = {
    // Save a new prescription
    savePrescription: async (userId, image, medications, allergies, age, conditions, isPregnant, isBreastfeeding, analysisResult) => {
        try {
            const response = await prescriptionAPI.savePrescription(userId, image, medications, allergies, age, conditions, isPregnant, isBreastfeeding, analysisResult);
            return response.prescription;
        }
        catch (error) {
            throw error;
        }
    },
    // Get prescriptions by user ID
    getPrescriptionsByUser: async (userId) => {
        try {
            const response = await prescriptionAPI.getPrescriptionsByUser(userId);
            return response.prescriptions;
        }
        catch (error) {
            throw error;
        }
    }
};
export default prescriptionService;