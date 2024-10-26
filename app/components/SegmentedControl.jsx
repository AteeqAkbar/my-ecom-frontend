"use client";
import React, { useState } from "react";

export default function SegmentedControl() {
  const [selectedTab, setSelectedTab] = useState("tab-1");

  return (
    <div className="segmented-control">
      <input
        type="radio"
        name="radio2"
        value="3"
        id="tab-1"
        checked={selectedTab === "tab-1"}
        onChange={() => setSelectedTab("tab-1")}
      />
      <label htmlFor="tab-1" className="segmented-control__1">
        <p>Tab 1</p>
      </label>
      <input
        type="radio"
        name="radio2"
        value="4"
        id="tab-2"
        checked={selectedTab === "tab-2"}
        onChange={() => setSelectedTab("tab-2")}
      />
      <label htmlFor="tab-2" className="segmented-control__2">
        <p>Tab 2</p>
      </label>
      <input
        type="radio"
        name="radio2"
        value="5"
        id="tab-3"
        checked={selectedTab === "tab-3"}
        onChange={() => setSelectedTab("tab-3")}
      />
      <label htmlFor="tab-3" className="segmented-control__3">
        <p>Tab 3</p>
      </label>
      <div className="segmented-control__color"></div>
    </div>
  );
}
