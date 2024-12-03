"use client";

import React from "react";

export function CustomCheckbox({ id, label, checked, onChange }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <span className=" inline-block mr-2 flex-shrink-0 h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] overflow-hidden">
          <span
            className={`w-full h-full flex justify-center items-center rounded-sm ${
              checked ? "bg-grad" : ""
            }`}
          >
            {checked && (
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </span>
        <span className="ml-[10px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
          {label}
        </span>
      </label>
    </div>
  );
}
