"use client";
import React from "react";
function ButtonSecondary({
  onClick = () => {},
  text = "Button",
  className = "",
  style = {},
  disabled = false,
}) {
  return (
    <div
      onClick={disabled ? () => {} : onClick}
      style={style}
      className={`btn btn__secondary ${className}`}
    >
      <p> {text}</p>
    </div>
  );
}
export default ButtonSecondary;
