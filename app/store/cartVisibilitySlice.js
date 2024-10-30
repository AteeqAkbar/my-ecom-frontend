import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
};

export const cartVisibilitySlice = createSlice({
  name: "cartVisibility",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const { openCart, closeCart } = cartVisibilitySlice.actions;

export default cartVisibilitySlice.reducer;
