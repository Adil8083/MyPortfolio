import React from "react";
import MainHome from "../components/MainHome";
import Brands from "../components/Brands";
import Bio from "../components/Bio";
import FeaturCards from "../components/FeaturCards";

import Research from "../assets/research.svg";
import TestingSvg from "../assets/test.svg";
import Debug from "../assets/debug.svg";
import ReachOut from "../components/ReachOut";

function Home() {
  return (
    <>
      <MainHome />
      <Brands />
      <Bio />
      <div className="flex items-center justify-center bg-black py-32">
        <div className="max-w-[80dvw] flex justify-center items-center gap-x-4 flex-wrap gap-y-5">
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
              "Unraveling the digital labyrinth, one line of code at a time."
            }
          />
        </div>
      </div>
      <ReachOut />
    </>
  );
}

export default Home;
