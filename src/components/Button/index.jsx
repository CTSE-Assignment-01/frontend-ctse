import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[29px]",
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
};
const variants = {
  outline: {
    white_A700: "border-white-A700 border border-solid text-white-A700",
  },
  fill: {
    orange_600: "bg-orange-600 text-white-A700",
    gray_200: "bg-gray-200 text-blue_gray-900",
  },
};
const sizes = {
  lg: "h-[55px] px-[35px] text-xl",
  xs: "h-[47px] px-[35px] text-xl",
  "2xl": "h-[64px] px-[35px] text-xl",
  sm: "h-[50px] px-[18px] text-2xl",
  xl: "h-[59px] px-4 text-xl",
  md: "h-[50px] px-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "orange_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle", "square"]),
  size: PropTypes.oneOf(["lg", "xs", "2xl", "sm", "xl", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["white_A700", "orange_600", "gray_200"]),
};

export { Button };
