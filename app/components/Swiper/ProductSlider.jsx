import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import ProductCard from "../Cards/ProductCard";
import { useQuery } from "@tanstack/react-query";
import ProductCardSkeleton from "../Cards/ProductCardSkeleton";
import { fetchProducts } from "@/app/services/api";
import { generateImageUrl } from "@/app/utils/helperFun";
import Link from "next/link";

export default function ProductSlider({ showOne = false }) {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["fetchProducts"],
    queryFn: () => fetchProducts(1),
  });

  if (error) return <div>An error occurred: {error.message}</div>;
  const products = product?.data || [];
  const enableLoop = products.length > (showOne ? 1 : 4);
  return (
    <>
      {showOne == true ? (
        <div className="w-full">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={enableLoop}
            slidesPerView={1}
            spaceBetween={0}
            freeMode={false}
            modules={[Autoplay]}
            className="w-full rounded-[16px] overflow-hidden"
          >
            {isLoading &&
              Array.from({ length: 3 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[200px] min-[768px]:h-[280px] min-[1200px]:h-[340px] rounded-[16px] bg-[#f3f4f6] animate-pulse" />
                </SwiperSlide>
              ))}
            {products.length > 0 &&
              products?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link
                    href={`/products/${item?.slug || item?.id}`}
                    className="block relative w-full h-[200px] min-[768px]:h-[280px] min-[1200px]:h-[340px] rounded-[16px] overflow-hidden border border-[#eee]"
                  >
                    <img
                      src={
                        generateImageUrl(item?.images?.[0]?.url) ||
                        "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg"
                      }
                      alt={item?.name || "product-banner"}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00000099] via-[#00000044] to-transparent" />
                    <div className="absolute left-4 min-[768px]:left-8 bottom-4 min-[768px]:bottom-8 text-white max-w-[80%]">
                      <p className="text-[12px] min-[768px]:text-[14px] uppercase tracking-[2px] opacity-90">
                        Featured Product
                      </p>
                      <h3 className="text-[18px] min-[768px]:text-[28px] font-bold leading-tight mt-1">
                        {item?.name || "New Arrival"}
                      </h3>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col bg-transparent  mx-auto w-full max-w-screen-md  lg:max-w-screen-lg">
          <div className="w-full px-[12px]">
            <div
              className="section-title bb-deal my-[20px] py-[20px] z-[5] relative flex justify-between max-[991px]:pb-[0] max-[991px]:flex-col max-[991px]:justify-center max-[991px]:text-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="section-detail max-[991px]:mb-[12px]">
                <h2 className="bb-title font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">
                  Deal of the{" "}
                  <span className="bg-transparent h-[36px] bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 ">
                    Day
                  </span>
                </h2>
                <p className="font-Poppins max-w-[400px] mt-[10px] text-[14px] text-[#686e7d] leading-[18px] font-light tracking-[0.03rem] max-[991px]:mx-[auto]">
                  Don't wait. The time will never be just right.
                </p>
              </div>

              <div className="section-detail max-[991px]:mb-[12px] hidden sm:flex items-center justify-center ">
                {/* <Countdown /> */}
              </div>
            </div>
          </div>
          <Swiper
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              // disableOnInteraction: false,
            }}
            loop={enableLoop}
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 6,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              1040: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[
              FreeMode,
              Autoplay,
              //  Pagination
            ]}
            className="max-w-full "
            // className="max-w-[90%] lg:max-w-[80%]"
          >
            {isLoading &&
              Array.from({ length: 5 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <ProductCardSkeleton style={{ width: "auto" }} />
                </SwiperSlide>
              ))}
            {products.length > 0 &&
              products?.map((_, index) => (
                <SwiperSlide key={index}>
                  <ProductCard product={_} style={{ width: "auto" }} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
