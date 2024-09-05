import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

// Add a request interceptor
api.interceptors.request.use(
  function addAuthToken(originalConfig) {
    const config = { ...originalConfig };
    // Do something before request is sent
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function handleError(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;
