"use client";
import React, { useState, useEffect } from "react";
import up from "../image/icons/up.png";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const updateProgress = () => {
      const scrolled = window.pageYOffset;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = (scrolled / scrollableHeight) * 100;
      setProgress(newProgress);
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#Top"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      className={`back-to-top result-placeholder transition-all duration-[0.3s] ease-in-out w-[38px] h-[38px] fixed right-[15px] bottom-[15px] z-[10] rounded-[20px] cursor-pointer bg-[#fff] text-[#6c7fd8] border-[1px] border-solid border-[#6c7fd8] text-center text-[22px] leading-[1.6] ${
        isVisible ? "inline" : "hidden"
      }`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={up.src}
          className=" w-9 h-9 text-center ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
        ></img>
      </div>

      <div className="back-to-top-wrap active-progress">
        <svg
          viewBox="-1 -1 102 102"
          className="w-[36px] h-[36px] fixed right-[16px] bottom-[16px]"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            className="fill-transparent stroke-[5px] stroke-[#6c7fd8]"
            style={{
              transition: "stroke-dashoffset 10ms linear",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: 307.919 - (progress / 100) * 307.919,
            }}
          ></path>
        </svg>
      </div>
    </a>
  );
};

export default BackToTop;
