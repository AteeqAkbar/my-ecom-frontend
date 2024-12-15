import React from "react";

function ProductCardSkeleton({ style = {} }) {
  return (
    <div
      style={style}
      className="min-[1200px]:w-[25%] min-[768px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px] "
    >
      <div className="bg-white border border-solid border-gray-200 rounded-[20px] shadow p-4 animate-pulse">
        {/* Image Skeleton */}
        <div className="h-[200px] bg-gray-200 rounded-t-[20px]"></div>

        {/* Content Skeleton */}
        <div className="space-y-4 mt-4">
          {/* Category */}
          <div className="flex justify-between">
            <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-4 bg-gray-200 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="h-6 w-3/4 bg-gray-200 rounded"></div>

          {/* Price */}
          <div className="flex justify-between">
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
