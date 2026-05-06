import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import persistedReducer from "./cartSlice";
import { persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import cartVisibilityReducer from "./cartVisibilitySlice";
import authSliceReducer from "./authSlice";
import categoriesReducer from "./categoriesSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: persistedReducer,
    cartVisibility: cartVisibilityReducer,
    auth: authSliceReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
