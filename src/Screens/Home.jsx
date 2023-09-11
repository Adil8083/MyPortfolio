import React from "react";
import MainHome from "../components/MainHome";
import Brands from "../components/Brands";
import Bio from "../components/Bio";
import FeaturCards from "../components/FeaturCards";

import Research from "../assets/research.svg";
import TestingSvg from "../assets/test.svg";
import Debug from "../assets/debug.jpg";
import ReachOut from "../components/ReachOut";

function Home() {
  return (
    <>
      <MainHome />
      <Brands />
      {/*<Bio />
      <div className="bg-black flex justify-evenly items-center w-full h-auto p-10 ">
        <FeaturCards
          logo_source={Research}
          title={"Research"}
          discrption={
            "Understand the market, define the audience, and ideate potential solutions."
          }
        />
        <FeaturCards
          logo_source={TestingSvg}
          title={"Testing"}
          discrption={
            "Establish usability, meet accessibility needs and ensure a delightful solution."
          }
        />
        <FeaturCards
          logo_source={Debug}
          title={"Debuging"}
          discrption={
            "Unraveling complexity to find the needle in the code haystack."
          }
        />
      </div>
      <ReachOut /> */}
    </>
  );
}

export default Home;
