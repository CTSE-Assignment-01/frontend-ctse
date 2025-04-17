import React from "react";

const sizes = {
  xs: "text-base font-normal",
  lg: "text-7xl font-normal md:text-5xl",
  s: "text-lg font-normal",
  md: "text-xl font-normal",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-900_99 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
