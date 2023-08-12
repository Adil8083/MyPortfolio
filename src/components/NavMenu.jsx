import React from "react";
import NavItems from "../constants/NavItems";
function NavMenu() {
  return (
    <div className="fixed w-full h-full bg-grey top-24 bottom-0 animate-fade">
      <div className="flex flex-col justify-center items-center h-3/4">
        {NavItems.map((item) => (
          <p
            className="font-bold text-4xl pb-10 cursor-pointer animate-fade-up hover:animate-fade-right hover:text-hoverText"
            key={item}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="font-bold ">L O C A T I O N</p>
        <p>Lahore, Pakistan</p>
      </div>
    </div>
  );
}

export default NavMenu;
