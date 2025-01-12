// src/api/axiosInstance.js
import axios from "axios";
import Cookies from "js-cookie";
// export const baseURL = "http://localhost:1337";
export const baseURL = "http://159.89.162.207";
export const baseURLfrontend = "http://localhost:3000";
export const baseURLapi = "http://159.89.162.207/api";
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
