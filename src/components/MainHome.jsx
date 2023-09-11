import React from "react";
import MainText from "./MainText";
import Button from "./Button";

function MainHome() {
  return (
    <div className="h-auto">
      <div className="h-24 bg-black"></div>
      <div className="md:mt-28 md:mb-28 mt-10 mb-10">
        <MainText />
        <div className="flex justify-center mt-9 space-x-5">
          <Button title="Download Resume" type="fill" />
          <Button title="View Projects" type="outlined" />
        </div>
      </div>
    </div>
  );
}

export default MainHome;
