import React from "react";

function FeatureButton({ title }) {
  return (
    <div className="flex justify-center items-center text-center bg-grey text-white p-5 rounded-full w-32 h-10 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 ...">
      {title}
    </div>
  );
}

export default FeatureButton;
