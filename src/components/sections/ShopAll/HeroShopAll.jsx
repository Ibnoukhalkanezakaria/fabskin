import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FeaturedProductsData } from "../../../data/data";

const HeroShopAll = () => {
  const { List } = FeaturedProductsData;

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  const newCategory = List.map((e) => e.category);

  let loop = [];
  let uniqueNames;
  let array;

  for (let i = 0; i < newCategory.length; i++) {
    array = newCategory[i];
    for (let j = 0; j < array.length; j++) {
      uniqueNames = loop.filter((e, i) => {
        return loop.indexOf(e) === i;
      });
      loop.push(array[j]);
    }
  }
  useEffect(() => {
    setData(List);
    setCollection(uniqueNames);
  }, []);

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
        {uniqueNames.map((e, i) => {
          return (
            <div
              onClick={() => filterProduct(item)}
              key={i}
              className="hover:underline cursor-pointer text-lg"
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroShopAll;
