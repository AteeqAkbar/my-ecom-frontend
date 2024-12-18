"use client";
import { useState } from "react";
import ProductList from "./components/Cards/ProductList";
import Carousel from "./components/Carousel/Carousel";
import Modal from "./components/CustomModal";
import ExploreCategories from "./components/ExploreCategories";
import ModalCard from "./components/Cards/ModalCard";
import Services from "./components/Services";
import CartSidebar from "./components/Cart/CartSidebar";
import Loader from "./components/Loader";
import ProductSlider from "./components/Swiper/ProductSlider";
import GalleryCarousel from "./components/CarouselThumbnails/GalleryCarousel";
import Auth from "./components/auth/Auth";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <Carousel />
      <ExploreCategories />

      <ProductList />
      {/* <button
        onClick={toggleModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button> */}
      {/* 
      <Modal state={isOpen} close={closeModal}>
        <ModalCard />
      </Modal> */}
      <Services />

      {/* <div className="w-[200px] h-[200px]">
        <Loader />
      </div> */}

      <ProductSlider />
      <div
        class="owl-item active me-[30px] w-[256.5px]"
        // style="width: 256.5px; margin-right: 30px;"
      >
        <div
          class="bb-team-box aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <div class="bb-team-img mb-[20px] relative h-full flex items-center overflow-hidden">
            <div class="bb-team-socials transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-tl-[20px] rounded-bl-[20px] absolute right-[-38px]">
              <div class="inner-shape relative"></div>
              <ul class="mb-[0] py-[20px] px-[10px]">
                <li class="bb-social-link leading-[28px] pb-[10px]">
                  <a href="javascript:void(0)">
                    <i class="ri-facebook-fill text-[16px] hover:text-[#6c7fd8]"></i>
                  </a>
                </li>
                <li class="bb-social-link leading-[28px] pb-[10px]">
                  <a href="javascript:void(0)">
                    <i class="ri-twitter-x-fill text-[16px] hover:text-[#6c7fd8]"></i>
                  </a>
                </li>
                <li class="bb-social-link leading-[28px]">
                  <a href="javascript:void(0)">
                    <i class="ri-linkedin-fill text-[16px] hover:text-[#6c7fd8]"></i>
                  </a>
                </li>
              </ul>
            </div>
            <img
              src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/team/2.jpg"
              alt="team-4"
              class="w-full rounded-[20px]"
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
      {/* <GalleryCarousel /> */}
      {/* <Auth /> */}
    </>
  );
}
