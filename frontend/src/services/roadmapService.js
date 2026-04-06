import { apiClient } from './api';
import { API_ENDPOINTS } from '../utils/apiConfig';

export const roadmapService = {
  generateRoadmap: async (data) => {
    return apiClient(API_ENDPOINTS.CAREER_ROADMAP_GENERATE, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }
};
