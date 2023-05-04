import React from "react";
import { FeaturedProductsData } from "../../../data/data";
import PrimaryButton from "../Button/PrimaryButton";

const FeaturedProducts = () => {
  const { List, title } = FeaturedProductsData;
  return (
    <div>
      <div className="wrapper py-16">
        <h1 className="font-[Melodrama] pb-16 text-color4 font-normal m-auto w-[600px] text-6xl ">
          {title}
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {List.map((item, i) => {
            return (
              <div key={i} className="text-center ">
                <div className="imageProduct relative cursor-pointer h-[300px]">
                  <img
                    src={item.backImage}
                    alt="backImage"
                    className="backImage duration-300 absolute top-0"
                  />
                  <img
                    src={item.productImage}
                    alt="productImage"
                    className="productImage hover:opacity-0 duration-300 absolute top-0 w-full"
                  />
                </div>
                <h1 className="text-[20px] font-normal pt-9">{item.name}</h1>
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
