import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
function Error404() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center flex-col bg-[url('/src/assets/concrete-textured-background.jpg')] bg-cover">
      <p className="text-[10rem] font-serif">
        4<span className="text-yellow">0</span>4
      </p>
      <p className="text-6xl font-sans">SORRY, THERE'S</p>
      <p className="text-6xl font-sans text-yellow">NOTHING HERE</p>
      <div
        onClick={() => navigate("/")}
        className="bg-yellow text-black font-bold rounded px-8 py-2 mt-10 cursor-pointer"
      >
        GO HOME
      </div>
    </div>
  );
}

export default Error404;
