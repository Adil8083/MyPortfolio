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
    <div className="flex justify-center items-center bg-black pt-10">
      <div className="flex-1 md:px-24 px-10">
        <p className="font-bold md:text-4xl text-xl italic font-mono pb-6">
          Hi, I'm Adil and I approach design holistically.
        </p>
        <p className="md:text-xl text-sm flex-wrap">
          Using a trans-disciplinary approach to design, I am able to leave
          behind the confines of a conventional method by combining UX
          fundamentals with years of experience in Product Marketing, Digital
          Analysis, Market Research, and Brand Management.
        </p>
        <div className="flex items-center justify-between flex-wrap mt-9 gap-x-10 gap-y-3">
          {featuresTitles.map((title) => (
            <div key={title} className="">
              <FeatureButton title={title} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-b from-yellow to-black rounded-l-[240px] lg:block hidden">
        <img src={tech} className="" />
      </div>
    </div>
  );
}

export default Bio;
