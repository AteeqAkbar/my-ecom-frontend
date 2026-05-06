"use client";
import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartSidebar from "./components/Cart/CartSidebar";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import { fetchCategories } from "./store/categoriesSlice";
import { clearUserToken, hydrateAuth } from "./store/authSlice";
import { getMe } from "./services/api";
import { useRouter } from "next/navigation";
const queryClient = new QueryClient();
export default function App({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate
          loading={
            <div className="h-screen flex items-center justify-center">
              <Loader size="55px" />
            </div>
          }
          persistor={persistor}
        >
          <LoadCategories />
          {children}
          <ToastContainer />
          <CartSidebar />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

const LoadCategories = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchCategories()); // Update to fetchCategories
      const token = window.localStorage.getItem("jwtToken");
      if (!token) return;

      try {
        const user = await getMe();
        dispatch(hydrateAuth({ token, user }));
      } catch {
        dispatch(clearUserToken());
      }
    };
    loadData();
  }, [dispatch]);

  useEffect(() => {
    const handleUnauthorized = () => {
      dispatch(clearUserToken());
      router.push("/auth");
    };

    window.addEventListener("auth:unauthorized", handleUnauthorized);
    return () => window.removeEventListener("auth:unauthorized", handleUnauthorized);
  }, [dispatch, router]);

  return null;
};
