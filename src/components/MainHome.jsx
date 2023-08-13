import React from "react";
import MainText from "./MainText";
import Button from "./Button";

function MainHome() {
  return (
    <div>
      <div className="w-full h-24 bg-black"></div>
      <div className="flex justify-center items-center w-full h-auto mt-[10vh] ">
        <MainText />
      </div>
      <div className="flex justify-center items-center mt-[10vh] space-x-10 ">
        <Button title="Download Resume" type="fill" />
        <Button title="View Projects" type="outlined" />
      </div>
    </div>
  );
}

export default MainHome;
