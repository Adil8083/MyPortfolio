import React from "react";
import MainText from "./MainText";
import Button from "./Button";

function MainHome() {
  return (
    <div className="h-auto">
      <div className="mb-10 mt-10 md:mb-28 md:mt-28">
        <MainText />
        <div className="mt-9 flex justify-center space-x-5">
          <Button title="Download Resume" type="fill" />
          <Button title="View Projects" type="outlined" />
        </div>
      </div>
    </div>
  );
}

export default MainHome;
