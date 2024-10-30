import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import persistedReducer from "./cartSlice";
import { persistStore } from "redux-persist";
import cartVisibilityReducer from "./cartVisibilitySlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: persistedReducer,
    cartVisibility: cartVisibilityReducer,
  },
});

export const persistor = persistStore(store);
