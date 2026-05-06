import axios from "axios";
export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
export const baseURLapi = `${baseURL}/api`;
export const baseURLfrontend =
  process.env.NEXT_PUBLIC_FRONTEND_BASE_URL || "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: baseURLapi,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" ? window.localStorage.getItem("jwtToken") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401 && typeof window !== "undefined") {
      window.localStorage.removeItem("jwtToken");
      window.dispatchEvent(new CustomEvent("auth:unauthorized"));
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
