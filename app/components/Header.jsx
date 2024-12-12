"use client";
import React, { useEffect, useRef, useState } from "react";
// import Tagline from "./Tagline";

import Cross from "./SVG/Cross";
import cart from "../image/icons/cart.png";
import cross from "../image/icons/cross.png";
import menu from "../image/icons/menu1.png";
import useScroll from "../hook/useScroll";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../store/cartVisibilitySlice";
import Loader from "./Loader";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  useScroll();
  const isCartOpen = useSelector((state) => state.cartVisibility.isCartOpen);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const mobileRef = useRef(null);

  const handleClickOutside = (event) => {
    if (mobileRef.current && !mobileRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <header className="z-[101] fixed inset-x-0 top-0 mx-auto w-full max-w-screen-md py-3 md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      {/* Large Screen Header */}

      <div
        id="topnav"
        className="hidden lg:flex   items-center justify-between rounded-2xl bg-transparent p-3 "
      >
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark"
        >
          <Loader size="20px" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              fill="currentColor"
              d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
            ></path>
          </svg> */}
          <span>
            Dico
            {/* <span className="text-primary">Folio</span> */}
          </span>
        </Link>

        {/* Navigation */}
        {/* <nav className="flex gap-5">
          <a href="index.html" className="text-base font-medium text-dark">
            Home
          </a>
          <a href="about.html" className="text-base font-medium text-muted">
            About
          </a>
          <a href="services.html" className="text-base font-medium text-muted">
            Services
          </a>
          <a href="portfolio.html" className="text-base font-medium text-muted">
            Works
          </a>
          <a href="blog.html" className="text-base font-medium text-muted">
            Blog
          </a>
          <a href="contact.html" className="text-base font-medium text-muted">
            Contact
          </a>
        </nav> */}
        <ul className="flex items-center justify-center font-semibold">
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default">
              Products
            </button>
            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        The Suite
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Course Editor
                            <p className="text-gray-500 font-normal">
                              All-in-one editor
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Accept payments
                            <p className="text-gray-500 font-normal">
                              Pre-build payments page
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Closed Captioning
                            <p className="text-gray-500 font-normal">
                              Use AI to generate captions
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Extensions
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Plugins
                            <p className="text-gray-500 font-normal">
                              Tweak existing functionality
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Batch uploads
                            <p className="text-gray-500 font-normal">
                              Get your time back
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Social sharing
                            <p className="text-gray-500 font-normal">
                              Generate content for socials
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default">
              Solutions
            </button>
            <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                    Use cases
                  </p>
                  <ul className="mt-3 text-[15px]">
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Creators
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Streamers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Influence
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Programming
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default">
              Developers
            </button>
            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>

                <div className="relative z-10">
                  <a
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Documentation
                    <p className="text-gray-500 font-normal">
                      Start integrating in no time
                    </p>
                  </a>
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Get started
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Libraries and SDKs
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Plugins
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Code samples
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Tutorials
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Guides
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Accept online payments
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Editing video like a pro
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Automation techniques
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Create stunning effects
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default">
              Resources
            </button>
            <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <ul className="text-[15px]">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Get Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        News &amp; Events
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2">
            <a href="#" className="hover:opacity-50 cursor-default">
              Pricing
            </a>
          </li>
        </ul>

        {/* Cart */}
        <a
          onClick={() => dispatch(openCart())}
          title="View Cart"
          className="w-[35px] h-[35px] cursor-pointer flex items-center justify-center relative"
        >
          {cartItems.length > 0 && (
            <div className="absolute -top-1 -right-2 w-5 h-5 flex items-center justify-center rounded-full  bg-red-600 text-[10px] text-[#fff]">
              {totalItems}
            </div>
          )}
          <Image
            alt="cart"
            src={cart}
            className=" ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
          ></Image>
        </a>
        {/* <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] my-4 cursor-pointer flex items-center justify-center text-[#fff] bg-white bg-opacity-30  backdrop-blur-lg border-[1px] border-solid border-[#eee] rounded-[10px] hover:backdrop-blur-none"></li> */}
      </div>

      {/* Mobile Menu Toggle Button */}
      <div
        className="flex lg:hidden items-center justify-between rounded-2xl p-3 bg-transparent mx-8"
        id="mobnav"
      >
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark"
        >
          <Loader size="20px" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              fill="currentColor"
              d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
            ></path>
          </svg> */}
          <span>
            Dico
            {/* <span className="text-primary">Folio</span> */}
          </span>
        </Link>
        <div className="flex items-center gap-3">
          {/* Cart */}
          <a
            onClick={() => dispatch(openCart())}
            title="View Cart"
            className="w-[30px] h-[30px] cursor-pointer flex items-center justify-center relative"
          >
            {cartItems.length > 0 && (
              <div className="absolute -top-1 -right-2 w-5 h-5 flex items-center justify-center rounded-full  bg-red-600 text-[10px] text-[#fff]">
                {totalItems}
              </div>
            )}
            <Image
              alt="cart"
              src={cart}
              className=" ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
            ></Image>
          </a>
          {/* Menu Toggle */}
          <button
            // onClick={toggleMobileMenu}
            className="text-dark"
          >
            {/* <Cross /> */}
            {isMobileMenuOpen ? (
              <Image
                alt="cross"
                onClick={() => setMobileMenuOpen(false)}
                src={cross}
                className=" h-7 w-7 transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
              ></Image>
            ) : (
              <Image
                onClick={() => setMobileMenuOpen(true)}
                src={menu}
                alt="menu"
                className=" h-8 w-8 transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
              ></Image>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileRef}
          id="mobile-menu"
          //w-full sm:w-64
          className="fixed bottom-0 start-0 top-0 z-[60] h-full w-64 transform overflow-y-auto bg-white transition-all duration-300 translate-x-0 bg-opacity-30 backdrop-blur-lg"
        >
          <div className="flex h-full flex-col justify-between gap-5 p-5">
            <div>
              {/* Logo */}
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark"
              >
                {" "}
                <Loader size="20px" />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    fill="currentColor"
                    d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
                  ></path>
                </svg> */}
                <span>
                  Dico
                  {/* <span className="text-primary">Folio</span> */}
                </span>
              </Link>
            </div>

            <ul className="mt-4 flex flex-1 flex-col gap-2">
              <li>
                <a
                  href="index.html"
                  className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-dark transition hover:bg-light"
                >
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="about.html"
                  className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-muted transition hover:bg-light"
                >
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="services.html"
                  className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-muted transition hover:bg-light"
                >
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  href="portfolio.html"
                  className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-muted transition hover:bg-light"
                >
                  <span>Works</span>
                </a>
              </li>
              <li>
                <a
                  href="blog.html"
                  className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-muted transition hover:bg-light"
                >
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-muted transition hover:bg-light"
                >
                  <span>Contact</span>
                </a>
              </li>
            </ul>

            <div className="flex items-center justify-center">
              <a
                href="contact.html"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-dark px-6 py-4 font-semibold leading-tight text-white"
              >
                Let's Talk
              </a>
            </div>
          </div>
          <div
            onClick={toggleMobileMenu}
            className="absolute right-4 top-4 rounded-2xl p-1 cursor-pointer"
          >
            {/* <Cross /> */}
            <Image
              // onClick={() => setMobileMenuOpen(false)}
              src={cross}
              alt="cross"
              className=" h-6 w-6 transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"
            ></Image>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
