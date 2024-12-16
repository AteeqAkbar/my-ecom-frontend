"use client";
import React, { useState } from "react";
import Tag from "./Tag";
import cart from "../../image/icons/cart.png";
import eye from "../../image/icons/eye.png";
import whatsapp from "../../image/icons/whatsapp.png";
import star from "../../image/icons/star.png";
import starhalf from "../../image/icons/halfstar.png";
import ModalCard from "./ModalCard";

import CustomModal from "../CustomModal";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/cartSlice";
import { openCart } from "@/app/store/cartVisibilitySlice";
import Image from "next/image";
import { generateImageUrl } from "@/app/utils/helperFun";

function ProductCard({ style = {}, product }) {
  const handleAddToCart = (product) => {
    // console.log(product);
    dispatch(addToCart(product));
    dispatch(openCart());
  };
  const phoneNumber = "03114900152"; // Replace with the recipient's phone number in international format
  const message = encodeURIComponent(`Aoa i want buy ${product?.name}
    `); // URL-encoded message
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => setIsOpen(!isOpen);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <div
        style={style}
        className="min-[1200px]:w-[25%] min-[768px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px] aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <div
          style={{ background: "#fff" }}
          className="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px] shadow1"
        >
          <div className="bb-pro-img overflow-hidden relative z-[4]">
            <span className="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
              <div className=" transition-all duration-[0.3s] ease-in-out w-[20px] h-[75px] flex items-center justify-center text-[#fff] bg-white bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] rounded-[10px] hover:backdrop-blur-none">
                <span
                  style={{
                    // writingMode: "vertical-lr",
                    // transform: "rotate(360deg)",
                    lineHeight: 1.2,
                  }}
                  className="text-[14px] ps-2 text-center flex justify-center items-center tracking-[5px]  font-bold uppercase bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500  hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 "
                >
                  S<br />a<br />l<br />e
                </span>
              </div>
            </span>

            <div className="inner-img relative block cursor-pointer overflow-hidden rounded-t-[20px] group">
              <img
                className="main-img transition-all duration-[0.3s] ease-in-out w-full transform group-hover:scale-105 group-hover:opacity-0"
                src={
                  generateImageUrl(product?.images?.[0]?.url) ||
                  "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg"
                }
                alt="product1"
              />
              <img
                className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0]  transform group-hover:opacity-100 group-hover:scale-110 w-full"
                src={
                  generateImageUrl(product?.images?.[1]?.url) ||
                  generateImageUrl(product?.images?.[0]?.url) ||
                  "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg"
                }
                alt="product2"
              />
            </div>

            <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-end justify-center">
              <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] my-4 cursor-pointer flex items-center justify-center text-[#fff] bg-white bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] rounded-[10px] hover:backdrop-blur-none">
                <a
                  onClick={toggleModal}
                  title="View Product"
                  className="w-[35px] h-[35px] flex items-center justify-center"
                >
                  <Image
                    alt="eye"
                    src={eye}
                    className=" ri-shopping-bag-4-line transition-all w-[28px] h-[28px] hover:scale-125 duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
                  ></Image>
                </a>
              </li>
              <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] my-4 cursor-pointer flex items-center justify-center text-[#fff] bg-white bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] rounded-[10px] hover:backdrop-blur-none ">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Order By Whatsapp"
                  className="w-[35px] h-[35px] flex items-center justify-center"
                >
                  <Image
                    src={whatsapp}
                    alt="whatsapp"
                    className=" ri-shopping-bag-4-line w-[28px] h-[28px] hover:scale-125 transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
                  ></Image>
                </a>
              </li>
              <li
                onClick={() => handleAddToCart(product)}
                className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] my-4 cursor-pointer flex items-center justify-center text-[#fff] bg-white bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] rounded-[10px] hover:backdrop-blur-none"
              >
                <a
                  title="Add To Cart"
                  className="w-[35px] h-[35px] flex items-center justify-center"
                >
                  <Image
                    src={cart}
                    alt="cart"
                    className=" ri-shopping-bag-4-line w-[28px] h-[28px] hover:scale-125 transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
                  ></Image>
                </a>
              </li>
            </ul>
          </div>
          <div className="bb-pro-contact p-[20px]">
            <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
              <a
                href="shop-left-sidebar-col-3.html"
                className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]"
              >
                {product?.categories?.length > 0
                  ? product?.categories[0]?.name
                  : "Special"}
              </a>
              <span className="bb-pro-rating">
                {[...Array(4)].map((_, i) => (
                  <Image
                    key={i}
                    src={star}
                    alt={"star" + i}
                    className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                  ></Image>
                ))}
                <Image
                  alt="star5"
                  key={Math.random() + 100}
                  src={starhalf}
                  className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                ></Image>
              </span>
            </div>
            <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
              <div
                title={product?.name || "Name not available"}
                // href="product-left-sidebar.html"
                className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]"
              >
                {product?.name || "Name not available"}
              </div>
            </h4>
            <div className="bb-price flex flex-wrap justify-between ">
              {/* <Tag tagclassName="shadow2"> */}
              <div className="inner-price mx-[-3px]">
                <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">
                  RS:{" "}
                  {product?.discountPrice || product?.price || "Not Available"}
                </span>
                <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
                  {product?.discountPrice ? "RS: " + product?.price : " "}
                </span>
              </div>
              {/* </Tag> */}
              {/* <Tag tagclassName="shadow2"> */}
              <span className="last-items text-[14px] text-[#686e7d]">
                {/* 200g */}
              </span>
              {/* </Tag> */}
            </div>
          </div>
        </div>
      </div>
      <CustomModal state={isOpen} close={closeModal}>
        <ModalCard product={product} close={closeModal} />
      </CustomModal>
    </>
  );
}

export default ProductCard;
