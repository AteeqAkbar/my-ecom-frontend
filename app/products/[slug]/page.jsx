"use client";
import React, { useEffect, useState } from "react";

import cart from "../../image/icons/cart.png";
import star from "../../image/icons/star.png";
import starhalf from "../../image/icons/halfstar.png";
import whatsapp from "../../image/icons/whatsapp.png";

import Image from "next/image";
import GalleryCarousel from "@/app/components/CarouselThumbnails/GalleryCarousel";
import Breadcrumb from "@/app/components/Breadcrumb";
import ProductSlider from "@/app/components/Swiper/ProductSlider";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleProduct } from "@/app/services/api";
import ProductStats from "@/app/components/Cards/ProductStats";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/cartSlice";
import ProductSkeleton from "@/app/components/Cards/ProductSkeleton";
import Link from "next/link";
export default function ProductPage() {
  const { slug } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["singleProduct", slug],
    queryFn: () => fetchSingleProduct(slug),
  });
  const product = data?.data?.[0];
  console.log(data, "data", error, isLoading, product);
  const [info, setInfo] = useState("reviews");

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, qty: quantity }));
  };
  if (error) {
    return (
      <h1 className="text-3xl text-center my-8 font-bold text-gray-400">
        Error: {error.message}
      </h1>
    );
  }
  const baseUrl = `${window.location.protocol}//${window.location.host}`;
  const productLink = `${baseUrl}/products/${product?.slug}`;
  const phoneNumber = "03114900152"; // Replace with the recipient's phone number in international format
  const message = encodeURIComponent(
    `Hi I would like to buy ${product?.name} \nLink: ${productLink}`
  );

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <>
      <Breadcrumb title={product?.name} />
      <section className="section-product py-[50px] max-[1199px]:py-[35px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full mb-[-24px] justify-center">
            <div className="min-[992px]:w-[85%] w-full px-[12px] mb-[24px]">
              {isLoading ? (
                <ProductSkeleton />
              ) : (
                <div className="bb-single-pro mb-[24px]">
                  <div className="flex flex-wrap mx-[-12px]">
                    <div className="min-[992px]:w-[41.66%] w-full px-[12px]  mb-[24px]">
                      <GalleryCarousel image={product?.images} />
                    </div>
                    <div className="min-[992px]:w-[58.33%] w-full px-[12px] mb-[24px]">
                      <div className="bb-single-pro-contact">
                        <div className="bb-sub-title mb-[20px]">
                          <h4 className="font-quicksand text-[22px] tracking-[0.03rem] font-bold leading-[1.2] text-[#3d4750]">
                            {product?.name || "Name not available"}
                          </h4>
                        </div>
                        <div className="bb-single-rating mb-[12px] flex items-center  ">
                          {[...Array(4)].map((_, i) => (
                            <Image
                              key={i}
                              src={star}
                              alt={"star" + i}
                              className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                            ></Image>
                          ))}
                          <Image
                            src={starhalf}
                            alt={"starhalf"}
                            className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                          ></Image>
                          <span className="bb-read-review">
                            |&nbsp;&nbsp;
                            <a className="font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem] text-[#6c7fd8]">
                              {Math.floor(Math.random() * 200) + 100} Ratings
                            </a>
                          </span>
                        </div>
                        <p className="font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem]">
                          {product?.description ||
                            `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quas nihil laboriosam voluptatem ab consectetur
                        dolorum id, soluta sunt at culpa commodi totam quod
                        natus qui!`}
                        </p>
                        <ProductStats />
                        <div className="bb-single-price-wrap flex justify-between py-[10px]">
                          <div className="bb-single-price py-[15px]">
                            <div className="price mb-[8px]">
                              <h5 className="font-quicksand leading-[1.2] tracking-[0.03rem] text-[20px] font-extrabold text-[#3d4750]">
                                {"RS " + product?.discountPrice ||
                                  "RS " + product?.price ||
                                  "Price not available"}
                                {/* <span className="text-[#3d4750] text-[20px]">
                                -78%
                              </span> */}
                              </h5>
                            </div>
                            <div className="mrp">
                              <p className="font-Poppins line-through text-[16px] font-light text-[#686e7d] leading-[28px] tracking-[0.03rem]">
                                {"RS " + product?.discountPrice
                                  ? "RS " + product?.price
                                  : ""}
                              </p>
                            </div>
                          </div>
                          <div className="bb-single-price py-[15px]">
                            <div className="sku mb-[8px]">
                              <h5 className="font-quicksand text-[18px] font-extrabold leading-[1.2] tracking-[0.03rem] text-[#3d4750]">
                                SKU#: WH12
                              </h5>
                            </div>
                            <div className="stock">
                              <span className="text-[18px] text-[#6c7fd8]">
                                In stock
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <div className="bb-single-list mb-[30px]">
                        <ul className="my-[-8px] pl-[18px]">
                          <li className="my-[8px] font-Poppins text-[14px] font-light leading-[28px] tracking-[0.03rem] text-[#777] list-disc">
                            <span className="font-Poppins text-[#777] text-[14px]">
                              Closure :
                            </span>{" "}
                            Hook &amp; Loop
                          </li>
                          <li className="my-[8px] font-Poppins text-[14px] font-light leading-[28px] tracking-[0.03rem] text-[#777] list-disc">
                            <span className="font-Poppins text-[#777] text-[14px]">
                              Sole :
                            </span>{" "}
                            Polyvinyl Chloride
                          </li>
                          <li className="my-[8px] font-Poppins text-[14px] font-light leading-[28px] tracking-[0.03rem] text-[#777] list-disc">
                            <span className="font-Poppins text-[#777] text-[14px]">
                              Width :
                            </span>{" "}
                            Medium
                          </li>
                          <li className="my-[8px] font-Poppins text-[14px] font-light leading-[28px] tracking-[0.03rem] text-[#777] list-disc">
                            <span className="font-Poppins text-[#777] text-[14px]">
                              Outer Material :
                            </span>{" "}
                            A-Grade Standard Quality
                          </li>
                        </ul>
                      </div>
                      <div className="bb-single-pro-weight mb-[24px]">
                        <div className="pro-title mb-[12px]">
                          <h4 className="font-quicksand leading-[1.2] tracking-[0.03rem] text-[16px] font-bold uppercase text-[#3d4750]">
                            Weight
                          </h4>
                        </div>
                        <div className="bb-pro-variation-contant">
                          <ul className="flex flex-wrap m-[-2px]">
                            <li className="my-[10px] mx-[2px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer active-variation">
                              <a className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                                250g
                              </a>
                            </li>
                            <li className="my-[10px] mx-[2px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer active-variation">
                              <a className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                                250g
                              </a>
                            </li>
                            <li className="my-[10px] mx-[2px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer active-variation">
                              <a className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                                250g
                              </a>
                            </li>
                            <li className="my-[10px] mx-[2px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer active-variation">
                              <a className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                                250g
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                        <div className="bb-single-qty flex flex-wrap gap-2  ms-2 m-[-2px]">
                          <a className=" transition-all duration-[0.3s] ease-in-out  cursor-pointer  w-[85px] h-[40px] font-normal text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-around items-center rounded-[10px] border-[1px] border-solid border-[#eee]  shadow1">
                            <span
                              onClick={decreaseQuantity}
                              className=" w-full select-none overflow-hidden rounded-s-[10px]  transition-all duration-[0.3s] ease-in-out hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white"
                            >
                              -
                            </span>
                            <span className="w-full">{quantity}</span>
                            <span
                              onClick={increaseQuantity}
                              className="w-full select-none overflow-hidden rounded-e-[10px]  transition-all duration-[0.3s] ease-in-out hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white"
                            >
                              +
                            </span>
                          </a>
                          <div className="buttons m-[2px] ">
                            <div
                              onClick={() => handleAddToCart(product)}
                              className="leading-[28px]"
                            >
                              <a
                                title="Add To Cart"
                                className="transition-all animate-bounce select-none px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer   h-[40px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1"
                              >
                                <Image
                                  src={cart}
                                  alt="cart"
                                  className=" ri-shopping-bag-4-line h-9 w-9 transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
                                ></Image>
                                {"  Cart"}
                              </a>
                            </div>
                          </div>
                          <div className="buttons m-[2px] ">
                            <div
                              // onClick={() => handleAddToCart(product)}
                              className="leading-[28px]"
                            >
                              <Link
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Order By Whatsapp"
                                className="transition-all animate-bounce select-none px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer   h-[40px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1"
                              >
                                <Image
                                  src={whatsapp}
                                  alt="whatsapp"
                                  className=" ri-shopping-bag-4-line w-[28px] h-[28px] hover:scale-125 transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
                                ></Image>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="bb-single-pro-tab">
                <div className="bb-pro-tab mb-[24px]">
                  <ul
                    className="bb-pro-tab-nav flex flex-wrap mx-[-20px] max-[991px]:justify-center"
                    id="ProTab"
                  >
                    {/* <li className="nav-item relative leading-[28px]">
                      <a
                        className="nav-link cursor-pointer px-[20px] font-Poppins text-[16px] text-[#686e7d] font-medium capitalize leading-[28px] tracking-[0.03rem] block"
                        onClick={() => setInfo("info")}
                      >
                        Information
                      </a>
                    </li> */}
                    <li className="nav-item relative leading-[28px]">
                      <a
                        className={`nav-link cursor-pointer px-[20px] font-Poppins text-[16px] text-[#686e7d] font-medium capitalize leading-[28px] tracking-[0.03rem] ${
                          info == "reviews" &&
                          " bg-transparent flex items-center bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 "
                        } `}
                        onClick={() => setInfo("reviews")}
                      >
                        Reviews
                      </a>
                    </li>
                    <li className="nav-item relative leading-[28px] active">
                      <a
                        className={`nav-link cursor-pointer px-[20px] font-Poppins text-[16px] text-[#686e7d] font-medium capitalize leading-[28px] tracking-[0.03rem] ${
                          info == "detail" &&
                          " bg-transparent flex items-center bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 "
                        } `}
                        onClick={() => setInfo("detail")}
                      >
                        Detail
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  {info == "detail" && (
                    <div className=" tab-pro-pane">
                      <div className="bb-inner-tabs transition-all duration-[0.3s] ease-in-out border-[1px] border-solid bg-[#f8f8fb] border-[#eee] p-[15px] rounded-[20px]">
                        <div className="bb-details">
                          <p className="mb-[12px] font-Poppins text-[#686e7d] leading-[28px] tracking-[0.03rem] font-light">
                            {product?.description ||
                              `Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero, voluptatum. Vitae dolores alias
                            repellat eligendi, officiis, exercitationem corporis
                            quisquam delectus cum non recusandae numquam
                            dignissimos molestiae magnam hic natus. Cumque.`}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {info == "info" && (
                    <div className=" tab-pro-pane">
                      <div className="bb-inner-tabs transition-all duration-[0.3s] ease-in-out border-[1px] border-solid bg-[#f8f8fb] border-[#eee] p-[15px] rounded-[20px]">
                        <div className="information">
                          <ul className="list-disc pl-[20px]">
                            <li className="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span className="inline-flex min-w-[130px] font-medium">
                                Weight
                              </span>{" "}
                              500 g
                            </li>
                            <li className="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span className="inline-flex min-w-[130px] font-medium">
                                Dimensions
                              </span>{" "}
                              17 × 15 × 3 cm
                            </li>
                            <li className="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span className="inline-flex min-w-[130px] font-medium">
                                Color
                              </span>{" "}
                              black,yellow,red
                            </li>
                            <li className="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span className="inline-flex min-w-[130px] font-medium">
                                Brand
                              </span>{" "}
                              Wonder Fort
                            </li>
                            <li className="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span className="inline-flex min-w-[130px] font-medium">
                                Form Factor
                              </span>
                              Whole
                            </li>
                            <li className="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span className="inline-flex min-w-[130px] font-medium">
                                Quantity
                              </span>
                              1
                            </li>
                            <li className="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span className="inline-flex min-w-[130px] font-medium">
                                Container Type
                              </span>
                              Pouch
                            </li>
                            <li className="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span className="inline-flex min-w-[130px] font-medium">
                                Shelf Life
                              </span>
                              12 Months
                            </li>
                            <li className="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span className="inline-flex min-w-[130px] font-medium">
                                Ingredients
                              </span>
                              Dalchini, Dhaniya, Badi Elaichi, Laung
                            </li>
                            <li className="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span className="inline-flex min-w-[130px] font-medium">
                                Other Features
                              </span>
                              Ingredient Type: Vegetarian
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  {info == "reviews" && (
                    <div className=" tab-pro-pane" id="reviews">
                      <div className="bb-inner-tabs transition-all duration-[0.3s] ease-in-out border-[1px] border-solid bg-[#f8f8fb] border-[#eee] p-[15px] rounded-[20px]">
                        <div className="bb-reviews">
                          <div className="reviews-bb-box flex mb-[24px] max-[575px]:flex-col">
                            <div className="inner-image mr-[12px] max-[575px]:mr-[0] max-[575px]:mb-[12px]">
                              {/* <img
                                src="assets/img/reviews/1.jpg"
                                alt="img-1"
                                className="w-[50px] h-[50px] max-w-[50px] rounded-[10px]"
                              /> */}
                            </div>
                            <div className="inner-contact">
                              <h4 className="font-quicksand leading-[1.2] tracking-[0.03rem] mb-[5px] text-[16px] font-bold text-[#3d4750]">
                                Malik S.
                              </h4>
                              <div className="bb-pro-rating flex">
                                {[...Array(4)].map((_, i) => (
                                  <Image
                                    key={i}
                                    src={star}
                                    alt={"star" + i}
                                    className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                                  ></Image>
                                ))}
                                <Image
                                  src={starhalf}
                                  alt={"starhalf"}
                                  className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                                ></Image>
                              </div>
                              <p className="font-Poppins text-[14px] leading-[26px] font-light tracking-[0.03rem] text-[#686e7d]">
                                best best quality. .jldi deliver hogya or size b
                                perfect hai h
                              </p>
                            </div>
                          </div>
                          <div className="reviews-bb-box flex mb-[24px] max-[575px]:flex-col">
                            <div className="inner-image mr-[12px] max-[575px]:mr-[0] max-[575px]:mb-[12px]">
                              {/* <img
                                src="assets/img/reviews/2.jpg"
                                alt="img-2"
                                className="w-[50px] h-[50px] max-w-[50px] rounded-[10px]"
                              /> */}
                            </div>
                            <div className="inner-contact">
                              <h4 className="font-quicksand leading-[1.2] tracking-[0.03rem] mb-[5px] text-[16px] font-bold text-[#3d4750]">
                                Mehr
                              </h4>
                              <div className="bb-pro-rating flex">
                                {[...Array(4)].map((_, i) => (
                                  <Image
                                    key={i}
                                    src={star}
                                    alt={"star" + i}
                                    className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                                  ></Image>
                                ))}
                                <Image
                                  src={starhalf}
                                  alt={"starhalf"}
                                  className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                                ></Image>
                              </div>
                              <p className="font-Poppins text-[14px] leading-[26px] font-light tracking-[0.03rem] text-[#686e7d]">
                                osam great nice quality market price say bohut
                                cam price hay market may is ki price 10 say oper
                                hay but it's really good 💯
                              </p>
                            </div>
                          </div>
                          <div className="reviews-bb-box flex mb-[24px] max-[575px]:flex-col">
                            <div className="inner-image mr-[12px] max-[575px]:mr-[0] max-[575px]:mb-[12px]">
                              {/* <img
                                src="assets/img/reviews/2.jpg"
                                alt="img-2"
                                className="w-[50px] h-[50px] max-w-[50px] rounded-[10px]"
                              /> */}
                            </div>
                            <div className="inner-contact">
                              <h4 className="font-quicksand leading-[1.2] tracking-[0.03rem] mb-[5px] text-[16px] font-bold text-[#3d4750]">
                                Janzaib.
                              </h4>
                              <div className="bb-pro-rating flex">
                                {[...Array(4)].map((_, i) => (
                                  <Image
                                    key={i}
                                    src={star}
                                    alt={"star" + i}
                                    className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                                  ></Image>
                                ))}
                                <Image
                                  src={starhalf}
                                  alt={"starhalf"}
                                  className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                                ></Image>
                              </div>
                              <p className="font-Poppins text-[14px] leading-[26px] font-light tracking-[0.03rem] text-[#686e7d]">
                                Excellent product in this price. Package was
                                delivered safe and within the time. Will
                                recommend it
                              </p>
                            </div>
                          </div>
                          <div className="reviews-bb-box flex mb-[24px] max-[575px]:flex-col">
                            <div className="inner-image mr-[12px] max-[575px]:mr-[0] max-[575px]:mb-[12px]">
                              {/* <img
                                src="assets/img/reviews/2.jpg"
                                alt="img-2"
                                className="w-[50px] h-[50px] max-w-[50px] rounded-[10px]"
                              /> */}
                            </div>
                            <div className="inner-contact">
                              <h4 className="font-quicksand leading-[1.2] tracking-[0.03rem] mb-[5px] text-[16px] font-bold text-[#3d4750]">
                                Asrar B.
                              </h4>
                              <div className="bb-pro-rating flex">
                                {[...Array(4)].map((_, i) => (
                                  <Image
                                    key={i}
                                    src={star}
                                    alt={"star" + i}
                                    className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                                  ></Image>
                                ))}
                                <Image
                                  src={starhalf}
                                  alt={"starhalf"}
                                  className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                                ></Image>
                              </div>
                              <p className="font-Poppins text-[14px] leading-[26px] font-light tracking-[0.03rem] text-[#686e7d]">
                                Bahoot hi kammal ki product he Dill khush ho gya
                                Qeemat ke mutabiq bahoot hi zyada kammal ki
                                cheez he Ma ne bahoot si mangwai he online pr
                                yeh sb se zaberzast he😍
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bb-reviews-form">
                          <h3 className="font-quicksand tracking-[0.03rem] leading-[1.2] mb-[8px] text-[20px] font-bold text-[#3d4750]">
                            Add a Review
                          </h3>
                          <div className="bb-review-rating flex mb-[12px]">
                            <span className="pr-[10px] font-Poppins text-[15px] font-semibold leading-[26px] tracking-[0.02rem] text-[#3d4750]">
                              Your ratting :
                            </span>
                            <div className="bb-pro-rating">
                              {[...Array(4)].map((_, i) => (
                                <Image
                                  key={i}
                                  src={star}
                                  alt={"star" + i}
                                  className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                                ></Image>
                              ))}
                              <Image
                                src={starhalf}
                                alt={"starhalf"}
                                className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                              ></Image>
                            </div>
                          </div>
                          <form action="#">
                            <div className="input-box mb-[24px]">
                              <input
                                type="text"
                                placeholder="Name"
                                name="your-name"
                                className="w-full h-[50px] border-[1px] border-solid border-[#eee] pl-[20px] outline-[0] text-[14px] font-normal text-[#777] rounded-[20px] p-[10px]"
                              />
                            </div>
                            <div className="input-box mb-[24px]">
                              <input
                                type="email"
                                placeholder="Email"
                                name="your-email"
                                className="w-full h-[50px] border-[1px] border-solid border-[#eee] pl-[20px] outline-[0] text-[14px] font-normal text-[#777] rounded-[20px] p-[10px]"
                              />
                            </div>
                            <div className="input-box mb-[24px]">
                              <textarea
                                name="your-comment"
                                placeholder="Enter Your Comment"
                                className="w-full h-[100px] border-[1px] border-solid border-[#eee] py-[20px] pl-[20px] pr-[10px] outline-[0] text-[14px] font-normal text-[#777] rounded-[20px] p-[10px]"
                              ></textarea>
                            </div>
                            <div className="buttons m-[2px] w-40 ">
                              <div
                                // onClick={() => handleAddToCart(product)}
                                className="leading-[28px]"
                              >
                                <a
                                  title="Add Review"
                                  className="transition-all select-none px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer   h-[40px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1"
                                >
                                  {" Add Review"}
                                </a>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSlider />
    </>
  );
}
