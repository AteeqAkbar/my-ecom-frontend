"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import cross from "../image/icons/cross.png";

const CustomModal = ({ children, state, close }) => {
  const [domReady, setDomReady] = useState(false);
  const portalContainer = useRef(null);

  useEffect(() => {
    if (state) {
      document.body.classList.add("overflow-hidden");
      portalContainer.current = document.createElement("div");
      document.body.appendChild(portalContainer.current);
      setDomReady(true);
    } else {
      document.body.classList.remove("overflow-hidden");
      setDomReady(false);
    }

    return () => {
      if (
        portalContainer.current &&
        document.body.contains(portalContainer.current)
      ) {
        document.body.removeChild(portalContainer.current);
      }
    };
  }, [state]);

  const handleClose = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    if (portalContainer.current) {
      document?.body?.removeChild(portalContainer?.current);
    }
    close();
  };

  const handleClickOutside = (event) => {
    if (
      portalContainer.current &&
      event &&
      event.stopPropagation &&
      !portalContainer.current.contains(event.target)
    ) {
      handleClose(event);
    }
  };

  useEffect(() => {
    if (state) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [state]);

  if (!domReady) {
    // DOM is not ready yet
    return null;
  }

  return createPortal(
    <div
      className={`fixed inset-0 flex items-center z-[9999] justify-center cursor-pointer`}
      // onClick={(e) => handleClose(e)}
    >
      <div
        className={`fixed inset-0 bg-black   opacity-60 ${
          state ? "visible" : "invisible"
        } `}
      />
      <div
        className={`containerdd mx-autodd  modal-view-hide  flex justify-center items-center ${
          state ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } `}
      >
        <div className="content text-center relative">
          {children}

          <div
            onClick={(e) => handleClose(e)}
            className="h-7 w-7 p-[2px]  absolute top-1 right-1 transition-all duration-[0.3s] ease-in-out cursor-pointer flex items-center justify-center text-[#fff] bg-white bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] rounded-[10px] hover:backdrop-blur-none"
          >
            <a title="Close" className=" flex items-center justify-center">
              <Image
                src={cross}
                alt="cross"
                className=" ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </div>,
    portalContainer.current
  );
};

export default CustomModal;
