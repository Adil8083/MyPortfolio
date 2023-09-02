import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
function Error404() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center flex-col ">
      <p>Error Page Not Found</p>
      <div className="w-[10vw] pt-[2vh]">
        <Button
          title="Go Back Home"
          type="fill"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}

export default Error404;
