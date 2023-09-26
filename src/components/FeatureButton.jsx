import React from "react";

function FeatureButton({ title }) {
  return (
    <div className="delay-10 ... flex h-10 w-32 items-center justify-center rounded-full bg-grey p-5 text-center text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      {title}
    </div>
  );
}

export default FeatureButton;
