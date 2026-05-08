"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "../../components/Breadcrumb";
import { fetchOrderById } from "../../services/api";

const parseMaybeJson = (value, fallback) => {
  if (value == null) return fallback;
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const normalizeOrderItems = (order) => {
  const rawItems = parseMaybeJson(order?.items, order?.items);
  if (Array.isArray(rawItems)) return rawItems;
  if (Array.isArray(rawItems?.items)) return rawItems.items;
  return [];
};

const normalizeShippingAddress = (order) => {
  const parsed = parseMaybeJson(order?.shippingAddress, order?.shippingAddress);
  const shipping = parsed && typeof parsed === "object" ? parsed : {};

  return {
    fullName:
      shipping.fullName || shipping.name || shipping.full_name || order?.User?.name || "-",
    phone:
      shipping.phone ||
      shipping.phoneNumber ||
      shipping.mobile ||
      shipping.contact ||
      order?.phone ||
      "-",
    email: shipping.email || order?.User?.email || order?.email || "-",
    city: shipping.city || shipping.town || shipping.region || "-",
    address:
      shipping.address ||
      shipping.street ||
      shipping.streetAddress ||
      shipping.line1 ||
      "-",
  };
};

const formatCurrency = (value) => {
  const amount = Number(value || 0);
  return `RS ${amount.toLocaleString()}`;
};

const formatDate = (value) => {
  if (!value) return "-";
  return new Date(value).toLocaleString();
};

const statusClasses = {
  processing: "bg-yellow-100 text-yellow-700",
  shipped: "bg-blue-100 text-blue-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  pending: "bg-orange-100 text-orange-700",
  paid: "bg-green-100 text-green-700",
  failed: "bg-red-100 text-red-700",
};

export default function OrderDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth?.token) {
      router.push("/auth");
    }
  }, [auth?.token, router]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["order", id],
    queryFn: () => fetchOrderById(id),
    enabled: !!auth?.token && !!id,
  });

  const orderItems = normalizeOrderItems(data);
  const shippingAddress = normalizeShippingAddress(data);
  const orderStatus = data?.orderStatus || "processing";
  const paymentStatus = data?.paymentStatus || "pending";

  return (
    <>
      <Breadcrumb title={`Order #${id}`} />
      <section className="section-checkout py-[50px] max-[1199px]:py-[35px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full px-[12px]">
            <div className="bb-checkout-contact border-[1px] border-solid bg-[#f8f8fb] border-[#eee] p-[20px] rounded-[20px]">
              {isLoading && <p>Loading order details...</p>}
              {error && <p className="text-red-500">{error.message}</p>}
              {!isLoading && !error && data && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#eee] pb-4">
                    <div>
                      <h2 className="font-quicksand text-[22px] font-bold text-[#3d4750]">
                        Order #{data.id}
                      </h2>
                      <p className="text-[13px] text-[#686e7d] mt-1">
                        Placed on {formatDate(data.createdAt)}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-[12px] font-medium capitalize ${
                          statusClasses[orderStatus] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {orderStatus}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-[12px] font-medium capitalize ${
                          statusClasses[paymentStatus] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        Payment: {paymentStatus}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 min-[768px]:grid-cols-3 gap-4">
                    <div className="rounded-[14px] bg-[#fff] border border-[#eee] p-4">
                      <p className="text-[13px] text-[#686e7d]">Total Amount</p>
                      <p className="text-[20px] font-bold text-[#3d4750] mt-1">
                        {formatCurrency(data.totalAmount)}
                      </p>
                    </div>
                    <div className="rounded-[14px] bg-[#fff] border border-[#eee] p-4">
                      <p className="text-[13px] text-[#686e7d]">Payment Method</p>
                      <p className="text-[16px] font-semibold text-[#3d4750] mt-1 uppercase">
                        {data.paymentMethod || "COD"}
                      </p>
                    </div>
                    <div className="rounded-[14px] bg-[#fff] border border-[#eee] p-4">
                      <p className="text-[13px] text-[#686e7d]">Items</p>
                      <p className="text-[16px] font-semibold text-[#3d4750] mt-1">
                        {orderItems.length}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[14px] bg-[#fff] border border-[#eee] p-4">
                    <h3 className="font-quicksand text-[18px] font-bold text-[#3d4750] mb-3">
                      Shipping Details
                    </h3>
                    <div className="text-[14px] text-[#686e7d] leading-7">
                      <p>
                        <span className="font-medium text-[#3d4750]">Name:</span>{" "}
                        {shippingAddress.fullName}
                      </p>
                      <p>
                        <span className="font-medium text-[#3d4750]">Phone:</span>{" "}
                        {shippingAddress.phone}
                      </p>
                      <p>
                        <span className="font-medium text-[#3d4750]">Email:</span>{" "}
                        {shippingAddress.email}
                      </p>
                      <p>
                        <span className="font-medium text-[#3d4750]">City:</span>{" "}
                        {shippingAddress.city}
                      </p>
                      <p>
                        <span className="font-medium text-[#3d4750]">Address:</span>{" "}
                        {shippingAddress.address}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[14px] bg-[#fff] border border-[#eee] p-4">
                    <h3 className="font-quicksand text-[18px] font-bold text-[#3d4750] mb-3">
                      Order Items
                    </h3>
                    {orderItems.length === 0 ? (
                      <p className="text-[#686e7d]">No items found in this order.</p>
                    ) : (
                      <div className="space-y-3">
                        {orderItems.map((item, index) => (
                          <div
                            key={`${item.productId || item.name}-${index}`}
                            className="flex items-center justify-between border border-[#eee] rounded-[10px] p-3"
                          >
                            <div>
                              <p className="font-medium text-[#3d4750]">
                                {item.name || `Product #${item.productId}`}
                              </p>
                              <p className="text-[13px] text-[#686e7d]">
                                Qty: {item.quantity || 1}
                              </p>
                            </div>
                            <p className="font-semibold text-[#3d4750]">
                              {formatCurrency(
                                Number(item.price || 0) * Number(item.quantity || 1)
                              )}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
