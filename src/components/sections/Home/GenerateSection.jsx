import React from "react";
import { GenerateSectionData } from "../../../data/data";

const GenerateSection = () => {
  const { List } = GenerateSectionData;
  return (
    <div>
      <div className="wrapper  py-10">
        <p className="text-3xl text-center w-[790px] m-auto leading-10">
          "Generate Lorem Ipsum which looks reasonable. The generated Lorem
          Ipsum is therefore always free from repetition, injected humour, or
          non-characteristic"
        </p>
        <div className="flex justify-between w-[700px] m-auto py-[70px]">
          {List.map((e, i) => {
            return (
              <div key={i}>
                <img
                  src={e.image}
                  alt="image"
                  className={`w-[120px] duration-300 cursor-pointer hover:opacity-100 cursor ${
                    i == 1 ? "" : "opacity-40"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GenerateSection;
