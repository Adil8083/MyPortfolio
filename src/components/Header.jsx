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
      className={`flex fixed z-10 inset-0 justify-between items-center w-[100dvw] h-24 px-5 ${
        clickMenu ? "bg-transparentBlack" : "bg-grey "
      }`}
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => clickedMenu()}
      >
        {clickMenu ? (
          <>
            <img className="animate-fade-right" src={HamburgerSvg} alt="SVG" />
            <p className="font-bold animate-fade-down animate-ease-in-out animate-normal animate-fill-forwards md:visible invisible">
              M E N U
            </p>
          </>
        ) : (
          <>
            <img
              className="animate-fade-left animate-ease-in-out animate-normal animate-fill-forwards"
              src={CrossSvg}
              alt="SVG"
            />
            <p className="font-bold animate-fade-up animate-ease-in-out animate-normal animate-fill-forwards md:visible invisible">
              C L O S E
            </p>
          </>
        )}
      </div>
      <a
        href="/"
        className="flex text-white font-mono font-bold italic md:text-3xl text-xl"
      >
        Adil
      </a>
      {/* <a href="/" className="flex font-bold md:text-lg text-sm">
        P O R T F O L I O
      </a> */}
      <div className="space-x-4 md:flex hidden">
        <LinkedInIcon
          className="hover:text-hoverText cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/adil-waheed48/")
          }
        />
        <TwitterIcon
          className="hover:text-hoverText cursor-pointer"
          onClick={() => window.open("https://twitter.com/Adil_Waheed887")}
        />
        <MailIcon
          className="hover:text-hoverText cursor-pointer"
          onClick={() => (window.location = "mailto:adilwahed@gmail.com")}
        />
      </div>
      {clickMenu ? <></> : <NavMenu />}
    </div>
  );
}

export default Header;
