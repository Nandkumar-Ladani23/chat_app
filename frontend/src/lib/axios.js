import axios from 'axios';

// Allow overriding the API base URL from Vite env var for production deployments (Vercel).
// If VITE_API_URL is not set, fall back to the development default or root '/api' in production.
const API_URL = import.meta.env.VITE_API_URL ?? (import.meta.env.MODE === 'development' ? 'http://localhost:3000/api' : '/api');

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
