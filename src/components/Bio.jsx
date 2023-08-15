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
    <div className="flex justify-start items-start bg-black w-full h-100">
      <div className="w-[50%] px-[10%]">
        <p className="font-bold lg:text-4xl sm:text-sm italic font-mono py-[5%] ">
          Hi, I'm Adil and I approach design holistically.
        </p>
        <p className="lg:text-xl flex-wrap">
          Using a trans-disciplinary approach to design, I am able to leave
          behind the confines of a conventional method by combining UX
          fundamentals with years of experience in Product Marketing, Digital
          Analysis, Market Research, and Brand Management.
        </p>
        <div className="flex items-center pt-10 w-full flex-wrap">
          {featuresTitles.map((title) => (
            <div className="px-1 py-2">
              <FeatureButton title={title} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[50%] h-[40vh] bg-gradient-to-b from-yellow to-black rounded-l-[240px] ml-[10%]">
        <img src={tech} className="h-[40vh]" />
      </div>
    </div>
  );
}

export default Bio;
