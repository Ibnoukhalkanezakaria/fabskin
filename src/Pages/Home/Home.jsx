import React from "react";
import HeroHome from "../../components/sections/Home/HeroHome";
import NaturalSection from "../../components/sections/Home/NaturalSection";
import FabVitamin from "../../components/sections/Home/FabVitamin";
import FeaturedProducts from "../../components/sections/Home/FeaturedProducts";
import OurStory from "../../components/sections/Home/OurStory";
import GenerateSection from "../../components/sections/Home/GenerateSection";
import CategoriesSection from "../../components/sections/Home/CategoriesSection";

const Home = () => {
  return (
    <div>
      <HeroHome />
      {/* <NaturalSection /> */}
      <FabVitamin />
      <FeaturedProducts />
      <OurStory />
      {/* <GenerateSection /> */}
      <CategoriesSection />
    </div>
  );
};

export default Home;
