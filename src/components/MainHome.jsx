import React from "react";
import MainText from "./MainText";
import Button from "./Button";
import MyResume from "../assets/M_Adil_CV.pdf";
import { useNavigate } from "react-router-dom";

function MainHome() {
  const navigate = useNavigate();
  const downloadResume = () => {
    const link = document.createElement("a");
    link.download = "ADIL-CV-PDF-File";

    link.href = MyResume;

    link.click();
  };
  return (
    <div className="h-auto">
      <div className="mb-10 mt-10 md:mb-28 md:mt-28">
        <MainText />
        <div className="mt-9 flex justify-center space-x-5">
          <Button
            title="Download Resume"
            type="fill"
            onClick={downloadResume}
          />
          <Button
            title="View Projects"
            type="outlined"
            onClick={() => navigate("/project")}
          />
        </div>
      </div>
    </div>
  );
}

export default MainHome;
