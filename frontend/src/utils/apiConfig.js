const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://placementorai-backend.onrender.com';

export const API_ENDPOINTS = {
  SKILL_GAP_ANALYZE: `${API_BASE_URL}/api/v1/skill_gap/analyze`,
  STUDY_RESOURCES_GENERATE: `${API_BASE_URL}/api/v1/study-resources/generate`,
  RECOMMEND_COMPANIES: `${API_BASE_URL}/api/recommend-companies`,
  RESUME_ANALYZE: `${API_BASE_URL}/api/v1/resume/analyze`,
  RESUME_OPTIMIZE: `${API_BASE_URL}/api/v1/resume/optimize`,
  MOCK_INTERVIEW_GENERATE: `${API_BASE_URL}/api/v1/mock-interview/generate`,
  MOCK_INTERVIEW_SUBMIT: `${API_BASE_URL}/api/v1/mock-interview/evaluate`,
  CAREER_ROADMAP_GENERATE: `${API_BASE_URL}/api/v1/roadmap/generate`,  // ← renamed
  AUTH_LOGIN: `${API_BASE_URL}/api/v1/auth/login`,
  HEALTH: `${API_BASE_URL}/health`,
};