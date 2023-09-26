import React from "react";

function FeaturCards({ title, discrption, logo_source }) {
  return (
    <div className="delay-50 ... flex h-[30%] w-[90%] flex-col items-center justify-center rounded-[10px] bg-gradient-to-b from-[#3e0089] to-[#2c0055] px-5 py-3 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:h-auto md:w-auto md:px-10 md:py-8">
      <div className="mb-5 h-14 w-14 rounded-full bg-[#3ccf91] drop-shadow-2xl md:h-20 md:w-20">
        <img src={logo_source} className="drop-shadow-2xl" />
      </div>
      <p className="mb-8 text-lg font-bold md:text-2xl">{title}</p>
      <p className="w-auto text-center text-sm  md:w-[20dvw] md:text-base">
        {discrption}
      </p>
    </div>
  );
}

export default FeaturCards;
