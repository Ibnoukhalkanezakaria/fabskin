import React from "react";
import HeroOurStory from "../../components/sections/OurStory/HeroOurStory";
import FoundersSection from "../../components/sections/OurStory/FoundersSection";
import ConsistentSection from "../../components/sections/OurStory/ConsistentSection";
import SubscribeSection from "../../components/sections/OurStory/SubscribeSection";

const OurStory = () => {
  return (
    <div>
      <HeroOurStory />
      <FoundersSection />
      <ConsistentSection />
      <SubscribeSection />
    </div>
  );
};

export default OurStory;
