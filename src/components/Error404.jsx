import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
function Error404() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[url('/src/assets/concrete-textured-background.jpg')] bg-cover">
      <p className="font-serif text-[10rem]">
        4<span className="text-yellow">0</span>4
      </p>
      <p className="text-center font-sans text-6xl">SORRY, THERE'S</p>
      <p className="text-center font-sans text-6xl text-yellow">NOTHING HERE</p>
      <div
        onClick={() => navigate("/")}
        className="mt-10 cursor-pointer rounded bg-yellow px-8 py-2 font-bold text-black"
      >
        GO HOME
      </div>
    </div>
  );
}

export default Error404;
