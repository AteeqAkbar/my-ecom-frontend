import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 430 },
    { id: 5, name: "Product 5", price: 530 },
    { id: 6, name: "Product 6", price: 630 },
    { id: 7, name: "Product 7", price: 730 },
    { id: 8, name: "Product 8", price: 830 },
    { id: 9, name: "Product 9", price: 930 },
    { id: 10, name: "Product 10", price: 1030 },
    { id: 11, name: "Product 11", price: 101 },
    { id: 13, name: "Product 13", price: 130 },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
