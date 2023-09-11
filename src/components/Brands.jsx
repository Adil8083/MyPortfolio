import React from "react";
import reactLogo from "../assets/reactlogo.png";
import Logo from "./Logo";
function Brands() {
  return (
    <div className="flex justify-evenly items-center bg-black w-auto py-20 md:px-0 px-10">
      <Logo name="React JS" />
      <Logo name="Vite JS" />
      <Logo name="Node JS" />
      <Logo name="Tailwind" />
    </div>
  );
}

export default Brands;
