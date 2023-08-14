import React from "react";
import reactLogo from "../assets/reactlogo.png";
import Logo from "./Logo";
function Brands() {
  return (
    <div className="flex justify-center items-center bg-black w-full h-[30vh]">
      <Logo name="React JS" />
      <Logo name="Vite JS" />
      <Logo name="Node JS" />
      <Logo name="Tailwind" />
    </div>
  );
}

export default Brands;
