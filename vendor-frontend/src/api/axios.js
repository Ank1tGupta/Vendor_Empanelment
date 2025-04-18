import axios from "axios";
import { getToken } from "../utils/auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/auth", // adjust if needed
});

api.interceptors.request.use((config) => {
  const token = getToken();

  // Don't attach token to login or register requests
  const noAuthNeeded = ["/login/", "/register/"];
  const isAuthRoute = noAuthNeeded.some((route) => config.url.includes(route));

  if (token && !isAuthRoute) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
