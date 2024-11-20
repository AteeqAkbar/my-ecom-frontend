import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        action.payload.qty
          ? (itemExists.quantity = itemExists.quantity + action.payload.qty)
          : itemExists.quantity++;
      } else if (action.payload.qty) {
        state.items.push({ ...action.payload, quantity: action.payload.qty });
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity--;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

export default persistedReducer;
