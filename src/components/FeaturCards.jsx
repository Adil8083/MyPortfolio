import React from "react";
import Research from "../assets/research.svg";
function FeaturCards() {
  return (
    <div className="py-4 px-1 bg-gradient-to-b from-purple to-[#6130af] rounded-[10px] text-center flex flex-col justify-start items-center ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
      <div className="rounded-full bg-[#3ccf91] drop-shadow-2xl w-16 h-16">
        <img src={Research} className="w-16 h-16 drop-shadow-2xl" />
      </div>
      <p className="font-bold text-3xl pt-10 pb-5">Research</p>
      <p className="flex flex-wrap w-4/5">
        Understand the market, define the audience, and ideate potential
        solutions.
      </p>
    </div>
  );
}

export default FeaturCards;
