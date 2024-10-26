"use client";
import React, { useEffect, useRef, useState } from "react";
// import Tagline from "./Tagline";

import Cross from "./SVG/Cross";
import useScroll from "../hook/useScroll";
const Header = () => {
  useScroll();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const mobileRef = useRef(null);

  const handleClickOutside = (event) => {
    if (mobileRef.current && !mobileRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="z-[101] fixed inset-x-0 top-0 mx-auto w-full max-w-screen-md py-3 md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      {/* Large Screen Header */}

      <div
        id="topnav"
        className="hidden lg:flex items-center justify-between rounded-2xl bg-transparent p-3 "
      >
        {/* Logo */}
        <a
          href="index.html"
          className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              fill="currentColor"
              d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
            ></path>
          </svg>
          <span>
            Bento<span className="text-primary">Folio</span>
          </span>
        </a>

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
        <ul class="flex items-center justify-center font-semibold">
          <li class="relative group px-3 py-2">
            <button class="hover:opacity-50 cursor-default">Products</button>
            <div class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                <div class="relative z-10">
                  <div class="grid grid-cols-2 gap-6">
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        The Suite
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Course Editor
                            <p class="text-gray-500 font-normal">
                              All-in-one editor
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Accept payments
                            <p class="text-gray-500 font-normal">
                              Pre-build payments page
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Closed Captioning
                            <p class="text-gray-500 font-normal">
                              Use AI to generate captions
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Extensions
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Plugins
                            <p class="text-gray-500 font-normal">
                              Tweak existing functionality
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Batch uploads
                            <p class="text-gray-500 font-normal">
                              Get your time back
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Social sharing
                            <p class="text-gray-500 font-normal">
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
          <li class="relative group px-3 py-2">
            <button class="hover:opacity-50 cursor-default">Solutions</button>
            <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                <div class="relative z-10">
                  <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                    Use cases
                  </p>
                  <ul class="mt-3 text-[15px]">
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Creators
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Streamers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Influence
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Programming
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="relative group px-3 py-2">
            <button class="hover:opacity-50 cursor-default">Developers</button>
            <div class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>

                <div class="relative z-10">
                  <a
                    href="#"
                    class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Documentation
                    <p class="text-gray-500 font-normal">
                      Start integrating in no time
                    </p>
                  </a>
                  <div class="mt-6 grid grid-cols-2 gap-6">
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Get started
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Libraries and SDKs
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Plugins
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Code samples
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Tutorials
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Guides
                      </p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Accept online payments
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Editing video like a pro
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Automation techniques
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
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
          <li class="relative group px-3 py-2">
            <button class="hover:opacity-50 cursor-default">Resources</button>
            <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
              <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                <div class="relative z-10">
                  <ul class="text-[15px]">
                    <li>
                      <a
                        href="#"
                        class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Get Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        News &amp; Events
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="relative group px-3 py-2">
            <a href="#" class="hover:opacity-50 cursor-default">
              Pricing
            </a>
          </li>
        </ul>

        {/* Call to Action */}
        <a
          href="contact.html"
          className="bg-dark text-white px-6 py-4 rounded-lg font-semibold leading-tight"
        >
          Let&apos;s Talk
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="flex lg:hidden items-center justify-between rounded-2xl p-3 bg-white shadow1">
        {/* Logo */}
        <a
          href="index.html"
          className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              fill="currentColor"
              d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
            ></path>
          </svg>
          <span>
            Bento<span className="text-primary">Folio</span>
          </span>
        </a>

        {/* Menu Toggle */}
        <button onClick={toggleMobileMenu} className="text-dark">
          {isMobileMenuOpen ? (
            <Cross />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path
                fill="currentColor"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileRef}
          id="mobile-menu"
          //w-full sm:w-64
          className="fixed bottom-0 start-0 top-0 z-[60] h-full w-64 transform overflow-y-auto bg-white transition-all duration-300 translate-x-0 shadow1"
        >
          <div className="flex h-full flex-col justify-between gap-5 p-5">
            <div>
              {/* Logo */}
              <a
                href="index.html"
                className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    fill="currentColor"
                    d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
                  ></path>
                </svg>
                <span>
                  Bento<span className="text-primary">Folio</span>
                </span>
              </a>
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
            className="absolute right-4 top-4 rounded-2xl p-1 shadow2 cursor-pointer"
          >
            <Cross />
          </div>
        </div>
      )}
    </header>
  );
};

// const Header = () => {
//   useScroll();
//   return (
//     <>
//       <header
//         id="topnav"
//         className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md shadow1 py-3 md:top-6 md:rounded-3xl lg:max-w-screen-lg"
//       >
//         <div className="px-4">
//           <div className="flex items-center justify-between">
//             <div className="flex shrink-0">
//               <a aria-current="page" className="flex items-center" href="/">
//                 <img
//                   className="h-7 w-auto"
//                   src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
//                   alt=""
//                 />
//                 <p className="sr-only">Website Title</p>
//               </a>
//             </div>
//             <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
//               <a
//                 aria-current="page"
//                 className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
//                 href="#"
//               >
//                 How it works
//               </a>
//               <a
//                 className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
//                 href="#"
//               >
//                 Pricing
//               </a>
//             </div>
//             <div className="flex items-center justify-end gap-3">
//               <a
//                 className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
//                 href="/login"
//               >
//                 Sign in
//               </a>
//               <a
//                 className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//                 href="/login"
//               >
//                 Login
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

export default Header;
