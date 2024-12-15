// src/store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserToken(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      Cookies.set("jwtToken", action.payload.token); // Store token in cookies
    },
    clearUserToken(state) {
      state.token = null;
      state.user = null;
      Cookies.remove("jwtToken"); // Remove token from cookies
    },
  },
});

export const { setUserToken, clearUserToken } = authSlice.actions;
export default authSlice.reducer;
