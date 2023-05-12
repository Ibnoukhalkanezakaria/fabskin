import React from "react";
import { Link } from "react-router-dom";

const HeroShopAll = () => {
  return (
    <div className="bg-color3 py-[100px] text-center">
      <h1 className="text-color4 font-[Melodrama] text-7xl leading-[80px] pb-6 max-w-[900px] m-auto font-normal">
        Shop all
      </h1>
      <div className="flex justify-center gap-8 mt-5 flex-wrap">
        <div>
          <span className="text-color4 font-normal">Shop by category:</span>
        </div>
        <div className="hover:underline">
          <Link to="/">
            <span className="text-color4 font-normal">Body Wash</span>
          </Link>
        </div>
        <div className="hover:underline">
          <Link to="/">
            <span className="text-color4 font-normal">Face Wash</span>
          </Link>
        </div>
        <div className="hover:underline">
          <Link to="/">
            <span className="text-color4 font-normal">Cleanser</span>
          </Link>
        </div>
        <div className="hover:underline">
          <Link to="/">
            <span className="text-color4 font-normal">Serums</span>
          </Link>
        </div>
        <div className="hover:underline">
          <Link to="/">
            <span className="text-color4 font-normal">Night Cream</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroShopAll;
