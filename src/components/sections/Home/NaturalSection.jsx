import React from "react";
import { NaturalSectionData } from "../../../data/data";

const NaturalSection = () => {
  const { List } = NaturalSectionData;
  return (
    <div className="bg-secondaryClr py-20 ">
      <div className="wrapper text-center">
        <h1 className="max-w-[100%] w-[90%] leading-[60px] text-5xl m-auto font-[Melodrama] text-color4">
          Our natural skincare products are{" "}
          <span className="relative :beforebg-primaryClr rounded-[50%] w-4 h-4  ">
            0
          </span>{" "}
          crafted with cutting-edge green science and innovative ingredients to
          provide the ultimate luxury skincare experience
        </h1>
        <div className="flex justify-between gap-6 max-w-[100%] w-[800px] m-auto pt-12">
          {List.map((e, i) => {
            return (
              <div key={i} className="flex items-center gap-5">
                <img src={e.icon} alt="icon" className="w-9" />
                <div className="max-w-[180px] text-left leading-6">
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
