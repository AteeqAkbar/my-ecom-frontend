"use client";
import React, { useState } from "react";
function Radio() {
  const [selectedRadio, setSelectedRadio] = useState("2");

  return (
    <div className="radio">
      <div className="radio__1">
        <input
          id="radio-1"
          type="radio"
          name="radio"
          value="1"
          checked={selectedRadio === "1"}
          onChange={() => setSelectedRadio("1")}
        />
        <label htmlFor="radio-1"></label>
      </div>
      <div className="radio__2">
        <input
          id="radio-2"
          type="radio"
          name="radio"
          value="2"
          checked={selectedRadio === "2"}
          onChange={() => setSelectedRadio("2")}
        />
        <label htmlFor="radio-2"></label>
      </div>
    </div>
  );
}
export default Radio;
