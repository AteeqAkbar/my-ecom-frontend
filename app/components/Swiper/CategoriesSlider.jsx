import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export default function CategoriesSlider() {
  return (
    <div className="flex items-center justify-center flex-col  py-2 ">
      <Swiper
        // centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
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
          // Pagination
        ]}
        className="max-w-full "
        // className="max-w-[90%] lg:max-w-[80%]"
      >
        {/* {ServiceData.map((item) => ( */}
        <SwiperSlide>
          <div
            className="owl-item cloned"
            // style="width: 204px; margin-right: 24px;"
          >
            <div
              className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-1 bg-[#fef1f1] aos-init aos-animate"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="category-image mb-[12px]">
                <img
                  src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/2.svg"
                  alt="category"
                  className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                />
              </div>
              <div className="category-sub-contact">
                <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                  <a
                    href="shop-left-sidebar-col-3.html"
                    className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                  >
                    vegetables
                  </a>
                </h5>
                <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
                  485 items
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="owl-item cloned"
            // style="width: 204px; margin-right: 24px;"
          >
            <div
              className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-1 bg-[#fef1f1] aos-init aos-animate"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="category-image mb-[12px]">
                <img
                  src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/2.svg"
                  alt="category"
                  className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                />
              </div>
              <div className="category-sub-contact">
                <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                  <a
                    href="shop-left-sidebar-col-3.html"
                    className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                  >
                    vegetables
                  </a>
                </h5>
                <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
                  485 items
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="owl-item cloned"
            // style="width: 204px; margin-right: 24px;"
          >
            <div
              className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-1 bg-[#fef1f1] aos-init aos-animate"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="category-image mb-[12px]">
                <img
                  src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/2.svg"
                  alt="category"
                  className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                />
              </div>
              <div className="category-sub-contact">
                <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                  <a
                    href="shop-left-sidebar-col-3.html"
                    className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                  >
                    vegetables
                  </a>
                </h5>
                <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
                  485 items
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="owl-item cloned"
            // style="width: 204px; margin-right: 24px;"
          >
            <div
              className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-1 bg-[#fef1f1] aos-init aos-animate"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="category-image mb-[12px]">
                <img
                  src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/2.svg"
                  alt="category"
                  className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                />
              </div>
              <div className="category-sub-contact">
                <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                  <a
                    href="shop-left-sidebar-col-3.html"
                    className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                  >
                    vegetables
                  </a>
                </h5>
                <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
                  485 items
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="owl-item cloned"
            // style="width: 204px; margin-right: 24px;"
          >
            <div
              className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-1 bg-[#fef1f1] aos-init aos-animate"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="category-image mb-[12px]">
                <img
                  src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/2.svg"
                  alt="category"
                  className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                />
              </div>
              <div className="category-sub-contact">
                <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                  <a
                    href="shop-left-sidebar-col-3.html"
                    className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                  >
                    vegetables
                  </a>
                </h5>
                <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
                  485 items
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="owl-item cloned"
            // style="width: 204px; margin-right: 24px;"
          >
            <div
              className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-1 bg-[#fef1f1] aos-init aos-animate"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="category-image mb-[12px]">
                <img
                  src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/2.svg"
                  alt="category"
                  className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                />
              </div>
              <div className="category-sub-contact">
                <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                  <a
                    href="shop-left-sidebar-col-3.html"
                    className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                  >
                    vegetables
                  </a>
                </h5>
                <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
                  485 items
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ))} */}
      </Swiper>
    </div>
  );
}
