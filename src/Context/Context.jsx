import { createContext, useContext, useState } from "react";
import { FeaturedProductsData } from "../data/data";

const GetStartedContext = createContext({});

const GetStartedProvider = ({ children }) => {
  const { List } = FeaturedProductsData;

  const newCategory = List.map((e) => e.category);
  let loop = [];
  let categories;
  let array;

  for (let i = 0; i < newCategory.length; i++) {
    array = newCategory[i];
    for (let j = 0; j < array.length; j++) {
      categories = loop.filter((e, i) => {
        return loop.indexOf(e) === i;
      });
      loop.push(array[j]);
    }
  }
  return (
    <GetStartedContext.Provider value={{ categories, List }}>
      {children}
    </GetStartedContext.Provider>
  );
};

export default GetStartedProvider;

export const useGetStarted = () => {
  return useContext(GetStartedContext);
};
