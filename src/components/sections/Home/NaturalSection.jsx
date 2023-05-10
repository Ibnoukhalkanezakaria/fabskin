import React from "react";
import { NaturalSectionData } from "../../../data/data";

const NaturalSection = () => {
  const { List } = NaturalSectionData;
  return (
    <div className="bg-secondaryClr py-20 ">
      <div className="wrapper text-center">
        <h1 className="max-w-[100%] w-[90%] sm:leading-[60px] sm:text-5xl text-3xl m-auto font-[Melodrama] text-color4">
          Our natural skincare products are crafted with cutting-edge green
          science and innovative ingredients to provide the ultimate luxury
          skincare experience
        </h1>
        <div className="flex mt-16 md:gap-14 gap-6 md:flex-nowrap flex-wrap max-w-[900px] m-auto">
          {List.map((e, i) => {
            return (
              <div
                key={i}
                className="justify-center md:basis-1/2 flex items-center gap-5"
              >
                <img src={e.icon} alt="icon" className="md:w-9 w-12" />
                <div className="md:max-w-[180px] font-medium text-left leading-6">
                  <span>{e.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NaturalSection;
