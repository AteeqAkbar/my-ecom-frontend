"use client";

import React, { useState, useEffect, useRef } from "react";

export function CustomPriceSlider({ min, max, step, onPriceChange }) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const rangeRef = useRef(null);

  useEffect(() => {
    onPriceChange(minValue, maxValue);
  }, [minValue, maxValue, onPriceChange]);

  const handleMouseDown = (event) => {
    const rangeRect = rangeRef.current.getBoundingClientRect();
    if (!rangeRect) return;

    const updateValue = (clientX) => {
      const percentage = (clientX - rangeRect.left) / rangeRect.width;
      const value = Math.round((percentage * (max - min) + min) / step) * step;

      if (Math.abs(value - minValue) < Math.abs(value - maxValue)) {
        setMinValue(Math.min(Math.max(value, min), maxValue - step));
      } else {
        setMaxValue(Math.max(Math.min(value, max), minValue + step));
      }
    };

    updateValue(event.clientX);

    const handleMouseMove = (e) => updateValue(e.clientX);
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const getLeftStyles = () => {
    return { left: `${((minValue - min) / (max - min)) * 100}%` };
  };

  const getRightStyles = () => {
    return { left: `${((maxValue - min) / (max - min)) * 100}%` };
  };

  const getRangeStyles = () => {
    return {
      left: `${((minValue - min) / (max - min)) * 100}%`,
      width: `${((maxValue - minValue) / (max - min)) * 100}%`,
    };
  };

  return (
    <div className="space-y-4">
      {/* <label
        htmlFor="price-range"
        className="block text-sm font-medium text-gray-700"
      >
        Price Range
      </label> */}
      <div
        ref={rangeRef}
        className="relative h-2 bg-gray-200 bg-gradient-to-r from-blue-300 via-purple-500 to-pink-500 rounded-full cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        <div
          className="absolute h-full bg-gradient-to-r from-blue-300 via-purple-500 to-pink-500 rounded-full"
          style={getRangeStyles()}
        ></div>
        <div
          className="absolute w-5 h-5 -mt-2 -ml-[5px] bg-white border-2 border-blue-500 rounded-full cursor-pointer"
          style={getLeftStyles()}
        ></div>
        <div
          className="absolute w-5 h-5 -mt-[5px] -ml-2 bg-white border-2 border-purple-500 rounded-full cursor-pointer"
          style={getRightStyles()}
        ></div>
      </div>
      <div className="flex justify-between">
        <input
          type="number"
          id="min-price"
          value={minValue}
          onChange={(e) =>
            setMinValue(
              Math.min(Math.max(Number(e.target.value), min), maxValue - step)
            )
          }
          className="w-full me-1 text-center bg-[#fff] text-[#3d4750] text-[16px] font-semibold   font-initial border-[1px] border-solid border-[#eee] p-[10px]  outline-[0] rounded-[10px] "
          min={min}
          max={maxValue - step}
          step={step}
        />
        <div className="flex items-center text-[#3d4750] text-[16px] font-bold">
          -
        </div>
        <input
          type="number"
          id="max-price"
          value={maxValue}
          onChange={(e) =>
            setMaxValue(
              Math.max(Math.min(Number(e.target.value), max), minValue + step)
            )
          }
          className="w-full ms-1 text-center bg-[#fff] text-[#3d4750] text-[16px] font-semibold   font-initial border-[1px] border-solid border-[#eee] p-[10px]  outline-[0] rounded-[10px] "
          min={minValue + step}
          max={max}
          step={step}
        />
      </div>
    </div>
  );
}

// className="relative h-2 bg-gradient-to-r from-blue-300 via-purple-500 to-pink-500 rounded-full cursor-pointer"
