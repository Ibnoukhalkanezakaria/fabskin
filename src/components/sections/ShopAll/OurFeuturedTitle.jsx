import React from "react";
import { FeaturedProductsData } from "../../../data/data";

const OurFeuturedTitle = () => {
  const { title } = FeaturedProductsData;
  return (
    <div className="wrapper py-16">
      <h1
        className="font-[Melodrama] pb-16 text-color4 font-normal m-auto text-center
         max-w-[600px] sm:text-6xl text-5xl leading-16"
      >
        {title}
      </h1>
    </div>
  );
};

export default OurFeuturedTitle;
