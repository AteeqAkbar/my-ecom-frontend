"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import CartSidebar from "./components/Cart/CartSidebar";
import Loader from "./components/Loader";
export default function App({ children }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="h-screen flex items-center justify-center">
            <Loader size="55px" />
          </div>
        }
        persistor={persistor}
      >
        {children}
        <CartSidebar />
      </PersistGate>
    </Provider>
  );
}
