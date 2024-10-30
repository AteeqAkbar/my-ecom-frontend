"use client";
import React, { useState } from "react";
import ProductCard from "../Cards/ProductCard";
import cross from "../../image/icons/cross.png";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      style={isOpen ? { opacity: 1, transform: "translateX(0)" } : {}}
      className="bb-side-cart w-[770px] h-[calc(100%-30px)] my-[15px] ml-[15px] pt-[15px] px-[8px] text-[14px] font-normal fixed z-[102] top-[0] right-[0] left-[auto] block transition-all duration-[0.5s] ease delay-[0s] translate-x-[100%] bg-[#fff] overflow-auto opacity-[0] rounded-tl-[20px] rounded-bl-[20px] max-[991px]:w-[740px] max-[767px]:w-[350px] max-[575px]:w-[300px] bb-open-cart"
    >
      <div className="flex flex-wrap h-full">
        <div className="min-[768px]:w-[41.66%] w-full px-[12px] max-[767px]:hidden">
          {/* Related Items component */}
          <RelatedItems />
        </div>
        <div className="min-[768px]:w-[58.33%] w-full px-[12px]">
          {/* Cart component */}
          <Cart closeCart={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
};

const RelatedItems = () => {
  return (
    <div className="bb-cart-box cart-related bb-border-right flex flex-col pr-[24px] border-r-[1px] border-solid border-[#eee] overflow-auto mb-[-24px]">
      {/* Related items list */}
      <div class="bb-top-contact">
        <div class="bb-cart-title w-full mb-[20px] flex flex-wrap justify-between">
          <h4 class="font-quicksand text-[18px] font-extrabold text-[#3d4750] tracking-[0.03rem] leading-[1.2]">
            Related Items
          </h4>
        </div>
      </div>
      <ul>
        <li>
          {/* Related item component */}

          <ProductCard style={{ width: "100%" }} />
          <ProductCard style={{ width: "100%" }} />
        </li>
      </ul>
    </div>
  );
};

const Cart = ({ closeCart }) => {
  return (
    <div className="bb-inner-cart relative z-[9] flex flex-col h-full justify-between">
      <div class="bb-top-contact">
        <div class="bb-cart-title w-full mb-[20px] flex flex-wrap justify-between">
          <h4 class="font-quicksand text-[18px] font-extrabold text-[#3d4750] tracking-[0.03rem] leading-[1.2]">
            My cart
          </h4>
          <a
            onClick={closeCart}
            class="transition-all  p-[2px]  duration-[0.3s] ease-in-out bg-[#97a0a8] w-[20px] h-[20px] text-[#fff] absolute top-[-3px] right-[-3px] rounded-[50%] flex items-center justify-center opacity-[0.5] text-[15px] bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] cursor-pointer hover:backdrop-blur-none"
          >
            <a title="Close" className=" flex items-center justify-center">
              <img
                src={cross.src}
                className=" ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
              ></img>
            </a>
          </a>
        </div>
      </div>
      {/* Cart content */}
      <div className="bb-cart-box item h-full flex flex-col max-[767px]:justify-start">
        <ul>
          {/* Cart item component */}
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>
      </div>
      <div class="bb-bottom-cart">
        <div class="cart-sub-total mt-[20px] pb-[8px] flex flex-wrap justify-between border-t-[1px] border-solid border-[#eee]">
          <table class="table cart-table mt-[10px] w-full align-top">
            <tbody>
              <tr>
                <td class="title font-medium text-[#777] p-[.5rem]">
                  Sub-Total :
                </td>
                <td class="price text-[#777] text-right p-[.5rem]">$300.00</td>
              </tr>
              <tr>
                <td class="title font-medium text-[#777] p-[.5rem]">
                  VAT (20%) :
                </td>
                <td class="price text-[#777] text-right p-[.5rem]">$60.00</td>
              </tr>
              <tr>
                <td class="title font-medium text-[#777] p-[.5rem]">Total :</td>
                <td class="price text-[#777] text-right p-[.5rem]">$360.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cart-btn flex justify-between mb-[20px]">
          <a
            title="View Cart"
            className="transition-all py-[5px] px-[15px] select-none  duration-[0.3s] ease-in-out w-auto cursor-pointer h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1"
          >
            {"View Cart"}
          </a>
          <a
            title="Checkout"
            className="transition-all py-[5px] px-[15px] select-none  duration-[0.3s] ease-in-out w-auto cursor-pointer h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1"
          >
            {"Checkout"}
          </a>
        </div>
      </div>
    </div>
  );
};

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <li class="shadow1 mb-[24px] p-[20px] flex bg-[#f8f8fb] rounded-[20px] border-[1px] border-solid border-[#eee] relative max-[575px]:p-[10px]">
      <a class="transition-all  p-[2px]  duration-[0.3s] ease-in-out bg-[#97a0a8] w-[20px] h-[20px] text-[#fff] absolute top-[-3px] right-[-3px] rounded-[50%] flex items-center justify-center opacity-[0.5] text-[15px] bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] cursor-pointer hover:backdrop-blur-none">
        <a title="Close" className=" flex items-center justify-center">
          <img
            src={cross.src}
            className=" ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
          ></img>
        </a>

        <i class="ri-close-line"></i>
      </a>
      <a
        href="javascript:void(0)"
        class="bb-cart-pro-img flex grow-[1] shrink-[0] basis-[25%] items-center max-[575px]:flex-[initial]"
      >
        <img
          src="https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg"
          alt="product-img-1"
          class="w-[85px] rounded-[10px] border-[1px] border-solid border-[#eee] max-[575px]:w-[50px]"
        />
      </a>
      <div class="bb-cart-contact pl-[15px] relative grow-[1] shrink-[0] basis-[70%] overflow-hidden">
        <a
          href="product-left-sidebar.html"
          class="bb-cart-sub-title w-full mb-[8px] font-Poppins tracking-[0.03rem] text-[#3d4750] whitespace-nowrap overflow-hidden text-ellipsis block text-[14px] leading-[18px] font-medium"
        >
          Ground Nuts Oil Pack
        </a>
        <span class="cart-price mb-[8px] text-[14px] leading-[18px] block font-Poppins text-[#686e7d] font-light tracking-[0.03rem]">
          <span class="new-price px-[3px] text-[15px] leading-[18px] text-[#686e7d] font-bold">
            $15
          </span>
          x 500 g
        </span>
        <div class=" relative flex items-center justify-between  ">
          <a className=" transition-all duration-[0.3s] ease-in-out w-[70px] cursor-pointer h-[32px] font-normal text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-around items-center rounded-[10px] border-[1px] border-solid border-[#eee]  ">
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
      </div>
    </li>
  );
};

export default ShoppingCart;
