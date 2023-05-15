import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetStarted } from "../../../Context/Context";

const HeroShopAll = () => {
  const { categories } = useGetStarted();

  return (
    <div className="bg-color3 py-[100px] text-center">
      <h1 className="text-color4 font-[Melodrama] text-7xl leading-[80px] pb-6 max-w-[900px] m-auto font-normal">
        Shop all
      </h1>
      <div className="flex justify-center gap-8 mt-5 flex-wrap">
        <div>
          <span className="text-color4 font-normal text-lg">
            Shop by category:
          </span>
        </div>
        {categories.map((e, i) => {
          return (
            <div key={i} className="hover:underline cursor-pointer text-lg">
              <NavLink to={`/category/${e}`}>{e}</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroShopAll;
