"use client";
import React, { useState, useEffect } from "react";
import up from "../image/icons/arrow-up3.png";
// import up from "../image/icons/up.svg";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame;

    const smoothProgressUpdate = () => {
      const scrolled = window.pageYOffset;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const targetProgress = (scrolled / scrollableHeight) * 100;

      setProgress((prevProgress) => {
        if (Math.abs(prevProgress - targetProgress) < 0.5) {
          return targetProgress; // Snap to target if close enough
        }
        return prevProgress + (targetProgress - prevProgress) * 0.1; // Smooth increment
      });

      animationFrame = requestAnimationFrame(smoothProgressUpdate);
    };

    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    const handleScroll = () => {
      toggleVisibility();
      cancelAnimationFrame(animationFrame); // Cancel any previous animation
      smoothProgressUpdate(); // Restart smooth progress animation
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`transition-opacity duration-300 ease-in-out w-[38px] h-[38px] fixed right-[15px] bottom-[15px] z-[10] rounded-full bg-white text-[#6c7fd8] border border-solid border-[#6c7fd8] flex items-center justify-center ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img src={up.src} alt="Scroll up" className="w-full h-full" />
      <div className="absolute w-full h-full">
        <svg viewBox="0 0 100 100" className="w-[36px] h-[36px]">
          {/* <circle
            cx="50"
            cy="50"
            r="49"
            className="fill-transparent stroke-[#6c7fd8]"
            style={{
              transition: "stroke-dashoffset 0.1s linear",
              strokeDasharray: "307.919",
              strokeDashoffset: 307.919 - (progress / 100) * 307.919,
              strokeWidth: 6, // Decreased stroke width
            }}
          ></circle> */}
        </svg>
      </div>
    </button>
  );
};

export default BackToTop;
