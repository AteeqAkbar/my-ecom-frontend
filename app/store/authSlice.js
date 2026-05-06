// src/store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

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
      if (typeof window !== "undefined" && action.payload.token) {
        window.localStorage.setItem("jwtToken", action.payload.token);
      }
    },
    hydrateAuth(state, action) {
      state.token = action.payload?.token || null;
      state.user = action.payload?.user || null;
    },
    clearUserToken(state) {
      state.token = null;
      state.user = null;
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("jwtToken");
      }
    },
  },
});

export const { setUserToken, hydrateAuth, clearUserToken } = authSlice.actions;
export default authSlice.reducer;
