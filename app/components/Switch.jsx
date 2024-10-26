"use client";
import React, { useState } from "react";
function Switch() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);

  return (
    <div className="switch">
      <div className="switch__1">
        <input
          id="switch-1"
          type="checkbox"
          checked={switch1}
          onChange={() => setSwitch1(!switch1)}
        />
        <label htmlFor="switch-1"></label>
      </div>
      <div className="switch__2">
        <input
          id="switch-2"
          type="checkbox"
          checked={switch2}
          onChange={() => setSwitch2(!switch2)}
        />
        <label htmlFor="switch-2"></label>
      </div>
    </div>
  );
}
export default Switch;
