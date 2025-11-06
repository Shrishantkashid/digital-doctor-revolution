const API_BASE_URL = 'http://localhost:3001/api';

// User authentication API
export const authAPI = {
  register: async (username: string, password: string, email?: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}...`);
    }
    
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message);
    }
    
    return data;
  },
  
  login: async (username: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}...`);
    }
    
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message);
    }
    
    return data;
  }
};

// Prescription API
export const prescriptionAPI = {
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
    const response = await fetch(`${API_BASE_URL}/prescriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        image,
        medications,
        allergies,
        age,
        conditions,
        analysisResult
      }),
    });
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}...`);
    }
    
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message);
    }
    
    return data;
  },
  
  getPrescriptionsByUser: async (userId: string) => {
    const response = await fetch(`${API_BASE_URL}/prescriptions/${userId}`);
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}...`);
    }
    
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message);
    }
    
    return data;
  }
};

// Health check API
export const healthAPI = {
  check: async () => {
    const response = await fetch(`${API_BASE_URL}/health`);
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}...`);
    }
    
    return response.json();
  }
};