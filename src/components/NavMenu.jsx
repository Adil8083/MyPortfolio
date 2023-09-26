import React from "react";
import NavItems from "../constants/NavItems";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleClick } from "../features/navClick";

function NavMenu() {
  const dispatch = useDispatch();
  return (
    <div className="fixed inset-0 bottom-0 top-24 z-10 h-[100dvh] w-[100dvw] animate-fade bg-grey">
      <div className="flex h-3/4 flex-col items-center justify-center">
        {NavItems.map((item) => (
          <NavLink
            key={item}
            className="animate-fade-up cursor-pointer pb-10 text-4xl font-bold hover:animate-wiggle hover:text-hoverText"
            to={"/" + `${item === "Home" ? "" : item.toLowerCase()}`}
            onClick={() => dispatch(toggleClick(false))}
          >
            {item}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold ">L O C A T I O N</p>
        <p>Lahore, Pakistan</p>
      </div>
    </div>
  );
}

export default NavMenu;
