import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { fetchCategories } from "@/app/services/api";
import { useQuery } from "@tanstack/react-query";
import { generateImageUrl, getRandomColor } from "@/app/utils/helperFun";
import Link from "next/link";

export default function CategoriesSlider({ slidesPerView = 4 }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: fetchCategories,
  });

  if (error) return <div>An error occurred: {error.message}</div>;
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
            slidesPerView: slidesPerView,
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
        {isLoading &&
          Array.from({ length: 5 }).map((_, index) => (
            <SwiperSlide key={index}>
              <CardCategorySkeleton />
            </SwiperSlide>
          ))}
        {data &&
          data?.data?.map((category, index) => {
            const colorClass = getRandomColor(index);
            return (
              <SwiperSlide key={index}>
                <Link
                  href={`/products?categories=${category.name}`}
                  className="owl-item cloned"
                  // style="width: 204px; margin-right: 24px;"
                >
                  <div class="owl-item active me-[30px] w-auto h-[220px]">
                    <div
                      class="bb-team-box aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="800"
                    >
                      <div class="bb-team-img mb-[20px] relative h-full flex items-center overflow-hidden">
                        <div class="bb-team-socials transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-tl-[20px] rounded-bl-[20px] absolute right-[-160px]">
                          <div class="inner-shape relative"></div>
                          <ul class="mb-[0] py-[20px] px-[10px] flex flex-col items-start">
                            {category?.name?.split(" ").map((word, index) => (
                              <li
                                key={index}
                                class="bb-social-link text-[14px] text-center flex justify-center items-center font-bold uppercase bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500  hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400"
                              >
                                <span class="">{word}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Image
                          width={150}
                          height={220}
                          unoptimized={true}
                          src={
                            generateImageUrl(category?.image?.url) ||
                            "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/2.svg"
                          }
                          alt="team-4"
                          class="w-full h-[220px] object-cover rounded-[20px]"
                        />
                      </div>
                      <div class="bb-team-contact text-center">
                        <h5 class="font-quicksand tracking-[0.03rem] leading-[1.2] text-[18px] font-bold text-[#3d4750]">
                          Juliat Hilson
                        </h5>
                        <p class="font-Poppins font-light leading-[28px] tracking-[0.03rem] text-[15px] text-[#686e7d]">
                          Team Leader
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div
                    style={{ background: colorClass }}
                    className={`bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-1  aos-init aos-animate bg-opacity-50`}
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div className="category-image mb-[12px]">
                      <Image
                        unoptimized={true}
                        width={70}
                        height={70}
                        quality={100}
                        src={
                          generateImageUrl(category?.image?.url) ||
                          "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/category/2.svg"
                        }
                        alt="category"
                        className="rounded-xl max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                      />
                    </div>
                    <div className="category-sub-contact">
                      <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                        <a
                          href="shop-left-sidebar-col-3.html"
                          className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize"
                        >
                          {category?.name || "category"}
                        </a>
                      </h5>
                    </div>
                  </div> */}
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

const CardCategorySkeleton = () => {
  return (
    <div className="owl-item cloned">
      <div
        className={`bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-1 bg-[#fef1f1] animate-pulse`}
      >
        {/* Skeleton for the image */}
        <div className="category-image mb-[12px]">
          <div className="w-[50px] h-[50px] rounded-xl max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px] bg-gray-300 "></div>
        </div>

        {/* Skeleton for the title */}
        <div className="category-sub-contact">
          <div className="mb-[2px] w-[70px] h-[16px] bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};
