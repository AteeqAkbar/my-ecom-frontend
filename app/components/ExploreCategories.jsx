import React from "react";
import CategoriesSlider from "./Swiper/CategoriesSlider";
import Image from "next/image";
import Image1 from "@/app/image/category.jpg";

function ExploreCategories() {
  return (
    <div>
      <section className="section-category overflow-hidden py-[50px] max-[1199px]:py-[35px] bg-white">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full mb-[-24px]">
            <div className="min-[992px]:w-[41.66%] w-full px-[12px] mb-[24px]">
              <div className="bb-category-img relative max-[991px]:hidden">
                <Image
                  // style={{ width: "100%", height: "auto" }}
                  src={Image1}
                  alt="category"
                  className="w-full h-auto rounded-[30px]"
                />
                <div className="bb-offers py-[5px] px-[15px] absolute top-[20px] right-[20px] bg-[#000] opacity-[0.8] rounded-[15px]">
                  <span className="text-[14px] font-normal text-[#fff]">
                    50% Off
                  </span>
                </div>
              </div>
            </div>
            <div className="min-[992px]:w-[58.33%] w-full px-[12px] mb-[24px]">
              <div className="bb-category-contact max-[991px]:mt-[-24px]">
                <div
                  className="category-title mb-[30px] max-[991px]:hidden aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <h2 className="bg-transparent bg-clip-text leading-[1.3] text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500  hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400  text-[124px] font-bold max-[1399px]:text-[95px] max-[1202px]:text-[70px] max-[767px]:text-[142px]">
                    Explore Categories
                  </h2>
                </div>
                <CategoriesSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExploreCategories;
