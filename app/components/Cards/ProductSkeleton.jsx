import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="bb-single-pro mb-[24px] animate-pulse">
      <div className="flex flex-wrap mx-[-12px]">
        {/* Left Section: Image Placeholder */}
        <div className="min-[992px]:w-[41.66%] w-full px-[12px] mb-[24px]">
          <div className="w-full h-[300px] bg-[#f8f8fb] rounded-[10px]"></div>
        </div>

        {/* Right Section: Product Info */}
        <div className="min-[992px]:w-[58.33%] w-full px-[12px] mb-[24px]">
          <div className="bb-single-pro-contact">
            {/* Title */}
            <div className="bb-sub-title mb-[20px]">
              <div className="h-[30px] bg-[#f8f8fb] rounded"></div>
            </div>

            {/* Ratings */}
            <div className="bb-single-rating mb-[12px] flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 bg-[#f8f8fb] rounded-full"
                ></div>
              ))}
              <div className="w-[120px] h-[20px] bg-[#f8f8fb] rounded"></div>
            </div>

            {/* Description */}
            <div className="space-y-2 mb-[20px]">
              <div className="h-[16px] bg-[#f8f8fb] rounded"></div>
              <div className="h-[16px] bg-[#f8f8fb] rounded"></div>
              <div className="h-[16px] bg-[#f8f8fb] rounded w-[80%]"></div>
            </div>

            {/* Price and SKU */}
            <div className="bb-single-price-wrap flex justify-between py-[10px]">
              <div className="space-y-2">
                <div className="w-[100px] h-[24px] bg-[#f8f8fb] rounded"></div>
                <div className="w-[80px] h-[16px] bg-[#f8f8fb] rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="w-[120px] h-[24px] bg-[#f8f8fb] rounded"></div>
                <div className="w-[80px] h-[16px] bg-[#f8f8fb] rounded"></div>
              </div>
            </div>

            {/* Quantity and Buttons */}
            <div className="bb-single-qty flex flex-wrap gap-2 ms-2 m-[-2px]">
              {/* Quantity Skeleton */}
              <div className="w-[85px] h-[40px] bg-[#f8f8fb] rounded-[10px]"></div>
              {/* Add to Cart Skeleton */}
              <div className="w-[140px] h-[40px] bg-[#f8f8fb] rounded-[10px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
