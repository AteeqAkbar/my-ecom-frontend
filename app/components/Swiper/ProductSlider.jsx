import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import ProductCard from "../Cards/ProductCard";

export default function ProductSlider() {
  return (
    <div className="flex items-center justify-center flex-col bg-transparent  mx-auto w-full max-w-screen-md  lg:max-w-screen-lg">
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
        loop={true}
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
        {/* {ServiceData.map((item) => ( */}
        <SwiperSlide>
          <ProductCard style={{ width: "auto" }} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard style={{ width: "auto" }} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard style={{ width: "auto" }} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard style={{ width: "auto" }} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard style={{ width: "auto" }} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard style={{ width: "auto" }} />
        </SwiperSlide>

        {/* ))} */}
      </Swiper>
    </div>
  );
}
