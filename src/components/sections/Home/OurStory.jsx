import React from "react";
import OurStoryImage from "../../../assets/Home/story.jpg";
import shape from "../../../assets/Home/shape-2.svg";

const OurStory = () => {
  return (
    <div>
      <div className="px-16 py-16 gap-4 flex items-center justify-between relative wrapper my-10 bg-color3 h-[500px]">
        <div>
          <h3 className="text-color4 font-[Melodrama] font-normal text-5xl">
            Our Story
          </h3>
          <p className="pt-5 leading-7 text-[17px] pb-12 max-w-[700px]">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself.
          </p>
          <button className="underline">Read More</button>
        </div>
        <div>
          <img
            src={OurStoryImage}
            alt="OurStoryImage"
            className="w-[300px] rounded-[200px] z-[22] relative"
          />
        </div>
        <img
          src={shape}
          alt=""
          className="absolute right-0 bottom-0 w-[120px]"
        />
      </div>
    </div>
  );
};

export default OurStory;
