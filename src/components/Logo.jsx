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
    <div className="md:flex block justify-center items-center ">
      <img src={logo} className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]" />
      <div className="">
        <p className="text-sm md:text-2xl font-bold text-center">{name}</p>
        <p className="pt-[5%] text-center sm:block hidden">{detail}</p>
      </div>
    </div>
  );
}

export default Logo;
