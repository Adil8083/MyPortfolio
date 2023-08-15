import React from "react";
import MainHome from "../components/MainHome";
import Brands from "../components/Brands";
import Bio from "../components/Bio";
import FeaturCards from "../components/FeaturCards";

function Home() {
  return (
    <div>
      <MainHome />
      <Brands />
      <Bio />
      <div className="bg-black flex justify-around items-center w-full h-auto p-10">
        <FeaturCards />
        <FeaturCards />
        <FeaturCards />
      </div>
    </div>
  );
}

export default Home;
