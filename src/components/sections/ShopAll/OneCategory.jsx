import React from "react";
import { useParams } from "react-router-dom";
import { useGetStarted } from "../../../Context/Context";

const OneCategory = () => {
  const { OneCategory } = useParams();
  const { List } = useGetStarted();
  const filterProduct = List.filter((e) => e.category.includes(OneCategory));

  return (
    <div>
      <h1>{OneCategory}</h1>
      {filterProduct.map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })}
    </div>
  );
};

export default OneCategory;
