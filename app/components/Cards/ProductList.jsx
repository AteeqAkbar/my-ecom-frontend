"use client";
import React, { useEffect, useState, Fragment } from "react";
import ProductCard from "./ProductCard";
import BoxLayout from "../BoxLayout";
import ProductCardSkeleton from "./ProductCardSkeleton";
import Countdown from "../Countdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/app/store/cartSlice";
import {
  keepPreviousData,
  QueryClient,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchProducts } from "@/app/services/api";
import { useSearchParams } from "next/navigation";

function List(props) {
  const searchParams = useSearchParams();
  const categories = searchParams.getAll("categories");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const { isPending, error, data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["prducts", page, categories, maxPrice, minPrice],
    queryFn: () => fetchProducts(page, categories, minPrice, maxPrice),
    staleTime: 10000,
    placeholderData: keepPreviousData,
  });
  const products = data?.data || [];
  const pagination = data?.meta?.pagination;
  useEffect(() => {
    if (!isPlaceholderData && page < pagination?.pageCount) {
      queryClient.prefetchQuery({
        queryKey: ["projects", page + 1],
        queryFn: () => fetchProducts(page + 1, categories, minPrice, maxPrice),
      });
    }
  }, [data, isPlaceholderData, page, queryClient]);

  if (error) {
    return (
      <h1 className="text-3xl text-center my-8 font-bold text-gray-400">
        Error: {error.message}
      </h1>
    );
  }

  const getPageNumbers = (currentPage, totalPages) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push("...");
      }
    }
    return [...new Set(pages)];
  };

  const pageNumbers = getPageNumbers(page, pagination?.pageCount);

  return (
    // <BoxLayout>
    <div className=" w-full px-[12px] mb-[24px]">
      <div key={Math.random() + 1002} className="bb-shop-pro-inner">
        <div
          key={Math.random() + 1002}
          className="flex flex-wrap mx-[-12px] mb-[-24px]"
        >
          {/* <div key={Math.random() + 100} className="w-full px-[12px]">
            <div className="bb-pro-list-top mb-[24px] rounded-[20px] flex bg-[#f8f8fb] border-[1px] border-solid border-[#eee] justify-between">
              <div className="flex flex-wrap w-full">
                <div className="w-[50%] px-[12px] max-[420px]:w-full">
                  <div className="bb-bl-btn py-[10px] flex max-[420px]:justify-center">
                    <button
                      type="button"
                      className="grid-btn btn-grid-100 h-[38px] w-[38px] flex justify-center items-center border-[0] p-[5px] bg-transparent mr-[5px] active"
                      title="grid"
                    >
                      <i className="ri-apps-line text-[20px]"></i>
                    </button>
                    <button
                      type="button"
                      className="grid-btn btn-list-100 h-[38px] w-[38px] flex justify-center items-center border-[0] p-[5px] bg-transparent"
                      title="grid"
                    >
                      <i className="ri-list-unordered text-[20px]"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="w-full  px-[12px]">
            <div
              className="section-title bb-deal mb-[20px] pb-[20px] z-[5] relative flex justify-between max-[991px]:pb-[0] max-[991px]:flex-col max-[991px]:justify-center max-[991px]:text-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="section-detail max-[991px]:mb-[12px]">
                <h2 className="bb-title font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">
                  Day of the{" "}
                  <span className="bg-transparent h-[36px] bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 ">
                    Deal
                  </span>
                </h2>
                <p className="font-Poppins max-w-[400px] mt-[10px] text-[14px] text-[#686e7d] leading-[18px] font-light tracking-[0.03rem] max-[991px]:mx-[auto]">
                  Don't wait. The time will never be just right.
                </p>
              </div>

              <div className="section-detail max-[991px]:mb-[12px] hidden sm:flex items-center justify-center ">
                <Countdown />
              </div>
            </div>
          </div>
          {isFetching || isPending ? (
            [...Array(12)].map((value) => {
              return (
                <Fragment key={Math.random()}>
                  <ProductCardSkeleton />
                </Fragment>
              );
            })
          ) : products.length == 0 ? (
            <h2 className="bb-title py-4 px-3 font-quicksand mb-[0] p-[0] text-[25px] font-medium text-[#3d4750] relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">
              No products found for the given criteria.
            </h2>
          ) : (
            products?.map((product) => {
              return (
                <Fragment key={Math.random()}>
                  <ProductCard product={product} />
                </Fragment>
              );
            })
          )}

          <div className="w-full px-[12px]">
            <div className="bb-pro-pagination mb-[24px] flex justify-between max-[575px]:flex-col max-[575px]:items-center">
              <p className="font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem] max-[575px]:mb-[10px]">
                Total {pagination?.total} item(s)
              </p>
              <div className="flex">
                <div className="flex items-center justify-center gap-2">
                  {/* Previous Button */}
                  <button
                    className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1 disabled:opacity-50"
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={pagination?.page === 1}
                  >
                    Previous
                  </button>

                  {/* Page Numbers with Ellipsis */}
                  {pageNumbers.map((pages, index) => (
                    <button
                      key={index}
                      className={`transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer h-[32px] font-light text-[#777] leading-[32px] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1 ${
                        page === pages
                          ? " bg-grad  text-white"
                          : typeof page === "number"
                          ? " hover:text-white"
                          : "bg-transparent text-gray-500 cursor-default"
                      }`}
                      onClick={() =>
                        typeof pages === "number" && setPage(pages)
                      }
                      disabled={pages === "..."}
                    >
                      {pages}
                    </button>
                  ))}

                  {/* Next Button */}
                  <button
                    className="transition-all px-[13px] duration-[0.3s] ease-in-out w-auto cursor-pointer h-[32px] font-light text-[#777] leading-[32px] bg-[#f8f8fb] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow1 disabled:opacity-50"
                    onClick={() =>
                      setPage((prev) =>
                        Math.min(prev + 1, pagination?.pageCount)
                      )
                    }
                    disabled={pagination?.page === pagination?.pageCount}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> // </BoxLayout>
  );
}

function ProductList({ boxLayoutUse = false }) {
  // const products = useSelector((state) => state.products.items);
  // const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {boxLayoutUse ? (
        <List />
      ) : (
        <BoxLayout>
          <List></List>
        </BoxLayout>
      )}
    </>
  );
}

export default ProductList;
