import React from "react";
import Tag from "./Tag";
import cart from "../../image/icons/cart.png";
import eye from "../../image/icons/eye.png";
import whatsapp from "../../image/icons/whatsapp.png";
import star from "../../image/icons/star.png";

function ProductCard() {
  return (
    <div
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
              src="https://pyariwalls.pk/cdn/shop/files/WhatsApp_Image_2024-10-23_at_19.35.26_2.jpg"
              alt="product-6"
            />
            <img
              className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0]  transform group-hover:opacity-100 group-hover:scale-105 w-full"
              src="https://pyariwalls.pk/cdn/shop/files/WhatsApp_Image_2024-10-23_at_19.35.26.jpg"
              alt="product-6"
            />
          </div>

          <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-end justify-center">
            <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] my-4 cursor-pointer flex items-center justify-center text-[#fff] bg-white bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] rounded-[10px] hover:backdrop-blur-none">
              <a
                title="View Product"
                className="w-[35px] h-[35px] flex items-center justify-center"
              >
                <img
                  src={eye.src}
                  className=" ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
                ></img>
              </a>
            </li>
            <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] my-4 cursor-pointer flex items-center justify-center text-[#fff] bg-white bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] rounded-[10px] hover:backdrop-blur-none ">
              <a
                title="Order By Whatsapp"
                className="w-[35px] h-[35px] flex items-center justify-center"
              >
                <img
                  src={whatsapp.src}
                  className=" ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
                ></img>
              </a>
            </li>
            <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] my-4 cursor-pointer flex items-center justify-center text-[#fff] bg-white bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] rounded-[10px] hover:backdrop-blur-none">
              <a
                title="Add To Cart"
                className="w-[35px] h-[35px] flex items-center justify-center"
              >
                <img
                  src={cart.src}
                  className=" ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
                ></img>
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
              Spices
            </a>
            <span className="bb-pro-rating">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={star.src}
                  className="ri-star-fill float-left text-[15px] mr-[2px] h-6 w-6 leading-[18px] text-[#fea99a]"
                ></img>
              ))}
            </span>
          </div>
          <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
            <a
              title="Small Cardamom Spice Pack"
              href="product-left-sidebar.html"
              className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]"
            >
              Small Cardamom Spice Pack
            </a>
          </h4>
          <div className="bb-price flex flex-wrap justify-between ">
            {/* <Tag tagClass="shadow2"> */}
            <div className="inner-price mx-[-3px]">
              <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">
                $4100
              </span>
              <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
                $4522
              </span>
            </div>
            {/* </Tag> */}
            {/* <Tag tagClass="shadow2"> */}
            <span className="last-items text-[14px] text-[#686e7d]">200g</span>
            {/* </Tag> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
