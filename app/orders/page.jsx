"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "../components/Breadcrumb";
import { fetchMyOrders } from "../services/api";

const formatCurrency = (value) => {
  const amount = Number(value || 0);
  return `RS ${amount.toLocaleString()}`;
};

const formatDate = (value) => {
  if (!value) return "-";
  return new Date(value).toLocaleDateString();
};

const statusClasses = {
  processing: "bg-yellow-100 text-yellow-700",
  shipped: "bg-blue-100 text-blue-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

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
  const orders = Array.isArray(data) ? data : [];
  const totalSpent = orders.reduce((sum, order) => sum + Number(order.totalAmount || 0), 0);
  const deliveredCount = orders.filter((order) => order.orderStatus === "delivered").length;
  const processingCount = orders.filter((order) => order.orderStatus === "processing").length;

  return (
    <>
      <Breadcrumb title="My Orders" />
      <section className="section-cart py-[50px] max-[1199px]:py-[35px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full px-[12px]">
            <div className="grid grid-cols-1 min-[768px]:grid-cols-3 gap-4 mb-5">
              <div className="rounded-[16px] bg-[#f8f8fb] border border-[#eee] p-4">
                <p className="text-[13px] text-[#686e7d]">Total Orders</p>
                <p className="text-[24px] font-bold text-[#3d4750] mt-1">{orders.length}</p>
              </div>
              <div className="rounded-[16px] bg-[#f8f8fb] border border-[#eee] p-4">
                <p className="text-[13px] text-[#686e7d]">Delivered / Processing</p>
                <p className="text-[24px] font-bold text-[#3d4750] mt-1">
                  {deliveredCount} / {processingCount}
                </p>
              </div>
              <div className="rounded-[16px] bg-[#f8f8fb] border border-[#eee] p-4">
                <p className="text-[13px] text-[#686e7d]">Total Spent</p>
                <p className="text-[24px] font-bold text-[#3d4750] mt-1">
                  {formatCurrency(totalSpent)}
                </p>
              </div>
            </div>

            <div className="bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[20px] p-[20px]">
              {isLoading && <p>Loading orders...</p>}
              {error && <p className="text-red-500">{error.message}</p>}
              {!isLoading && !error && orders.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-[#3d4750] font-semibold">No orders found</p>
                  <p className="text-[14px] text-[#686e7d] mt-1">
                    Start shopping and your orders will appear here.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex mt-4 px-5 py-2 rounded-[10px] bg-grad text-white text-[14px]"
                  >
                    Browse Products
                  </Link>
                </div>
              )}
              {!isLoading &&
                !error &&
                orders?.map((order) => (
                  <Link
                    key={order.id}
                    href={`/orders/${order.id}`}
                    className="block border border-[#eee] rounded-[14px] bg-white px-4 py-3 mb-3 transition hover:shadow1 hover:border-[#d8dbe8]"
                  >
                    <div className="flex justify-between items-center gap-3">
                      <div>
                        <p className="font-semibold text-[#3d4750]">Order #{order.id}</p>
                        <p className="text-[12px] text-[#686e7d]">
                          {formatDate(order.createdAt)} · {formatCurrency(order.totalAmount)} ·{" "}
                          {Array.isArray(order.items) ? order.items.length : 0} item(s)
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-[12px] font-medium capitalize ${
                          statusClasses[order.orderStatus] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {order.orderStatus || "processing"}
                      </span>
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
