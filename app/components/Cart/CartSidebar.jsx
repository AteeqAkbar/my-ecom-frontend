"use client";
import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";
import cross from "../../image/icons/cross.png";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { closeCart } from "../../store/cartVisibilitySlice";
import { addToCart } from "@/app/store/cartSlice";
import Link from "next/link";
import Image from "next/image";
import { generateImageUrl } from "@/app/utils/helperFun";
import ProductSlider from "../Swiper/ProductSlider";
import { useRouter } from "next/navigation";

const ShoppingCart = () => {
  const isCartOpen = useSelector((state) => state.cartVisibility.isCartOpen);

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      style={isCartOpen ? { opacity: 1, transform: "translateX(0)" } : {}}
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
      <div className="bb-top-contact">
        <div className="bb-cart-title w-full mb-[20px] flex flex-wrap justify-between">
          <h4 className="font-quicksand text-[18px] font-extrabold text-[#3d4750] tracking-[0.03rem] leading-[1.2]">
            Related Items
          </h4>
        </div>
      </div>
      <ul>
        <li>
          {/* Related item component */}
          <ProductSlider showOne={true} />

          {/* <ProductCard style={{ width: "100%" }} /> */}
        </li>
      </ul>
    </div>
  );
};

const Cart = () => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [totals, setTotals] = useState(0);
  useEffect(() => {
    setTotals(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  const handleCloseCart = () => {
    dispatch(closeCart());
  };
  return (
    <div className="bb-inner-cart relative z-[9] flex flex-col h-full justify-between">
      <div className="bb-top-contact">
        <div className="bb-cart-title w-full mb-[20px] flex flex-wrap justify-between">
          <h4 className="font-quicksand text-[18px] font-extrabold text-[#3d4750] tracking-[0.03rem] leading-[1.2]">
            My cart
          </h4>
          <a
            title="Close"
            onClick={handleCloseCart}
            className="transition-all  p-[2px]  duration-[0.3s] ease-in-out bg-[#97a0a8] w-[20px] h-[20px] text-[#fff] absolute top-[-3px] right-[-3px] rounded-[50%] flex items-center justify-center opacity-[0.5] text-[15px] bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] cursor-pointer hover:backdrop-blur-none"
          >
            <Image
              src={cross}
              alt="Close Cart"
              className=" ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
            ></Image>
          </a>
        </div>
      </div>
      {/* Cart content */}

      <div className="bb-cart-box item h-full flex flex-col max-[767px]:justify-start">
        {cartItems?.length > 0 ? (
          <ul>
            {/* Cart item component */}

            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
          </ul>
        ) : (
          <div className="title font-medium text-[#777] p-[.5rem]">
            Your Cart is empty!
          </div>
        )}
      </div>

      <div className="bb-bottom-cart">
        <div className="cart-sub-total mt-[20px] pb-[8px] flex flex-wrap justify-between border-t-[1px] border-solid border-[#eee]">
          <table className="table cart-table mt-[10px] w-full align-top">
            <tbody>
              <tr>
                <td className="title font-medium text-[#777] p-[.5rem]">
                  Sub-Total :
                </td>
                <td className="price text-[#777] text-right p-[.5rem]">
                  RS : {totals || "0.00"}
                </td>
              </tr>
              {/* <tr>
                <td className="title font-medium text-[#777] p-[.5rem]">
                  VAT (20%) :
                </td>
                <td className="price text-[#777] text-right p-[.5rem]">
                  $60.00
                </td>
              </tr> */}
              <tr>
                <td className="title font-medium text-[#777] p-[.5rem]">
                  Total :
                </td>
                <td className="price text-[#777] text-right p-[.5rem]">
                  RS : {totals || "0.00"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {cartItems?.length > 0 && (
          <div className="cart-btn flex justify-between mb-[20px]">
            <button
              onClick={() => {
                handleCloseCart();
                router.push("/cart");
              }}
              title="View Cart"
              className="transition-all py-[5px] px-[15px] select-none duration-[0.3s] ease-in-out w-auto cursor-pointer h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1"
            >
              {"View Cart"}
            </button>
            <button
              onClick={() => {
                handleCloseCart();
                router.push("/checkout");
              }}
              title="Checkout"
              className="transition-all py-[5px] px-[15px] select-none animate-bounce duration-[0.3s] ease-in-out w-auto cursor-pointer h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1"
            >
              {"Checkout"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li
      key={item?.id + Math.random()}
      className="shadow1 mb-[24px] p-[20px] flex bg-[#f8f8fb] rounded-[20px] border-[1px] border-solid border-[#eee] relative max-[575px]:p-[10px]"
    >
      <a
        onClick={() => dispatch(removeFromCart(item.id))}
        title="Close"
        className="transition-all  p-[2px]  duration-[0.3s] ease-in-out bg-[#97a0a8] w-[20px] h-[20px] text-[#fff] absolute top-[-3px] right-[-3px] rounded-[50%] flex items-center justify-center opacity-[0.5] text-[15px] bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] cursor-pointer hover:backdrop-blur-none"
      >
        <Image
          src={cross}
          alt="cross"
          className=" ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
        ></Image>
      </a>
      <a className="bb-cart-pro-img flex grow-[1] shrink-[0] basis-[25%] items-center max-[575px]:flex-[initial]">
        <img
          src={
            generateImageUrl(item?.images?.[0]?.url) ||
            "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg"
          }
          alt="product-img-1"
          className="w-[85px] rounded-[10px] border-[1px] border-solid border-[#eee] max-[575px]:w-[50px]"
        />
      </a>
      <div className="bb-cart-contact pl-[15px] relative grow-[1] shrink-[0] basis-[70%] overflow-hidden">
        <a
          href="product-left-sidebar.html"
          className="bb-cart-sub-title w-full mb-[8px] font-Poppins tracking-[0.03rem] text-[#3d4750] whitespace-nowrap overflow-hidden text-ellipsis block text-[14px] leading-[18px] font-medium"
        >
          {item?.name || "Ground Nuts Oil Pack"}
        </a>
        <span className="cart-price mb-[8px] text-[14px] leading-[18px] block font-Poppins text-[#686e7d] font-light tracking-[0.03rem]">
          <span className="new-price px-[3px] text-[15px] leading-[18px] text-[#686e7d] font-bold">
            RS: {item?.price || "$15"}
          </span>
        </span>
        <div className=" relative flex items-center justify-between  ">
          <a className=" transition-all duration-[0.3s] ease-in-out w-[70px] cursor-pointer h-[32px] font-normal text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-around items-center rounded-[10px] border-[1px] border-solid border-[#eee]  ">
            <span
              onClick={() => dispatch(removeFromCart(item.id))}
              className=" w-full select-none overflow-hidden rounded-s-[10px]  transition-all duration-[0.3s] ease-in-out hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white"
            >
              -
            </span>
            <span className="w-full">{item?.quantity}</span>
            <span
              onClick={() => dispatch(addToCart(item))}
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
