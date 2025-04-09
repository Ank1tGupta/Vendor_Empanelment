import axios from "axios";
import { getToken } from "../utils/auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/auth", // adjust if needed
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
