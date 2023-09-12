import React from "react";

function FeaturCards({ title, discrption, logo_source }) {
  return (
    <div className="flex flex-col items-center justify-center md:px-10 md:py-8 px-3 py-2 bg-gradient-to-b from-[#3e0089] to-[#2c0055] rounded-[10px] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-500 ...">
      <div className="md:w-20 md:h-20 w-14 h-14 rounded-full bg-[#3ccf91] drop-shadow-2xl mb-5">
        <img src={logo_source} className="drop-shadow-2xl" />
      </div>
      <p className="font-bold md:text-2xl text-lg mb-8">{title}</p>
      <p className="text-center w-[20dvw] md:text-base text-sm">{discrption}</p>
    </div>
  );
}

export default FeaturCards;
