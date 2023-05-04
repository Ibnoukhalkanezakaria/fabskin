import React from "react";
import HeroImage from "../../../assets/Home/hero-image.jpg";
import PrimaryButton from "../Button/PrimaryButton";

const HeroHome = () => {
  return (
    <div className="bg-color3 ">
      <div className="grid-cols-2 grid gap-[50px]">
        <div className="pl-[30%] text-center flex flex-col items-center justify-center">
          <h1 className="leading-[80px] font-[Melodrama] text-primaryClr font-normal text-7xl">
            Look within yourself and discover
          </h1>
          <p className="max-w-[100%] w-[400px] leading-7 font-normal">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when.
          </p>
          <PrimaryButton className="my-10">View Collection</PrimaryButton>
        </div>
        <div className="mr-4">
          <img
            src={HeroImage}
            alt="HeroHome"
            className="rounded-r-[300px] h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
