import React from "react";
import fabImage from "../../../assets/Home/fab-image.jpg";
import PrimaryButton from "../Button/PrimaryButton";

const FabVitamin = () => {
  return (
    <div className="bg-secondaryClr py-6">
      <div className="grid-cols-2 grid wrapper gap-[50px]">
        <div className="mr-4">
          <img
            src={fabImage}
            alt="HeroHome"
            className="rounded-l-[300px] h-full object-cover "
          />
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <h1 className="leading-[60px] font-[Melodrama] text-color4 font-normal text-5xl">
            Fab Vitamin C Body Cream For Skin Whitening
          </h1>
          <p className="max-w-[100%] w-[500px] leading-7 font-normal">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <PrimaryButton className="my-10">Shop Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default FabVitamin;
