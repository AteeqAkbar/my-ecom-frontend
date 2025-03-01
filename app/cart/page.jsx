"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import ProductSlider from "../components/Swiper/ProductSlider";
import Link from "next/link";
import Image from "next/image";
import { generateImageUrl } from "../utils/helperFun";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [totals, setTotals] = useState(0);
  useEffect(() => {
    setTotals(
      cartItems.reduce(
        (acc, item) => acc + (item.discountPrice || item.price) * item.quantity,
        0
      )
    );
  }, [cartItems]);
  return (
    <>
      <Breadcrumb />
      <section className="section-cart py-[50px] max-[1199px]:py-[35px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full mb-[-24px]">
            <div className="min-[992px]:w-[33.33%] w-full px-[12px] mb-[24px]">
              <div
                className="bb-cart-sidebar-block p-[20px] bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[20px] aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="bb-sb-title mb-[20px]">
                  <h3 className="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750]">
                    Summary
                  </h3>
                </div>
                <div className="bb-sb-blok-contact">
                  <div className="bb-cart-summary">
                    <div className="inner-summary">
                      <ul>
                        <li className="mb-[12px] flex justify-between leading-[28px]">
                          <span className="text-left font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-medium">
                            Sub-Total
                          </span>
                          <span className="text-right font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-semibold">
                            RS: {totals || "0.00"}
                          </span>
                        </li>
                        <li className="mb-[12px] flex justify-between leading-[28px]">
                          <span className="text-left font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-medium">
                            Delivery Charges
                          </span>
                          <span className="text-right font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-semibold">
                            RS: 250
                          </span>
                        </li>
                        <li className="mb-[12px] flex justify-between leading-[28px]">
                          <span className="text-left font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-medium">
                            Coupon Discount
                          </span>
                          <span className="text-right font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-semibold">
                            <a className="bb-coupon drop-coupon font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#ff0000] cursor-pointer">
                              Apply Coupon
                            </a>
                          </span>
                        </li>
                        <li className="mb-[12px] flex justify-between leading-[28px]">
                          <div className="coupon-down-box w-full">
                            <form className="relative mb-[15px]">
                              <input
                                className="bb-coupon w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] rounded-[10px]"
                                type="text"
                                placeholder="Enter Your coupon Code"
                                name="bb-coupon"
                                required=""
                              />
                              <button
                                onClick={(e) => e.preventDefault()}
                                className="bb-btn-2 transition-all duration-[0.3s] ease-in-out my-[8px] mr-[8px] flex justify-center items-center absolute right-[0] top-[0] bottom-[0] font-Poppins leading-[28px] tracking-[0.03rem] py-[2px] px-[12px] text-[13px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]"
                                type="submit"
                              >
                                Apply
                              </button>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="summary-total border-t-[1px] border-solid border-[#eee] pt-[15px]">
                      <ul className="mb-[0]">
                        <li className="mb-[6px] flex justify-between">
                          <span className="text-left font-Poppins text-[16px] leading-[28px] tracking-[0.03rem] font-semibold text-[#686e7d]">
                            Total Amount
                          </span>
                          <span className="text-right font-Poppins text-[16px] leading-[28px] tracking-[0.03rem] font-semibold text-[#686e7d]">
                            RS: {totals ? totals + 250 : "0.00"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-[992px]:w-[66.66%] w-full px-[12px] mb-[24px]">
              <div
                className="bb-cart-table overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[20px] overflow-hidden max-[1399px]:overflow-y-auto aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <table className="w-full max-[1399px]:w-[780px] ">
                  <thead>
                    <tr className="border-b-[1px] border-solid border-[#eee]">
                      <th className="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">
                        Product
                      </th>
                      <th className="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">
                        Price
                      </th>
                      <th className="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">
                        quality
                      </th>
                      <th className="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">
                        Total
                      </th>
                      <th className="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.length > 0 ? (
                      <>
                        {cartItems.map((item) => (
                          <Cartitems item={item} />
                        ))}
                      </>
                    ) : (
                      <div className="title font-medium text-[#777] p-[.5rem]">
                        Your Cart is empty!
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
              {cartItems?.length > 0 && (
                <Link
                  href={"/checkout"}
                  className=" select-none animate-bounce w-auto cursor-pointer text-[#777]  bg-[#f8f8fb] font-Poppins  text-center align-top  border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow3 mt-[24px] inline-flex items-center justify-center check-btn transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[8px] px-[20px] text-[14px] font-normal  rounded-[10px] aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  Check Out
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <ProductSlider />
    </>
  );
}

function Cartitems({ item }) {
  const dispatch = useDispatch();
  return (
    <tr className="border-b-[1px] border-solid border-[#eee]">
      <td className="p-[12px]">
        <a href="javascript:void(0)">
          <div className="Product-cart flex items-center">
            <Image
              src={
                generateImageUrl(item?.images?.[0]?.url) ||
                "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg"
              }
              alt="new-product-1"
              width={70}
              height={100}
              className="w-[70px] border-[1px] border-solid border-[#eee] rounded-[10px]"
            />
            <span className="ml-[10px] font-Poppins text-[14px] font-normal leading-[28px] tracking-[0.03rem] text-[#686e7d]">
              {item.name || " Ground Nuts Oil Pack"}
            </span>
          </div>
        </a>
      </td>
      <td className="p-[12px]">
        <span className="price font-Poppins text-[15px] font-medium leading-[26px] tracking-[0.02rem] text-[#686e7d]">
          <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">
            RS: {item?.discountPrice || item?.price || "Not Available"}
          </span>
          <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
            {item?.discountPrice ? "RS: " + item?.price : " "}
          </span>
        </span>
      </td>
      <td className="p-[12px]">
        <a className=" transition-all duration-[0.3s] ease-in-out w-[70px] cursor-pointer h-[32px] font-normal text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-around items-center rounded-[10px] border-[1px] border-solid border-[#eee]  ">
          <span
            onClick={() => dispatch(removeFromCart(item.id))}
            className=" w-full select-none overflow-hidden rounded-s-[10px]  transition-all duration-[0.3s] ease-in-out hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white"
          >
            -
          </span>
          <span className="w-full">{item?.quantity}</span>
          <span
            onClick={() => dispatch(addToCart(item))}
            className="w-full select-none overflow-hidden rounded-e-[10px]  transition-all duration-[0.3s] ease-in-out hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white"
          >
            +
          </span>
        </a>
      </td>
      <td className="p-[12px]">
        <span className="price font-Poppins text-[15px] font-medium leading-[26px] tracking-[0.02rem] text-[#686e7d]">
          RS: {(item.discountPrice || item.price) * item.quantity || "0.00"}
        </span>
      </td>
      <td className="p-[12px]">
        <div className="pro-remove">
          <a href="javascript:void(0)">
            <i className="ri-delete-bin-line transition-all duration-[0.3s] ease-in-out text-[20px] text-[#686e7d] hover:text-[#ff0000]"></i>
          </a>
        </div>
      </td>
    </tr>
  );
}
