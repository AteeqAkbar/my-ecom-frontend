import React from "react";
import Link from "next/link";
import right from "../image/icons/double-arrow-right.svg";

const Breadcrumb = ({ title = "Cart" }) => {
  return (
    <section className="section-breadcrumb mb-[20px] mt-[120px] max-[1199px]:mb-[35px] border-b-[1px] border-solid border-[#eee] bg-[#f8f8fb]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="flex flex-wrap w-full bb-breadcrumb-inner m-[0] py-[20px] items-center">
              <div className="min-[768px]:w-[50%] min-[576px]:w-full w-full px-[12px]">
                <h2 className="bb-breadcrumb-title font-quicksand tracking-[0.03rem] leading-[1.2] text-[16px] font-bold text-[#3d4750] max-[767px]:text-center max-[767px]:mb-[10px]">
                  {title}
                </h2>
              </div>
              <div className="min-[768px]:w-[50%] min-[576px]:w-full w-full px-[12px]">
                <ul className="bb-breadcrumb-list mx-[-5px] flex justify-end max-[767px]:justify-center">
                  <li className="bb-breadcrumb-item text-[14px] font-normal px-[5px]">
                    <Link href="/">
                      <span className="font-Poppins text-[14px] leading-[28px] tracking-[0.03rem] font-semibold text-[#686e7d]">
                        Home
                      </span>
                    </Link>
                  </li>
                  <div className="text-[14px] font-normal flex justify-center items-center px-[5px]">
                    <img
                      src={right.src}
                      className="  transition-all duration-[0.3s] ease-in-out text-[18px] w-3 h-3 leading-[10px]"
                    ></img>
                  </div>
                  <li className="bb-breadcrumb-item font-Poppins text-[#686e7d] text-[14px] leading-[28px] font-normal tracking-[0.03rem] px-[5px] active">
                    {title}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
