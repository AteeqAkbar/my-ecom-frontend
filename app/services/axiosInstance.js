// src/api/axiosInstance.js
import axios from "axios";
import Cookies from "js-cookie";
// export const baseURL = "http://localhost:1337";
export const baseURL = "https://api.dico.pk";
export const baseURLfrontend = "https://dico.pk";
// export const baseURLfrontend = "http://localhost:3000";
export const baseURLapi = "https://api.dico.pk/api";
// export const baseURLapi = "http://localhost:1337/api";
const axiosInstance = axios.create({
  baseURL: baseURLapi, // Replace with your API base URL
});

// Add a request interceptor to include JWT in headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("jwtToken"); // Retrieve token from cookies
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
