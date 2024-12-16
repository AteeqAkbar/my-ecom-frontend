import React, { useState } from "react";
import star from "../../image/icons/star.png";
import cart from "../../image/icons/cart.png";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/cartSlice";
import Image from "next/image";
import { generateImageUrl } from "@/app/utils/helperFun";

export default function ModalCard({ product, close }) {
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
    close();
  };

  return (
    <div className="bb-modal-dialog h-full my-[0%] mx-auto max-w-[700px] w-[700px] max-[991px]:max-w-[650px] max-[991px]:w-[650px] max-[767px]:w-[80%] max-[767px]:h-auto max-[767px]:max-w-[80%] max-[767px]:m-[0] max-[767px]:py-[35px] max-[767px]:mx-auto max-[575px]:w-[90%] transition-transform duration-[0.3s] ease-out cr-fadeOutUp bb-fadeOutUp">
      <div className="modal-content p-[24px] relative bg-[#E4EBF5] shadow  rounded-[20px] overflow-hidden">
        <div className="modal-body mx-[-12px] max-[767px]:mx-[0]">
          <div className="flex flex-wrap mx-[-12px] mb-[-24px]">
            <div className="min-[768px]:w-[41.66%] min-[576px]:w-full px-[12px] mb-[24px]">
              <div className="single-pro-img single-pro-img-no-sidebar h-full border-[1px] border-solid border-[#eee] overflow-hidden rounded-[20px]">
                <div className="single-product-scroll h-full">
                  <div
                    className="single-slide zoom-image-hover h-full bg-[#fff] flex items-center"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <img
                      className="img-responsive max-w-full block hover:scale-125 transition-all duration-500 cursor-pointer"
                      src={
                        generateImageUrl(product?.images?.[0]?.url) ||
                        "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg"
                      }
                      alt="product-img-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="min-[768px]:w-[58.33%] min-[576px]:w-full px-[12px] mb-[24px]">
              <div className="quickview-pro-content">
                <h5 className="bb-quick-title">
                  <a
                    href="product-left-sidebar.html"
                    className="font-Poppins tracking-[0.03rem] mb-[10px] block text-[#3d4750] text-[20px] leading-[30px] font-medium"
                  >
                    {product?.name ||
                      " Mix nuts premium quality organic dried fruit 250g pack"}
                  </a>
                </h5>
                <div className="bb-pro-rating flex mb-[10px]">
                  <span className="bb-pro-rating">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src={star}
                        alt={"star" + i}
                        className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                      ></Image>
                    ))}
                  </span>
                </div>
                <div className="bb-quickview-desc mb-[10px] text-[15px] leading-[24px] text-[#777] font-light">
                  {product?.description ||
                    `Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1900s,`}
                </div>
                <div className="bb-quickview-price pt-[5px] pb-[10px] flex items-center justify-left">
                  <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">
                    {product?.price || " $50.00"}
                  </span>
                  <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
                    {product?.price || " $50.00"}
                  </span>
                </div>
                <div className="bb-pro-variation mt-[15px] mb-[25px]">
                  {/* <ul className="flex flex-wrap m-[-2px]">
                    <li className=" m-[2px] py-[2px] px-[2px] cursor-pointer  text-[#777] flex items-center justify-center text-[12px] leading-[22px] rounded-[20px] font-normal">
                      <div className="leading-[28px]">
                        <a className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                          250g
                        </a>
                      </div>
                    </li>
                    <li className=" m-[2px] py-[2px] px-[2px] cursor-pointer  text-[#777] flex items-center justify-center text-[12px] leading-[22px] rounded-[20px] font-normal">
                      <div className="leading-[28px]">
                        <a className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                          500g
                        </a>
                      </div>
                    </li>
                    <li className=" m-[2px] py-[2px] px-[2px] cursor-pointer  text-[#777] flex items-center justify-center text-[12px] leading-[22px] rounded-[20px] font-normal">
                      <div className="leading-[28px]">
                        <a className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1">
                          1000g
                        </a>
                      </div>
                    </li>
                  </ul> */}
                </div>
                <div className="bb-quickview-qty flex max-[360px]:justify-center">
                  <div className="leading-[28px] mr-[6px]">
                    <a className=" transition-all duration-[0.3s] ease-in-out w-[70px] cursor-pointer h-[32px] font-normal text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-around items-center rounded-[10px] border-[1px] border-solid border-[#eee]  shadow1">
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
                  </div>
                  <div className="bb-quickview-cart ml-[4px] max-[360px]:mt-[15px] max-[360px]:ml-[0] max-[360px]:flex max-[360px]:justify-center">
                    <div
                      onClick={() => handleAddToCart(product)}
                      className="leading-[28px]"
                    >
                      <a
                        title="Add To Cart"
                        className="transition-all  select-none px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
