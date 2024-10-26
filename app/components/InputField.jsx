"use client";
import React from "react";

const InputField = ({
  type = "text",
  className = "",
  placeholder = "Type anything...",
  value,
  onChange,
  style,
  ...props
}) => {
  return (
    <input
      type={type}
      className={`form__input ${className}`}
      placeholder={placeholder}
      value={value}
      style={style}
      onChange={onChange}
      {...props}
    />
  );
};

export default InputField;
