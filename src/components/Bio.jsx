import React from "react";
import tech from "../assets/tech.png";
import FeatureButton from "./FeatureButton";
function Bio() {
  const featuresTitles = [
    "Research",
    "Design",
    "Development",
    "Strategy",
    "Fullfillment",
  ];
  return (
    <div className="flex items-center justify-center bg-black pt-10">
      <div className="flex-1 px-10 md:px-24">
        <p className="pb-6 font-mono text-xl font-bold italic md:text-4xl">
          Hi, I'm Adil and I approach design holistically.
        </p>
        <p className="flex-wrap text-sm md:text-xl">
          Using a trans-disciplinary approach to design, I am able to leave
          behind the confines of a conventional method by combining UX
          fundamentals with years of experience in Product Marketing, Digital
          Analysis, Market Research, and Brand Management.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-between gap-x-10 gap-y-3">
          {featuresTitles.map((title) => (
            <div key={title} className="">
              <FeatureButton title={title} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden flex-1 rounded-l-[240px] bg-gradient-to-b from-yellow to-black lg:block">
        <img src={tech} className="" />
      </div>
    </div>
  );
}

export default Bio;
