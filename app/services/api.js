// src/api/auth.js
import axiosInstance from "./axiosInstance";

export const login = async (credentials) => {
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

export const fetchCategories = async () => {
  const response = await axiosInstance.get("/categories?populate=*");
  return response.data;
};
export const fetchProducts = async (
  page = 1,
  categories = [],
  minPrice = null,
  maxPrice = null
) => {
  console.log(page, "page");

  // Build query parameters
  const params = {
    "pagination[page]": page,
    "pagination[pageSize]": 10,
    populate: "*",
  };

  // Add category filters if they exist
  if (categories.length > 0) {
    categories.forEach((category, index) => {
      params[`filters[$or][${index}][categories][name][$eq]`] = category;
    });
  }

  // Add price filters if they exist
  if (minPrice !== null) {
    params[`filters[price][$gte]`] = minPrice;
  }
  if (maxPrice !== null) {
    params[`filters[price][$lte]`] = maxPrice;
  }

  // Make the request with constructed params
  const response = await axiosInstance.get(`/products`, { params });
  return response.data;
};

// export const fetchProducts = async (page = 1) => {
//   console.log(page, "page");
//   const response = await axiosInstance.get(
//     `/products`,
//     // `/products?pagination[page]=${page}&pagination[pageSize]=1&populate=*`,
//     {
//       params: {
//         "pagination[page]": page,
//         "pagination[pageSize]": 10,
//         populate: "*",
//       },
//     }
//   );
//   return response.data;
// };
