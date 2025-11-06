import { authAPI } from './apiService.js';
const authService = {
    // Register a new user
    register: async (username, password, email) => {
        try {
            const response = await authAPI.register(username, password, email);
            return response.user;
        }
        catch (error) {
            throw error;
        }
    },
    // Login user
    login: async (username, password) => {
        try {
            const response = await authAPI.login(username, password);
            return response.user;
        }
        catch (error) {
            throw error;
        }
    }
};
export default authService;