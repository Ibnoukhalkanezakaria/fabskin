import React from "react";
import { CategoriesSectionData } from "../../../data/data";

const CategoriesSection = () => {
  const { List } = CategoriesSectionData;
  return (
    <div className="py-10 wrapper">
      <div className="flex items-center">
        <div className="w-[500px]">
          <h3 className="leading-14 font-[Melodrama] text-5xl font-normal text-color4">
            Shop by Categories
          </h3>
        </div>
        <div className="grid-cols-3 grid gap-6 cursor-pointer ">
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
                <h3 className="uppercase text-center pt-6 text-color4 font-medium">
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
