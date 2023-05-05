import React from "react";
import { NaturalSectionData } from "../../../data/data";

const NaturalSection = () => {
  const { List } = NaturalSectionData;
  return (
    <div className="bg-secondaryClr py-20 ">
      <div className="wrapper text-center">
        <h1 className="max-w-[100%] w-[90%] sm:leading-[60px] sm:text-5xl text-3xl m-auto font-[Melodrama] text-color4">
          Our natural skincare products are{" "}
          <span className="relative :beforebg-primaryClr rounded-[50%] w-4 h-4  ">
            0
          </span>{" "}
          crafted with cutting-edge green science and innovative ingredients to
          provide the ultimate luxury skincare experience
        </h1>
        <div className="flex flex-row flex-wrap m-au bg-slate-700">
          {List.map((e, i) => {
            return (
              <div
                key={i}
                className="justify-center basis-1/2 flex items-center gap-5"
              >
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
