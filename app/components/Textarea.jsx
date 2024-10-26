"use client";
import React from "react";

function Textarea({ onChange, placeholder = "Type anything..." }) {
  return (
    <textarea
      onChange={(e) => onChange(e)}
      className="form__textarea"
      placeholder={placeholder}
      rows="10"
    ></textarea>
  );
}

export default Textarea;
