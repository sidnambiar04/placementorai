import { apiClient } from './api';
import { API_ENDPOINTS } from '../utils/apiConfig';

export const interviewService = {
  fetchQuestions: async (role, difficulty) => {
    return apiClient(`${API_ENDPOINTS.SKILL_GAP_ANALYZE}`, {
      method: 'POST',
      body: JSON.stringify({ role, difficulty }),
    });
  },
  submitAnswers: async (answers) => {
    return apiClient(`${API_ENDPOINTS.SKILL_GAP_ANALYZE}/submit`, {
      method: 'POST',
      body: JSON.stringify({ answers }),
    });
  }
};
