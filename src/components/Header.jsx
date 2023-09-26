import React, { useState } from "react";
import HamburgerSvg from "../assets/hamburger.svg";
import CrossSvg from "../assets/cross.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import NavMenu from "./NavMenu";
import { useSelector, useDispatch } from "react-redux";
import { toggleClick } from "../features/navClick";

function Header() {
  const dispatch = useDispatch();
  const clickMenu = useSelector((state) => state.navClick.value);

  const clickedMenu = () => {
    if (clickMenu) {
      dispatch(toggleClick(true));
    } else {
      dispatch(toggleClick(false));
    }
  };
  return (
    <div
      className={`fixed inset-0 z-10 flex h-24 w-[100dvw] items-center justify-between px-5 ${
        clickMenu ? "bg-transparentBlack" : "bg-grey "
      }`}
    >
      <div
        className="flex cursor-pointer items-center"
        onClick={() => clickedMenu()}
      >
        {clickMenu ? (
          <>
            <img className="animate-fade-right" src={HamburgerSvg} alt="SVG" />
            <p className="invisible animate-fade-down font-bold animate-normal animate-fill-forwards animate-ease-in-out md:visible">
              M E N U
            </p>
          </>
        ) : (
          <>
            <img
              className="animate-fade-left animate-normal animate-fill-forwards animate-ease-in-out"
              src={CrossSvg}
              alt="SVG"
            />
            <p className="invisible animate-fade-up font-bold animate-normal animate-fill-forwards animate-ease-in-out md:visible">
              C L O S E
            </p>
          </>
        )}
      </div>
      <a
        href="/"
        className="flex font-mono text-xl font-bold italic text-white md:text-3xl"
      >
        Adil
      </a>
      <div className="hidden space-x-4 md:flex">
        <LinkedInIcon
          className="cursor-pointer hover:text-hoverText"
          onClick={() =>
            window.open("https://www.linkedin.com/in/adil-waheed48/")
          }
        />
        <TwitterIcon
          className="cursor-pointer hover:text-hoverText"
          onClick={() => window.open("https://twitter.com/Adil_Waheed887")}
        />
        <MailIcon
          className="cursor-pointer hover:text-hoverText"
          onClick={() => (window.location = "mailto:adilwahed@gmail.com")}
        />
      </div>
      {clickMenu ? <></> : <NavMenu />}
    </div>
  );
}

export default Header;
