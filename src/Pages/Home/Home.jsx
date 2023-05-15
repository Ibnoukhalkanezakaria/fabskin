import React from "react";
import HeroHome from "../../components/sections/Home/HeroHome";
import NaturalSection from "../../components/sections/Home/NaturalSection";
import FabVitamin from "../../components/sections/Home/FabVitamin";
import OurStory from "../../components/sections/Home/OurStory";
import GenerateSection from "../../components/sections/Home/GenerateSection";
import CategoriesSection from "../../components/sections/Home/CategoriesSection";
import FeaturedProducts from "../../components/sections/ShopAll/FeaturedProducts";
import OurFeuturedTitle from "../../components/sections/ShopAll/OurFeuturedTitle";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <NaturalSection />
      <FabVitamin />
      <OurFeuturedTitle />
      <FeaturedProducts num={4} />
      <OurStory />
      <GenerateSection />
      <CategoriesSection />
    </div>
  );
};

export default Home;
