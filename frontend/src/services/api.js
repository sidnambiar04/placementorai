import { API_ENDPOINTS } from '../utils/apiConfig';

export const apiClient = async (endpoint, options = {}) => {
  const headers = { ...options.headers };
  
  // If the body is NOT FormData, default to application/json if not already set
  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
};
