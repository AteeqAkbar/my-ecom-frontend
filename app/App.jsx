"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Loader from "./components/Loader";
export default function App({ children }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="h-screen  flex items-center justify-center">
            <Loader />
          </div>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
