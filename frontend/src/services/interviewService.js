import { apiClient } from './api';
import { API_ENDPOINTS } from '../utils/apiConfig';

export const interviewService = {
  fetchQuestions: async (role, difficulty) => {
    return apiClient(API_ENDPOINTS.MOCK_INTERVIEW_GENERATE, {
      method: 'POST',
      body: JSON.stringify({ role, difficulty }),
    });
  },
  submitAnswers: async (answers) => {
    return apiClient(API_ENDPOINTS.MOCK_INTERVIEW_SUBMIT, {
      method: 'POST',
      body: JSON.stringify({ answers }),
    });
  }
};