import React from "react";

import Image from "../../../assets/imgs/blog.jpg";

import { ConsistentSectionData } from "../../../data/data";

import checked from "../../../assets/imgs/checked.svg";

const ConsistentSection = () => {
  const { List } = ConsistentSectionData;
  return (
    <div className="bg-color3 py-[100px]">
      <div className="wrapper">
        <h3 className="pb-10 text-color4 font-[Melodrama] text-5xl max-w-[700px] leading-[60px]">
          Consistent tanning and rare burning define melanin-rich skin
        </h3>
        <div>
          {List.map((e, i) => {
            return (
              <div key={i} className="flex gap-8 items-center pb-10">
                <div className="rounded-t-full bg-primaryClr w-[60px] h-[60px] p-2 flex items-center justify-center">
                  <img src={checked} alt="checked" className="w-[20px]" />
                </div>
                <div>
                  <p className="text-color4 text-xl">
                    {e.name}:{" "}
                    <span className="font-semibold">{e.modulus}%</span> {e.type}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConsistentSection;
