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
  // const [clickMenu, setClickMenu] = useState(true);
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
      className={`flex fixed justify-between items-center w-full h-24  ${
        clickMenu ? "bg-transparentBlack" : "bg-grey"
      }`}
    >
      <div
        className="flex justify-center items-center cursor-pointer pl-10"
        onClick={() => clickedMenu()}
      >
        {clickMenu ? (
          <>
            <img className="animate-fade-right" src={HamburgerSvg} alt="SVG" />
            <p className="font-bold animate-fade-down animate-ease-in-out animate-normal animate-fill-forwards">
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
            <p className="font-bold animate-fade-up animate-ease-in-out animate-normal animate-fill-forwards">
              C L O S E
            </p>
          </>
        )}
      </div>
      <div className="flex items-center justify-center">
        <a href="" className="font-bold">
          P O R T F O L I O
        </a>
      </div>
      <div className="flex items-center space-x-4 pr-12">
        <LinkedInIcon className="hover:text-hoverText" />
        <MailIcon className="hover:text-hoverText" />
        <TwitterIcon className="hover:text-hoverText" />
      </div>
      {clickMenu ? <></> : <NavMenu />}
    </div>
  );
}

export default Header;
