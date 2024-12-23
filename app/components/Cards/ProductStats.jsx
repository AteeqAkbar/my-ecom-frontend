"use client";
import React, { useState, useEffect } from "react";
import eye from "../../image/icons/eye.png";
import soldout from "../../image/icons/sold-out.png";
import Image from "next/image";

const ProductStats = () => {
  const [viewers, setViewers] = useState(89);
  const [sold, setSold] = useState(Math.floor(Math.random() * 200) + 100);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random numbers for demonstration
      setViewers(Math.floor(Math.random() * 100) + 50); // Random viewers between 50 and 150
      //   setSold(Math.floor(Math.random() * 200) + 100); // Random sold between 100 and 300
    }, 2500); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem]">
      <h2 className="flex items-center">
        <Image
          alt="eye"
          src={eye}
          className=" ri-shopping-bag-4-line me-3 blingicon transition-all w-[20px] h-[20px] hover:scale-125 duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
        ></Image>
        {""}
        <span className="font-medium animate-pulse me-2">
          {viewers} People{" "}
        </span>{" "}
        are viewing this right now.
      </h2>
      <h3 className="flex items-center">
        <Image
          alt="soldout"
          src={soldout}
          className=" ri-shopping-bag-4-line me-3 blingicon transition-all w-[20px] h-[20px] hover:scale-125 duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
        ></Image>
        {""}
        <span className="font-medium animate-pulse me-2 "> {sold} sold</span> in
        the last 24 hours.
      </h3>
    </div>
  );
};

export default ProductStats;
