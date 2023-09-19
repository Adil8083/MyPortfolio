import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";

function NavigateIndicator({ path }) {
  let pathArray = path.split("/");

  return (
    <div className="flex justify-center items-center bg-[#1d1d1d] rounded-full px-5 py-2">
      <Link to="/" className="text-gray-300">
        Home
      </Link>
      {pathArray.slice(1).map((item) => (
        <div
          key={item}
          className="text-gray-300 last:text-white last:font-bold last:pointer-events-none"
        >
          <ArrowRightIcon />
          <Link to={"/" + item} className="">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NavigateIndicator;
