const API_BASE_URL = 'http://localhost:8000';

export const API_ENDPOINTS = {
  SKILL_GAP_ANALYZE: `${API_BASE_URL}/api/v1/skill_gap/analyze`,
  STUDY_RESOURCES_GENERATE: `${API_BASE_URL}/api/v1/study-resources/generate`,
  RECOMMEND_COMPANIES: `${API_BASE_URL}/api/recommend-companies`,
  RESUME_ANALYZE: `${API_BASE_URL}/api/v1/resume/analyze`,
  RESUME_OPTIMIZE: `${API_BASE_URL}/api/v1/resume/optimize`,
  HEALTH: `${API_BASE_URL}/health`,
};
