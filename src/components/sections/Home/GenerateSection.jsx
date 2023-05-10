import React from "react";
import { GenerateSectionData } from "../../../data/data";

const GenerateSection = () => {
  const { List } = GenerateSectionData;
  return (
    <div>
      <div className="wrapper sm:py-10">
        <p className="sm:text-3xl text-xl text-center max-w-[790px] m-auto sm:leading-10 leading-8">
          "Generate Lorem Ipsum which looks reasonable. The generated Lorem
          Ipsum is therefore always free from repetition, injected humour, or
          non-characteristic"
        </p>
        <div className="flex justify-center flex-wrap max-w-[700px] sm:gap-16 gap-8 m-auto py-[70px]">
          {List.map((e, i) => {
            return (
              <div key={i}>
                <img
                  src={e.image}
                  alt="image"
                  className={`sm:w-[120px] w-[100px] duration-300 cursor-pointer hover:opacity-100 cursor ${
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
