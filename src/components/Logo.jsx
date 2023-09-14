import React from "react";
import reactLogo from "../assets/reactlogo.png";
import viteLogo from "../assets/vitejs.png";
import nodeLogo from "../assets/nodejs.png";
import tailwindLogo from "../assets/tailwind.svg";
import nextLogo from "../assets/next-js.svg";
import sassLogo from "../assets/sass.svg";

function Logo({ name }) {
  //   console.log(name);
  const detail =
    name === "React JS"
      ? "JavaScript Library"
      : name === "Vite JS"
      ? "Frontend Tooling"
      : name === "Node JS"
      ? "Runtime Environment"
      : name === "Tailwind"
      ? "CSS Framework"
      : name === "Next JS"
      ? "ReactJS Framework"
      : "CSS Extension";
  //   console.log(logo);
  const logo =
    name === "React JS"
      ? reactLogo
      : name === "Vite JS"
      ? viteLogo
      : name === "Node JS"
      ? nodeLogo
      : name === "Tailwind"
      ? tailwindLogo
      : name === "Next JS"
      ? nextLogo
      : sassLogo;

  return (
    <div className="md:flex block justify-center items-center">
      <img
        src={logo}
        className="md:w-[70px] md:h-[70px] w-[40px] h-[40px] mx-auto"
        loading="lazy"
      />
      <div className="md:ml-2 ml-0 md:mt-0 mt-2">
        <p className="text-sm md:text-xl font-bold md:text-start text-center">
          {name}
        </p>
        <p className="pt-[5%] text-center sm:block hidden text-neutral-400">
          {detail}
        </p>
      </div>
    </div>
  );
}

export default Logo;
