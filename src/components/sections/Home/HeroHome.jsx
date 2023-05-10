import React from "react";
import HeroImage from "../../../assets/Home/hero-image.jpg";
import PrimaryButton from "../Button/PrimaryButton";
import shape from "../../../assets/Home/shape-1.svg";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <div className="bg-color3 relative">
      <div className="lg:grid-cols-2 grid lg:gap-[50px] gap-2">
        <div className="lg:pl-[30%] px-[5%] flex flex-col justify-center items-center text-center">
          <h1 className="sm:leading-[80px] font-[Melodrama] text-primaryClr font-normal sm:text-7xl text-5xl">
            Look within yourself and discover
          </h1>
          <p className="max-w-[400px] leading-6 font-normal">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when.
          </p>
          <Link to="/shop">
            <PrimaryButton className="my-10">View Collection</PrimaryButton>
          </Link>
        </div>
        <div className="lg:mr-4 mx-2">
          <img
            src={HeroImage}
            alt="HeroHome"
            className="lg:rounded-r-[300px]  lg:rounded-l-[0] rounded-b-[300px] h-full object-cover "
          />
        </div>
      </div>
      <img
        src={shape}
        alt="shape"
        className="absolute left-[-3%] lg:block hidden bottom-0 max-w-[10vw]"
      />
    </div>
  );
};

export default HeroHome;
