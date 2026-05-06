"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "../components/Breadcrumb";
import { fetchMyOrders } from "../services/api";

export default function OrdersPage() {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth?.token) {
      router.push("/auth");
    }
  }, [auth?.token, router]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["my-orders"],
    queryFn: fetchMyOrders,
    enabled: !!auth?.token,
  });

  return (
    <>
      <Breadcrumb title="My Orders" />
      <section className="section-cart py-[50px] max-[1199px]:py-[35px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full px-[12px]">
            <div className="bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[20px] p-[20px]">
              {isLoading && <p>Loading orders...</p>}
              {error && <p className="text-red-500">{error.message}</p>}
              {!isLoading && !error && data?.length === 0 && <p>No orders found.</p>}
              {!isLoading &&
                !error &&
                data?.map((order) => (
                  <Link
                    key={order.id}
                    href={`/orders/${order.id}`}
                    className="block border-b border-[#eee] py-3 hover:text-[#6c7fd8]"
                  >
                    <div className="flex justify-between">
                      <span>Order #{order.id}</span>
                      <span>{order.status || "Pending"}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
