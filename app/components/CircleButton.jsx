"use client";
import React, { useState } from "react";
function CircleButton() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="circle" onClick={() => setIsPlaying(!isPlaying)}>
      <span className="circle__btn">
        {/* <IonIcon
            className={isPlaying ? "play visibility" : "pause visibility"}
            name="pause"
          /> */}
        {/* <IonIcon
            className={isPlaying ? "pause visibility" : "play visibility"}
            name="play"
          /> */}
      </span>
      <span className="circle__back-1"></span>
      <span className="circle__back-2"></span>
    </div>
  );
}
export default CircleButton;
