import React from "react";

function Tag({ children, className, tagClass = "tag-neumorphic", ...props }) {
  return (
    <span
      {...props}
      className={`${tagClass} inline-block p-2 rounded-full text-lg font-medium text-gray-600 mb-1 mr-2 text-center ${className}`}
    >
      {children}
    </span>
  );
}

export default Tag;
