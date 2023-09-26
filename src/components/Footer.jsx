import React from "react";
import NavItems from "../constants/NavItems";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="block h-auto w-[100dvw] items-center justify-between bg-black p-10 md:flex md:p-28 md:px-48">
      <div>
        <p className="font-mono text-3xl italic text-white md:text-5xl">Adil</p>
        <p className="mb-6 mt-6 font-serif text-[#a8a8a8]">
          Crafting digital experiences through lines of code and pixels of
          creativity.
        </p>
        <div className="mb-6 space-x-5 md:mb-0">
          {NavItems.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : item}
              className="space-x-2 text-[#a8a8a8] hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-4">
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
        <p
          className="cursor-pointer pb-4 pt-6  text-[#a8a8a8] hover:text-white"
          onClick={() => (window.location = "mailto:adilwahed@gmail.com")}
        >
          adilwahed@gmail.com
        </p>
        <p
          className="cursor-pointer  text-[#a8a8a8] hover:text-white"
          onClick={() => {
            window.location.href = `tel:${+923074728083}`;
          }}
        >
          +92 307-4728083
        </p>
      </div>
    </div>
  );
}

export default Footer;
