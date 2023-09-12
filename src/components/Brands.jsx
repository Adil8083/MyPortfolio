import React from "react";
import reactLogo from "../assets/reactlogo.png";
import Logo from "./Logo";
function Brands() {
  return (
    <div className="flex justify-around items-center flex-wrap bg-black w-auto py-20 md:px-0 px-10 gap-y-7">
      <Logo name="React JS" />
      <Logo name="Next JS" />
      <Logo name="Vite JS" />
      <Logo name="Node JS" />
      <Logo name="Tailwind" />
      <Logo name="Sass" />
    </div>
  );
}

export default Brands;
