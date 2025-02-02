import React from "react";
import Loader from "./Loader";
import payment from "../image/payment.png";
import email from "../image/icons/email.png";
import location from "../image/icons/location.png";
import whatsapp from "../image/icons/whatsapp.png";
import facebook from "../image/icons/facebook2.png";
import insta from "../image/icons/instagram.png";
import tiktok from "../image/icons/tiktok.png";
import Image from "next/image";
import { fetchCategories } from "../services/api";
import Link from "next/link";

const Footer = async () => {
  const data = await fetchCategories();
  return (
    <footer className="bb-footer mt-[50px] max-[1199px]:mt-[35px] bg-[#f8f8fb] text-[#fff]">
      <div className="footer-container border-t-[1px] border-solid border-[#eee]">
        <div className="footer-top py-[50px] max-[1199px]:py-[35px]">
          <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div
              className="flex flex-wrap w-full max-[991px]:mb-[-30px] aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="min-[992px]:w-[30%] max-[991px]:w-full w-full px-[12px] bb-footer-toggle bb-footer-cat">
                <div className="bb-footer-widget bb-footer-company flex flex-col max-[991px]:mb-[24px]">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-[#3d4750] hover:text-[#6c7fd8]"
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
                  <br></br>

                  <br></br>
                  <p className="bb-footer-detail max-w-[400px] mb-[30px] p-[0] font-Poppins text-[14px] leading-[27px] font-normal text-[#686e7d] inline-block relative max-[1399px]:text-[15px] max-[1199px]:text-[14px]">
                    Dico is the biggest market of Wood products. Get your daily
                    needs from our store.
                  </p>
                  <div className="bb-footer-social">
                    <div className="bb-footer-widget">
                      <div className="bb-footer-links bb-footer-dropdown max-[991px]:mb-[35px]">
                        <ul className="align-items-center flex flex-wrap items-center">
                          <li className="bb-footer-link leading-[1.5] flex items-center pr-[5px]">
                            <a className="transition-all bg-white hover:scale-125 cursor-pointer bg-opacity-30 shadow3 backdrop-blur-lg border-[1px] border-solid border-[#eee]  hover:backdrop-blur-none duration-[0.3s] ease-in-out w-[30px] h-[30px] rounded-[5px] capitalize flex items-center justify-center text-[15px] leading-[20px] text-[#686e7d] relative break-all font-normal">
                              <Image
                                src={tiktok}
                                alt="tikok"
                                className=" max-[50px]:w-full"
                              />
                            </a>
                          </li>
                          <li className="bb-footer-link leading-[1.5] flex items-center pr-[5px]">
                            <a className="transition-all bg-white bg-opacity-30 hover:scale-125 cursor-pointer shadow3 backdrop-blur-lg border-[1px] border-solid border-[#eee]  hover:backdrop-blur-none duration-[0.3s] ease-in-out w-[30px] h-[30px] rounded-[5px] capitalize flex items-center justify-center text-[15px] leading-[20px] text-[#686e7d] relative break-all font-normal">
                              <Image
                                src={insta}
                                alt="instagram"
                                className="max-[50px]:w-full"
                              />
                            </a>
                          </li>
                          <li className="bb-footer-link leading-[1.5] flex items-center pr-[5px]">
                            <a className="transition-all bg-white bg-opacity-30 hover:scale-125 cursor-pointer shadow3 backdrop-blur-lg border-[1px] border-solid border-[#eee]  hover:backdrop-blur-none duration-[0.3s] ease-in-out w-[30px] h-[30px] rounded-[5px] capitalize flex items-center justify-center text-[15px] leading-[20px] text-[#686e7d] relative break-all font-normal">
                              <Image
                                src={facebook}
                                alt="facebook"
                                className=" max-[50px]:w-full"
                              />
                            </a>
                          </li>
                          <li className="bb-footer-link leading-[1.5] flex items-center pr-[5px]">
                            <a className="transition-all bg-white bg-opacity-30 hover:scale-125 cursor-pointer shadow3 backdrop-blur-lg border-[1px] border-solid border-[#eee]  hover:backdrop-blur-none duration-[0.3s] ease-in-out w-[30px] h-[30px] rounded-[5px] capitalize flex items-center justify-center text-[15px] leading-[20px] text-[#686e7d] relative break-all font-normal">
                              <Image
                                src={whatsapp}
                                alt="whatsapp"
                                className="max-[50px]:w-full"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bb-app-store m-[-7px] flex flex-wrap">
                    <a  className="app-img">
                      <img
                        src="assets/img/app/android.png"
                        className="adroid max-w-[140px] m-[7px] rounded-[5px] max-[1399px]:max-w-[120px]"
                        alt="apple"
                      />
                    </a>
                    <a  className="app-img">
                      <img
                        src="assets/img/app/apple.png"
                        className="apple max-w-[140px] m-[7px] rounded-[5px] max-[1399px]:max-w-[120px]"
                        alt="apple"
                      />
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="min-[992px]:w-[20%] max-[991px]:w-full w-full px-[12px] bb-footer-toggle bb-footer-info">
                <div className="bb-footer-widget">
                  <h4 className="bb-footer-heading font-quicksand leading-[1.2] text-[18px] font-bold mb-[20px] text-[#3d4750] tracking-[0] relative block w-full pb-[15px] capitalize border-b-[1px] border-solid border-[#eee] max-[991px]:text-[14px]">
                    Categories
                    <div className="bb-heading-res">
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </h4>
                  <div className="bb-footer-links bb-footer-dropdown  max-[991px]:mb-[35px]">
                    <ul className="align-items-center">
                      {data?.data?.map((item) => (
                        <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                          <Link
                            href={`/products?categories=${item.name}`}
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="min-[992px]:w-[20%] max-[991px]:w-full w-full px-[12px] bb-footer-toggle bb-footer-service">
                <div className="bb-footer-widget">
                  <h4 className="bb-footer-heading font-quicksand leading-[1.2] text-[18px] font-bold mb-[20px] text-[#3d4750] tracking-[0] relative block w-full pb-[15px] capitalize border-b-[1px] border-solid border-[#eee] max-[991px]:text-[14px]">
                    Account
                    <div className="bb-heading-res">
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </h4>
                  <div className="bb-footer-links bb-footer-dropdown  max-[991px]:mb-[35px]">
                    <ul className="align-items-center">
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <Link
                          href="/auth"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal"
                        >
                          Sign In
                        </Link>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <Link
                          href="/cart"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal"
                        >
                          View Cart
                        </Link>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <Link
                          href="/checkout"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal"
                        >
                          Check Out
                        </Link>
                      </li>
                      {/* <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="faq.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal"
                        >
                          Return Policy
                        </a>
                      </li> */}

                      <li className="bb-footer-link leading-[1.5] flex items-center">
                        <Link
                          href="#"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal"
                        >
                          Payments
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="min-[992px]:w-[30%] max-[991px]:w-full w-full px-[12px] bb-footer-toggle bb-footer-cont-social">
                <div className="bb-footer-contact mb-[30px]">
                  <div className="bb-footer-widget">
                    <h4 className="bb-footer-heading font-quicksand leading-[1.2] text-[18px] font-bold mb-[20px] text-[#3d4750] tracking-[0] relative block w-full pb-[15px] capitalize border-b-[1px] border-solid border-[#eee] max-[991px]:text-[14px]">
                      Contact
                      <div className="bb-heading-res">
                        <i className="ri-arrow-down-s-line"></i>
                      </div>
                    </h4>
                    <div className="bb-footer-links bb-footer-dropdown max-[991px]:mb-[35px]">
                      <ul className="align-items-center">
                        <li className="bb-footer-link bb-foo-location flex items-start max-[991px]:mb-[15px] mb-[16px]">
                          <span className="mt-[5px] w-[25px] basis-[auto] grow-[0] shrink-[0]">
                            <Image
                              src={location}
                              alt="location"
                              className="pe-1 max-[50px]:w-full"
                            />
                          </span>
                          <p className="m-[0] ps-1 font-Poppins text-[14px] text-[#686e7d] font-normal leading-[28px] tracking-[0.03rem]">
                            Nankana Sahib, Punjab, Pakistan
                          </p>
                        </li>
                        <li className="bb-footer-link bb-foo-call flex items-start max-[991px]:mb-[15px] mb-[16px]">
                          <span className="w-[25px] basis-[auto] grow-[0] shrink-[0]">
                            <Image
                              src={whatsapp}
                              alt="whatsapp"
                              className="pe-1 max-[50px]:w-full"
                            />
                          </span>
                          <a
                            href="tel:+9231414900152"
                            className="ps-1 transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] inline-block relative break-all tracking-[0] font-normal max-[1399px]:text-[15px] max-[1199px]:text-[14px]"
                          >
                            0311-4900152
                          </a>
                        </li>
                        <li className="bb-footer-link bb-foo-mail flex">
                          <span className="w-[25px] basis-[auto] grow-[0] shrink-[0]">
                            <Image
                              src={email}
                              alt="email"
                              className="pe-1 max-[50px]:w-full"
                            />
                          </span>
                          <a
                            href="mailto:attiqdoger3@gmail.com"
                            className="ps-1 transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] inline-block relative break-all tracking-[0] font-normal max-[1399px]:text-[15px] max-[1199px]:text-[14px]"
                          >
                            attiqdoger3@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-[10px] border-t-[1px] border-solid border-[#eee] max-[991px]:py-[15px]">
          <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="flex flex-wrap w-full">
              <div className="bb-bottom-info w-full flex flex-row items-center justify-between max-[991px]:flex-col px-[12px]">
                <div className="footer-copy max-[991px]:mb-[15px]">
                  <div className="footer-bottom-copy max-[991px]:text-center">
                    <div className="bb-copy text-[#686e7d] text-[13px] tracking-[1px] text-center font-normal leading-[2]">
                      Copyright ©{" "}
                      <span
                        className="text-[#686e7d] text-[13px] tracking-[1px] text-center font-normal"
                        id="copyright_year"
                      >
                        {new Date().getFullYear()}
                      </span>{" "}
                      <Link
                        className="site-name transition-all duration-[0.3s] ease-in-out font-medium  text-[#6c7fd8] font-Poppins  tracking-[0.03rem]"
                        href="/"
                      >
                        <div
                          // href="index.html"
                          className="inline-flex items-center gap-2 px-1  "
                        >
                          {" "}
                          <Loader size="12px" />
                          <span>Dico</span>
                        </div>
                      </Link>
                      all rights reserved.
                    </div>
                  </div>
                </div>
                <div className="footer-bottom-right">
                  <div className="footer-bottom-payment flex justify-center">
                    <Link
                      href="/privacy-policy"
                      className="transition-all duration-[0.3s] me-2 ease-in-out font-Poppins text-[12px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms-of-service"
                      className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[12px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal"
                    >
                      Terms of service
                    </Link>
                  </div>
                </div>
                {/* <div className="footer-bottom-right">
                  <div className="footer-bottom-payment flex justify-center">
                    <div className="payment-link">
                      <Image
                        src={payment}
                        alt="payment"
                        className="max-[360px]:w-full"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
