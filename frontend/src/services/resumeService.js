import { apiClient } from './api';
import { API_ENDPOINTS } from '../utils/apiConfig';

export const resumeService = {
  analyzeResume: async (formData) => {
    return apiClient(API_ENDPOINTS.RESUME_ANALYZE, {
      method: "POST",
      body: formData,
      headers: {}, // Let browser set boundary
    });
  },
  optimizeResume: async (formData) => {
    const response = await fetch(API_ENDPOINTS.RESUME_OPTIMIZE, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("Optimization failed");
    return response.blob();
  }
};
