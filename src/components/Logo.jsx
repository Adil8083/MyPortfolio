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
    <div className="block items-center justify-center md:flex">
      <img
        src={logo}
        className="mx-auto h-[40px] w-[40px] md:h-[70px] md:w-[70px]"
        loading="lazy"
      />
      <div className="ml-0 mt-2 md:ml-2 md:mt-0">
        <p className="text-center text-sm font-bold md:text-start md:text-xl">
          {name}
        </p>
        <p className="hidden pt-[5%] text-center text-neutral-400 sm:block">
          {detail}
        </p>
      </div>
    </div>
  );
}

export default Logo;
