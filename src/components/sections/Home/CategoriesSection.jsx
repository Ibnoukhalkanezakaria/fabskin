import React from "react";
import { CategoriesSectionData } from "../../../data/data";

const CategoriesSection = () => {
  const { List } = CategoriesSectionData;
  return (
    <div className="py-20 wrapper">
      <div className="flex items-center lg:flex-nowrap gap-8 flex-wrap">
        <div className="w-[500px]">
          <h3 className="leading-14 font-[Melodrama] sm:text-5xl text-4xl font-normal text-color4">
            Shop by Categories
          </h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-10 cursor-pointer ">
          {List.map((e, i) => {
            return (
              <div key={i} className=" ">
                <div className="overflow-hidden rounded-b-[50%]">
                  <img
                    src={e.image}
                    alt="image"
                    className="hover:scale-110 duration-300 rounded-b-[50%]"
                  />
                </div>
                <h3 className="uppercase text-center pt-6 text-color4 font-normal">
                  {e.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
