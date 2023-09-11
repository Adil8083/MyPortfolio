import React from "react";
import NavItems from "../constants/NavItems";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="w-[100dvw] h-auto bg-black md:flex block items-center justify-between md:p-28 p-10 md:px-48">
      <div>
        <p className="text-white font-mono italic md:text-5xl text-3xl">Adil</p>
        <p className="mt-6 text-[#a8a8a8] font-serif mb-6">
          Crafting digital experiences through lines of code and pixels of
          creativity.
        </p>
        <div className="space-x-5 md:mb-0 mb-6">
          {NavItems.map((item) => (
            <a
              key={item}
              href=""
              className="text-[#a8a8a8] hover:text-white space-x-2"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div>
        <div className="space-x-4 flex items-center">
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
        <p
          className="text-[#a8a8a8] pt-6 pb-4  hover:text-white cursor-pointer"
          onClick={() => (window.location = "mailto:adilwahed@gmail.com")}
        >
          adilwahed@gmail.com
        </p>
        <p
          className="text-[#a8a8a8]  hover:text-white cursor-pointer"
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
