import React from "react";

function FeaturCards({ title, discrption, logo_source }) {
  return (
    <div className="w-1/4 h-80 py-4 px-1 bg-gradient-to-b from-[#3e0089] to-[#2c0055] rounded-[10px] text-center flex flex-col justify-start items-center ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
      <div className="rounded-full bg-[#3ccf91] drop-shadow-2xl w-16 h-16">
        <img src={logo_source} className="w-16 h-16 drop-shadow-2xl" />
      </div>
      <p className="font-bold text-3xl pt-10 pb-5">{title}</p>
      <p className="flex flex-wrap w-4/5">{discrption}</p>
    </div>
  );
}

export default FeaturCards;
