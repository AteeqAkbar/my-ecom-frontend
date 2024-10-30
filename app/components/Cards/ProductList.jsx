"use client";
import React, { useEffect, useState, Fragment } from "react";
import ProductCard from "./ProductCard";
import BoxLayout from "../BoxLayout";
import ProductCardSkeleton from "./ProductCardSkeleton";
import Countdown from "../Countdown";

function ProductList() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BoxLayout>
      <div className=" w-full px-[12px] mb-[24px]">
        <div key={Math.random() + 1002} className="bb-shop-pro-inner">
          <div
            key={Math.random() + 1002}
            className="flex flex-wrap mx-[-12px] mb-[-24px]"
          >
            <div key={Math.random() + 100} className="w-full px-[12px]">
              <div className="bb-pro-list-top mb-[24px] rounded-[20px] flex bg-[#f8f8fb] border-[1px] border-solid border-[#eee] justify-between">
                <div className="flex flex-wrap w-full">
                  <div className="w-[50%] px-[12px] max-[420px]:w-full">
                    <div className="bb-bl-btn py-[10px] flex max-[420px]:justify-center">
                      <button
                        type="button"
                        className="grid-btn btn-grid-100 h-[38px] w-[38px] flex justify-center items-center border-[0] p-[5px] bg-transparent mr-[5px] active"
                        title="grid"
                      >
                        <i className="ri-apps-line text-[20px]"></i>
                      </button>
                      <button
                        type="button"
                        className="grid-btn btn-list-100 h-[38px] w-[38px] flex justify-center items-center border-[0] p-[5px] bg-transparent"
                        title="grid"
                      >
                        <i className="ri-list-unordered text-[20px]"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-[12px]">
              <div
                className="section-title bb-deal mb-[20px] pb-[20px] z-[5] relative flex justify-between max-[991px]:pb-[0] max-[991px]:flex-col max-[991px]:justify-center max-[991px]:text-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="section-detail max-[991px]:mb-[12px]">
                  <h2 className="bb-title font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">
                    Day of the <span className="text-[#6c7fd8]">deal</span>
                  </h2>
                  <p className="font-Poppins max-w-[400px] mt-[10px] text-[14px] text-[#686e7d] leading-[18px] font-light tracking-[0.03rem] max-[991px]:mx-[auto]">
                    Don't wait. The time will never be just right.
                  </p>
                </div>

                <div className="section-detail max-[991px]:mb-[12px] hidden sm:flex items-center justify-center ">
                  <Countdown />
                </div>
              </div>
            </div>
            {loading
              ? [...Array(12)].map((value) => {
                  return (
                    <Fragment key={Math.random()}>
                      <ProductCardSkeleton />
                    </Fragment>
                  );
                })
              : [...Array(12)].map((value) => {
                  return (
                    <Fragment key={Math.random()}>
                      <ProductCard />
                    </Fragment>
                  );
                })}

            <div className="w-full px-[12px]">
              <div className="bb-pro-pagination mb-[24px] flex justify-between max-[575px]:flex-col max-[575px]:items-center">
                <p className="font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem] max-[575px]:mb-[10px]">
                  Showing 1-12 of 21 item(s)
                </p>
                <ul className="flex">
                  <li className="leading-[28px] mr-[6px]">
                    <a className="transition-all duration-[0.3s] ease-in-out w-[32px] cursor-pointer h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                      1
                    </a>
                  </li>
                  <li className="leading-[28px] mr-[6px]">
                    <a className="transition-all duration-[0.3s] ease-in-out w-[32px] cursor-pointer h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                      2
                    </a>
                  </li>
                  <li className="leading-[28px] mr-[6px]">
                    <a className="transition-all duration-[0.3s] ease-in-out w-[32px] cursor-pointer h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                      3
                    </a>
                  </li>
                  <li className="leading-[28px] mr-[6px]">
                    <a className="transition-all duration-[0.3s] ease-in-out w-[32px] cursor-pointer h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                      4
                    </a>
                  </li>

                  <li className="leading-[28px]">
                    <a className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                      Next {" >"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BoxLayout>
  );
}

export default ProductList;
