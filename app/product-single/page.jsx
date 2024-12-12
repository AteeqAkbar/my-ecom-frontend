"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import ProductSlider from "../components/Swiper/ProductSlider";
import cart from "../image/icons/cart.png";
import star from "../image/icons/star.png";
import starhalf from "../image/icons/halfstar.png";
import CategoriesSlider from "../components/Swiper/CategoriesSlider";
import ProductList from "../components/Cards/ProductList";
import Filter from "../components/Filter/Filter";
import GalleryCarousel from "../components/CarouselThumbnails/GalleryCarousel";

export default function ProductsSingle() {
  const [info, setInfo] = useState("info");
  return (
    <>
      <Breadcrumb title="Products" />
      <section class="section-product py-[50px] max-[1199px]:py-[35px]">
        <div class="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div class="flex flex-wrap w-full mb-[-24px] justify-center">
            <div class="min-[992px]:w-[85%] w-full px-[12px] mb-[24px]">
              <div class="bb-single-pro mb-[24px]">
                <div class="flex flex-wrap mx-[-12px]">
                  <div class="min-[992px]:w-[41.66%] w-full px-[12px]  mb-[24px]">
                    <GalleryCarousel />
                  </div>
                  <div class="min-[992px]:w-[58.33%] w-full px-[12px] mb-[24px]">
                    <div class="bb-single-pro-contact">
                      <div class="bb-sub-title mb-[20px]">
                        <h4 class="font-quicksand text-[22px] tracking-[0.03rem] font-bold leading-[1.2] text-[#3d4750]">
                          Ground Nuts Oil Pack 52g
                        </h4>
                      </div>
                      <div class="bb-single-rating mb-[12px] flex items-center  ">
                        {[...Array(4)].map((_, i) => (
                          <img
                            key={i}
                            src={star.src}
                            className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                          ></img>
                        ))}
                        <img
                          src={starhalf.src}
                          className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                        ></img>
                        <span class="bb-read-review">
                          |&nbsp;&nbsp;
                          <a
                            href="#bb-spt-nav-review"
                            class="font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem] text-[#6c7fd8]"
                          >
                            992 Ratings
                          </a>
                        </span>
                      </div>
                      <p class="font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quas nihil laboriosam voluptatem ab consectetur
                        dolorum id, soluta sunt at culpa commodi totam quod
                        natus qui!
                      </p>
                      <div class="bb-single-price-wrap flex justify-between py-[10px]">
                        <div class="bb-single-price py-[15px]">
                          <div class="price mb-[8px]">
                            <h5 class="font-quicksand leading-[1.2] tracking-[0.03rem] text-[20px] font-extrabold text-[#3d4750]">
                              $923.00{" "}
                              <span class="text-[#3d4750] text-[20px]">
                                -78%
                              </span>
                            </h5>
                          </div>
                          <div class="mrp">
                            <p class="font-Poppins text-[16px] font-light text-[#686e7d] leading-[28px] tracking-[0.03rem]">
                              M.R.P. :{" "}
                              <span class="text-[15px] line-through">
                                $1,999.00
                              </span>
                            </p>
                          </div>
                        </div>
                        <div class="bb-single-price py-[15px]">
                          <div class="sku mb-[8px]">
                            <h5 class="font-quicksand text-[18px] font-extrabold leading-[1.2] tracking-[0.03rem] text-[#3d4750]">
                              SKU#: WH12
                            </h5>
                          </div>
                          <div class="stock">
                            <span class="text-[18px] text-[#6c7fd8]">
                              In stock
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="bb-single-list mb-[30px]">
                        <ul class="my-[-8px] pl-[18px]">
                          <li class="my-[8px] font-Poppins text-[14px] font-light leading-[28px] tracking-[0.03rem] text-[#777] list-disc">
                            <span class="font-Poppins text-[#777] text-[14px]">
                              Closure :
                            </span>{" "}
                            Hook &amp; Loop
                          </li>
                          <li class="my-[8px] font-Poppins text-[14px] font-light leading-[28px] tracking-[0.03rem] text-[#777] list-disc">
                            <span class="font-Poppins text-[#777] text-[14px]">
                              Sole :
                            </span>{" "}
                            Polyvinyl Chloride
                          </li>
                          <li class="my-[8px] font-Poppins text-[14px] font-light leading-[28px] tracking-[0.03rem] text-[#777] list-disc">
                            <span class="font-Poppins text-[#777] text-[14px]">
                              Width :
                            </span>{" "}
                            Medium
                          </li>
                          <li class="my-[8px] font-Poppins text-[14px] font-light leading-[28px] tracking-[0.03rem] text-[#777] list-disc">
                            <span class="font-Poppins text-[#777] text-[14px]">
                              Outer Material :
                            </span>{" "}
                            A-Grade Standard Quality
                          </li>
                        </ul>
                      </div>
                      <div class="bb-single-pro-weight mb-[24px]">
                        <div class="pro-title mb-[12px]">
                          <h4 class="font-quicksand leading-[1.2] tracking-[0.03rem] text-[16px] font-bold uppercase text-[#3d4750]">
                            Weight
                          </h4>
                        </div>
                        <div class="bb-pro-variation-contant">
                          <ul class="flex flex-wrap m-[-2px]">
                            <li class="my-[10px] mx-[2px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer active-variation">
                              <a className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                                250g
                              </a>
                            </li>
                            <li class="my-[10px] mx-[2px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer active-variation">
                              <a className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                                250g
                              </a>
                            </li>
                            <li class="my-[10px] mx-[2px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer active-variation">
                              <a className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                                250g
                              </a>
                            </li>
                            <li class="my-[10px] mx-[2px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer active-variation">
                              <a className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                                250g
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="bb-single-qty flex flex-wrap gap-2  ms-2 m-[-2px]">
                        <a className=" transition-all duration-[0.3s] ease-in-out  cursor-pointer  w-[85px] h-[40px] font-normal text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-around items-center rounded-[10px] border-[1px] border-solid border-[#eee]  shadow1">
                          <span
                            // onClick={decreaseQuantity}
                            className=" w-full select-none overflow-hidden rounded-s-[10px]  transition-all duration-[0.3s] ease-in-out hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white"
                          >
                            -
                          </span>
                          <span className="w-full">{/* {quantity} */}2</span>
                          <span
                            // onClick={increaseQuantity}
                            className="w-full select-none overflow-hidden rounded-e-[10px]  transition-all duration-[0.3s] ease-in-out hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white"
                          >
                            +
                          </span>
                        </a>
                        <div class="buttons m-[2px] ">
                          <div
                            // onClick={() => handleAddToCart(product)}
                            className="leading-[28px]"
                          >
                            <a
                              title="Add To Cart"
                              className="transition-all  select-none px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer   h-[40px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1"
                            >
                              <img
                                src={cart.src}
                                className=" ri-shopping-bag-4-line h-9 w-9 transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
                              ></img>
                              {"  Cart"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bb-single-pro-tab">
                <div class="bb-pro-tab mb-[24px]">
                  <ul
                    class="bb-pro-tab-nav flex flex-wrap mx-[-20px] max-[991px]:justify-center"
                    id="ProTab"
                  >
                    <li class="nav-item relative leading-[28px] active">
                      <a
                        class="nav-link cursor-pointer px-[20px] font-Poppins text-[16px] text-[#686e7d] font-medium capitalize leading-[28px] tracking-[0.03rem] block active"
                        onClick={() => setInfo("detail")}
                      >
                        Detail
                      </a>
                    </li>
                    <li class="nav-item relative leading-[28px]">
                      <a
                        class="nav-link cursor-pointer px-[20px] font-Poppins text-[16px] text-[#686e7d] font-medium capitalize leading-[28px] tracking-[0.03rem] block"
                        onClick={() => setInfo("info")}
                      >
                        Information
                      </a>
                    </li>
                    <li class="nav-item relative leading-[28px]">
                      <a
                        class="nav-link cursor-pointer px-[20px] font-Poppins text-[16px] text-[#686e7d] font-medium capitalize leading-[28px] tracking-[0.03rem] block"
                        onClick={() => setInfo("reviews")}
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content">
                  {info == "detail" && (
                    <div class=" tab-pro-pane">
                      <div class="bb-inner-tabs transition-all duration-[0.3s] ease-in-out border-[1px] border-solid bg-[#f8f8fb] border-[#eee] p-[15px] rounded-[20px]">
                        <div class="bb-details">
                          <p class="mb-[12px] font-Poppins text-[#686e7d] leading-[28px] tracking-[0.03rem] font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero, voluptatum. Vitae dolores alias
                            repellat eligendi, officiis, exercitationem corporis
                            quisquam delectus cum non recusandae numquam
                            dignissimos molestiae magnam hic natus. Cumque.
                          </p>
                          <div class="details-info">
                            <ul class="list-disc pl-[20px] mb-[0]">
                              <li class="py-[5px] text-[15px] text-[#686e7d] font-Poppins leading-[28px] font-light">
                                Any Product types that You want - Simple,
                                Configurable
                              </li>
                              <li class="py-[5px] text-[15px] text-[#686e7d] font-Poppins leading-[28px] font-light">
                                Downloadable/Digital Products, Virtual Products
                              </li>
                              <li class="py-[5px] text-[15px] text-[#686e7d] font-Poppins leading-[28px] font-light">
                                Inventory Management with Backordered items
                              </li>
                              <li class="py-[5px] text-[15px] text-[#686e7d] font-Poppins leading-[28px] font-light">
                                Flatlock seams throughout.
                              </li>
                            </ul>
                            <ul class="list-disc pl-[20px] mb-[0]">
                              <li class="py-[5px] text-[15px] text-[#686e7d] font-Poppins leading-[28px] font-light">
                                <span class="inline-flex font-medium min-w-[150px]">
                                  Highlights
                                </span>
                                Form FactorWhole
                              </li>
                              <li class="py-[5px] text-[15px] text-[#686e7d] font-Poppins leading-[28px] font-light">
                                <span class="inline-flex font-medium min-w-[150px]">
                                  Seller
                                </span>
                                No Returns Allowed
                              </li>
                              <li class="py-[5px] text-[15px] text-[#686e7d] font-Poppins leading-[28px] font-light">
                                <span class="inline-flex font-medium min-w-[150px]">
                                  Services
                                </span>
                                Cash on Delivery available
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {info == "info" && (
                    <div class=" tab-pro-pane">
                      <div class="bb-inner-tabs transition-all duration-[0.3s] ease-in-out border-[1px] border-solid bg-[#f8f8fb] border-[#eee] p-[15px] rounded-[20px]">
                        <div class="information">
                          <ul class="list-disc pl-[20px]">
                            <li class="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span class="inline-flex min-w-[130px] font-medium">
                                Weight
                              </span>{" "}
                              500 g
                            </li>
                            <li class="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span class="inline-flex min-w-[130px] font-medium">
                                Dimensions
                              </span>{" "}
                              17 × 15 × 3 cm
                            </li>
                            <li class="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span class="inline-flex min-w-[130px] font-medium">
                                Color
                              </span>{" "}
                              black,yellow,red
                            </li>
                            <li class="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span class="inline-flex min-w-[130px] font-medium">
                                Brand
                              </span>{" "}
                              Wonder Fort
                            </li>
                            <li class="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span class="inline-flex min-w-[130px] font-medium">
                                Form Factor
                              </span>
                              Whole
                            </li>
                            <li class="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span class="inline-flex min-w-[130px] font-medium">
                                Quantity
                              </span>
                              1
                            </li>
                            <li class="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span class="inline-flex min-w-[130px] font-medium">
                                Container Type
                              </span>
                              Pouch
                            </li>
                            <li class="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span class="inline-flex min-w-[130px] font-medium">
                                Shelf Life
                              </span>
                              12 Months
                            </li>
                            <li class="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span class="inline-flex min-w-[130px] font-medium">
                                Ingredients
                              </span>
                              Dalchini, Dhaniya, Badi Elaichi, Laung
                            </li>
                            <li class="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                              <span class="inline-flex min-w-[130px] font-medium">
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
                    <div class=" tab-pro-pane" id="reviews">
                      <div class="bb-inner-tabs transition-all duration-[0.3s] ease-in-out border-[1px] border-solid bg-[#f8f8fb] border-[#eee] p-[15px] rounded-[20px]">
                        <div class="bb-reviews">
                          <div class="reviews-bb-box flex mb-[24px] max-[575px]:flex-col">
                            <div class="inner-image mr-[12px] max-[575px]:mr-[0] max-[575px]:mb-[12px]">
                              <img
                                src="assets/img/reviews/1.jpg"
                                alt="img-1"
                                class="w-[50px] h-[50px] max-w-[50px] rounded-[10px]"
                              />
                            </div>
                            <div class="inner-contact">
                              <h4 class="font-quicksand leading-[1.2] tracking-[0.03rem] mb-[5px] text-[16px] font-bold text-[#3d4750]">
                                Mariya Lykra
                              </h4>
                              <div class="bb-pro-rating flex">
                                <i class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]"></i>
                                <i class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]"></i>
                                <i class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]"></i>
                                <i class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]"></i>
                                <i class="ri-star-line float-left text-[15px] mr-[3px] text-[#777]"></i>
                              </div>
                              <p class="font-Poppins text-[14px] leading-[26px] font-light tracking-[0.03rem] text-[#686e7d]">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, hic expedita asperiores
                                eos neque cumque impedit quam, placeat
                                laudantium soluta repellendus possimus a
                                distinctio voluptate veritatis nostrum
                                perspiciatis est! Commodi!
                              </p>
                            </div>
                          </div>
                          <div class="reviews-bb-box flex mb-[24px] max-[575px]:flex-col">
                            <div class="inner-image mr-[12px] max-[575px]:mr-[0] max-[575px]:mb-[12px]">
                              <img
                                src="assets/img/reviews/2.jpg"
                                alt="img-2"
                                class="w-[50px] h-[50px] max-w-[50px] rounded-[10px]"
                              />
                            </div>
                            <div class="inner-contact">
                              <h4 class="font-quicksand leading-[1.2] tracking-[0.03rem] mb-[5px] text-[16px] font-bold text-[#3d4750]">
                                Saddika Alard
                              </h4>
                              <div class="bb-pro-rating flex">
                                <i class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]"></i>
                                <i class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]"></i>
                                <i class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]"></i>
                                <i class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]"></i>
                                <i class="ri-star-line float-left text-[15px] mr-[3px] text-[#777]"></i>
                              </div>
                              <p class="font-Poppins text-[14px] leading-[26px] font-light tracking-[0.03rem] text-[#686e7d]">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, hic expedita asperiores
                                eos neque cumque impedit quam, placeat
                                laudantium soluta repellendus possimus a
                                distinctio voluptate veritatis nostrum
                                perspiciatis est! Commodi!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="bb-reviews-form">
                          <h3 class="font-quicksand tracking-[0.03rem] leading-[1.2] mb-[8px] text-[20px] font-bold text-[#3d4750]">
                            Add a Review
                          </h3>
                          <div class="bb-review-rating flex mb-[12px]">
                            <span class="pr-[10px] font-Poppins text-[15px] font-semibold leading-[26px] tracking-[0.02rem] text-[#3d4750]">
                              Your ratting :
                            </span>
                            <div class="bb-pro-rating">
                              <i class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]"></i>
                              <i class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]"></i>
                              <i class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]"></i>
                              <i class="ri-star-fill float-left text-[15px] mr-[3px] text-[#fea99a]"></i>
                              <i class="ri-star-line float-left text-[15px] mr-[3px] text-[#777]"></i>
                            </div>
                          </div>
                          <form action="#">
                            <div class="input-box mb-[24px]">
                              <input
                                type="text"
                                placeholder="Name"
                                name="your-name"
                                class="w-full h-[50px] border-[1px] border-solid border-[#eee] pl-[20px] outline-[0] text-[14px] font-normal text-[#777] rounded-[20px] p-[10px]"
                              />
                            </div>
                            <div class="input-box mb-[24px]">
                              <input
                                type="email"
                                placeholder="Email"
                                name="your-email"
                                class="w-full h-[50px] border-[1px] border-solid border-[#eee] pl-[20px] outline-[0] text-[14px] font-normal text-[#777] rounded-[20px] p-[10px]"
                              />
                            </div>
                            <div class="input-box mb-[24px]">
                              <textarea
                                name="your-comment"
                                placeholder="Enter Your Comment"
                                class="w-full h-[100px] border-[1px] border-solid border-[#eee] py-[20px] pl-[20px] pr-[10px] outline-[0] text-[14px] font-normal text-[#777] rounded-[20px] p-[10px]"
                              ></textarea>
                            </div>
                            <div class="input-button">
                              <a
                                href="javascript:void(0)"
                                class="bb-btn-2 transition-all duration-[0.3s] ease-in-out h-[40px] inline-flex font-Poppins leading-[28px] tracking-[0.03rem] py-[4px] px-[15px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]"
                              >
                                View Cart
                              </a>
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
