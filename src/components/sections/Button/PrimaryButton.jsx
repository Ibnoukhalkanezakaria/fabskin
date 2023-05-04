import React from "react";
import classNames from "classnames";

const PrimaryButton = ({ children, className, ...props }) => {
  const StyleButton = classNames([
    "bg-primaryClr text-secondaryClr py-4 px-10 hover:bg-color4 duration-300 cursor-pointer ",
    className,
  ]);
  return (
    <div className={StyleButton} {...props}>
      {children}
    </div>
  );
};

export default PrimaryButton;
