import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "border-orange-600 border-[5px] border-solid bg-white-A700 checked:border-orange-600 checked:border-[5px] checked:border-solid checked:bg-white-A700 checked:focus:bg-white-A700 checked:focus:border-orange-600",
};
const sizes = {
  xs: "h-[14px] w-[14px] rounded-[7px]",
};

const Radio = React.forwardRef(
  ({ className = "", name = "", label = "", id = "radio_id", variant = "primary", size = "xs", ...restProps }, ref) => {
    return (
      <label className={className + " flex items-center gap-[5px] cursor-pointer"}>
        <input
          className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
          ref={ref}
          type="radio"
          name={name}
          {...restProps}
          id={id}
        />
        <span>{label}</span>
      </label>
    );
  },
);

Radio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { Radio };
