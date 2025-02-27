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
export const postOrder = async (data) => {
  const response = await axiosInstance.post("/orders", {
    data: data,
  });
  return response.data;
};
export const checkUserExists = async (email, username) => {
  const response = await axiosInstance.get(
    `/users?filters[$or][0][email][$eq]=${email}&filters[$or][1][username][$eq]=${username}`
  );
  return response.data;
};
export const fetchSingleProduct = async (slug) => {
  const response = await axiosInstance.get(
    `/products?populate=*&filters[slug][$eq]=${slug}`
  );
  return response.data;
};
export const fetchProducts = async (
  page = 1,
  categories = [],
  minPrice = null,
  maxPrice = null
) => {
  // Build query parameters
  const params = {
    "pagination[page]": page,
    "pagination[pageSize]": 10,
    populate: "*",
  };

  // Add category filters if they exist
  if (categories.length > 0) {
    categories.forEach((category, index) => {
      params[`filters[$or][${index}][category][name][$eq]`] = category;
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
