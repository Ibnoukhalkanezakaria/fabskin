import React from "react";
import { CategoriesSectionData } from "../../../data/data";

const CategoriesSection = () => {
  const { List } = CategoriesSectionData;
  return (
    <div className="py-10 wrapper">
      <div className="flex items-center">
        <div className="w-[400px]">
          <h3 className="font-[Melodrama] text-4xl font-medium text-color4 leading-10">
            Shop by Categories
          </h3>
        </div>
        <div className="grid-cols-3 grid gap-6">
          {List.map((e, i) => {
            return (
              <div key={i}>
                <img src={e.image} alt="image" className="rounded-b-[50%]" />
                <h3 className="uppercase text-center pt-6">{e.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
