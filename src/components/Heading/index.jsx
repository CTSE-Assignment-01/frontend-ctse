import React from "react";

const sizes = {
  "2xl": "text-5xl font-extrabold md:text-[44px] sm:text-[38px]",
  xl: "text-[32px] font-extrabold md:text-3xl sm:text-[28px]",
  s: "text-lg font-semibold",
  md: "text-xl font-semibold",
  xs: "text-base font-semibold",
  lg: "text-2xl font-bold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
