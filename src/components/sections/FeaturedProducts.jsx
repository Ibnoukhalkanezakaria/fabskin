import React from "react";
import { FeaturedProductsData } from "../../data/data";
import PrimaryButton from "./Button/PrimaryButton";

const FeaturedProducts = () => {
  const { List, title } = FeaturedProductsData;
  return (
    <div>
      <div className="wrapper py-16">
        <h1
          className="font-[Melodrama] pb-16 text-color4 font-normal m-auto text-center
         max-w-[600px] sm:text-6xl text-5xl leading-16"
        >
          {title}
        </h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {List.map((item, i) => {
            return (
              <div key={i} className="text-center mb-10">
                <div className="h-[380px] relative cursor-pointer">
                  <img
                    src={item.productImage}
                    alt="productImage"
                    className="hover:opacity-0 z-[20] duration-300 h-[380px] w-full object-cover absolute top-0 left-0"
                  />
                  <img
                    src={item.backImage}
                    alt="productImage"
                    className="hover:opacity-0 h-[380px] duration-300 w-full object-cover absolute top-0 left-0"
                  />
                </div>
                <h1 className="text-[20px] font-medium pt-9 ">{item.name}</h1>
                <h3 className="text-4xl font-[Melodrama] pt-3 text-primaryClr">
                  $ {item.price} USD
                </h3>
                <span className="text-[20px] opacity-70 font-normal font-[Melodrama] block pt-2 text-primaryClr line-through">
                  $ {item.lastPrice} USD
                </span>
                <PrimaryButton className="mt-7 w-[200px] m-auto">
                  Shop Now
                </PrimaryButton>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
