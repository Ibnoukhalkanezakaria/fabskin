import React from "react";
import HeroShopAll from "../../components/sections/ShopAll/HeroShopAll";
import FeaturedProducts from "../../components/sections/ShopAll/FeaturedProducts";
import { FeaturedProductsData } from "../../data/data";
const Shop = () => {
  const { List } = FeaturedProductsData;
  return (
    <div>
      <HeroShopAll />
      <FeaturedProducts num={List.length} />
    </div>
  );
};

export default Shop;
