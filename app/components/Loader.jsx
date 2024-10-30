import React from "react";

export default function Loader({ size = "70px" }) {
  return (
    /* From Uiverse.io by andrew-demchenk0 */
    <div style={{ width: size, height: size }} className="pyramid-loader">
      <div style={{ width: size, height: size }} className="wrapper">
        <span
          style={{ width: size, height: size }}
          className="side side1"
        ></span>
        <span
          style={{ width: size, height: size }}
          className="side side2"
        ></span>
        <span
          style={{ width: size, height: size }}
          className="side side3"
        ></span>
        <span
          style={{ width: size, height: size }}
          className="side side4"
        ></span>
        <span style={{ width: size, height: size }} className="shadoww"></span>
      </div>
    </div>
  );
}
