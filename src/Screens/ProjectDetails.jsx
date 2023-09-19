import React from "react";
import { useLocation } from "react-router-dom";
import NavigateIndicator from "../components/NavigateIndicator";

function ProjectDetails() {
  let location = useLocation();
  console.log(location);

  return (
    <>
      <NavigateIndicator path={location.pathname} />
      <div>ProjectDetails</div>
    </>
  );
}

export default ProjectDetails;
