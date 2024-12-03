"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import ProductSlider from "../components/Swiper/ProductSlider";
import done from "../image/icons/done.png";
import star from "../image/icons/star.png";
import starhalf from "../image/icons/halfstar.png";
import CategoriesSlider from "../components/Swiper/CategoriesSlider";
import ProductList from "../components/Cards/ProductList";
import Filter from "../components/Filter/Filter";

export default function Products() {
  return (
    <>
      <Breadcrumb title="Products" />
      <section className="section-category pt-[50px] max-[1199px]:pt-[35px] mb-[24px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <CategoriesSlider />
            </div>
          </div>
        </div>
      </section>
      <section class="section-shop pb-[50px] max-[1199px]:pb-[35px]">
        <div class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div class="flex flex-wrap w-full mb-[-24px]">
            <div class="min-[992px]:w-[25%] w-full px-[12px] mb-[24px]">
              <Filter></Filter>
            </div>
            <div class="min-[992px]:w-[75%] w-full ">
              <ProductList boxLayoutUse />
            </div>
          </div>
        </div>
      </section>
      <ProductSlider />
    </>
  );
}
