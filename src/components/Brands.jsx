import React from "react";
import reactLogo from "../assets/reactlogo.png";
import Logo from "./Logo";
function Brands() {
  return (
    <div className=" bg-black flex items-center justify-center">
      <div className="w-[80%] flex justify-center items-center flex-wrap py-20 md:px-0 px-10 gap-y-10 gap-x-20">
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
