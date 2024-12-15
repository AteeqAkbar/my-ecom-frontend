// src/api/auth.js
import axiosInstance from "./axiosInstance";

export const login = async (credentials) => {
  console.log("in login");
  const response = await axiosInstance.post("/auth/local", credentials);
  return response.data; // Adjust based on your API response
};
export const register = async (credentials) => {
  const response = await axiosInstance.post(
    "/auth/local/register",
    credentials
  );
  return response.data; // Adjust based on your API response
};

export const fetchData = async () => {
  const response = await axiosInstance.get("/data"); // Adjust the endpoint as needed
  return response.data;
};
