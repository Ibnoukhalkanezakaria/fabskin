import React from "react";

import Image from "../../../assets/imgs/story.jpg";

import signP from "../../../assets/imgs/sign-p.png";

const FoundersSection = () => {
  return (
    <div className="p-[100px]">
      <div className="wrapper flex flex-row gap-20 items-center">
        <div className="basis-1/3">
          <img src={Image} alt="image" className="rounded-full w-[600px]" />
        </div>
        <div className="basis-1/2">
          <h3 className="text-color4 text-5xl font-[Melodrama] pb-4">
            Meet our founders
          </h3>
          <p className="text-color4 text-md pb-2 leading-6">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself.
          </p>
          <p className="text-color4 text-md pb-6 leading-6">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </p>
          <div className="border-l-[5px] border-primaryClr p-4 ">
            <p className="text-color4 text-md pb-6 leading-6">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain, but because
              occasionally circumstances occur in which toil and pain can
              procure him some great pleasure. To take a trivial example, which
              of us ever undertakes laborious physical exercise.
            </p>
            <span className="text-lg text-color4 font-semibold">
              Lori Stevens
            </span>
          </div>
          <div className="mt-[40px]">
            <img src={signP} alt="signP" className="w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;
