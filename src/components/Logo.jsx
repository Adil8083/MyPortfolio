import React from "react";
import reactLogo from "../assets/reactlogo.png";
import viteLogo from "../assets/vitejs.png";
import nodeLogo from "../assets/nodejs.png";
import tailwindLogo from "../assets/tailwind.png";
function Logo({ name }) {
  //   console.log(name);
  const detail =
    name === "React JS"
      ? "JavaScript Library"
      : name === "Vite JS"
      ? "Frontend Tooling"
      : name === "Node JS"
      ? "Runtime Environment"
      : "CSS Framework";
  //   console.log(logo);
  const logo =
    name === "React JS"
      ? reactLogo
      : name === "Vite JS"
      ? viteLogo
      : name === "Node JS"
      ? nodeLogo
      : tailwindLogo;

  return (
    <div className="flex justify-center items-center h-auto w-[13%]">
      <img src={logo} className="w-[70px] h-[70px] " />
      <div className="h-[80%] w-[70%] flex flex-col items-start justify-center ml-[3%] overflow-hidden">
        <p className="sm:text-sm lg:text-2xl sm:font-light lg:font-bold">
          {name}
        </p>
        <p className="pt-[5%]">{detail}</p>
      </div>
    </div>
  );
}

export default Logo;
