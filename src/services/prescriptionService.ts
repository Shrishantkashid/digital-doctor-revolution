import { prescriptionAPI } from './apiService';

const prescriptionService = {
  // Save a new prescription
  savePrescription: async (
    userId: string,
    image: string,
    medications: Array<{
      name: string;
      dosage: string;
      frequency: string;
    }>,
    allergies: string,
    age: string,
    conditions: string,
    analysisResult: any
  ) => {
    try {
      const response = await prescriptionAPI.savePrescription(
        userId,
        image,
        medications,
        allergies,
        age,
        conditions,
        analysisResult
      );
      return response.prescription;
    } catch (error) {
      throw error;
    }
  },

  // Get prescriptions by user ID
  getPrescriptionsByUser: async (userId: string) => {
    try {
      const response = await prescriptionAPI.getPrescriptionsByUser(userId);
      return response.prescriptions;
    } catch (error) {
      throw error;
    }
  }
};

export default prescriptionService;