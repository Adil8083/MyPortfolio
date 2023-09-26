import React from "react";
import reactLogo from "../assets/reactlogo.png";
import Logo from "./Logo";
function Brands() {
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="flex w-[80%] flex-wrap items-center justify-center gap-x-20 gap-y-10 px-10 py-20 md:px-0">
        <Logo name="React JS" />
        <Logo name="Next JS" />
        <Logo name="Vite JS" />
        <Logo name="Node JS" />
        <Logo name="Tailwind" />
        <Logo name="Sass" />
      </div>
    </div>
  );
}

export default Brands;
