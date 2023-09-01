import React from "react";
import NavItems from "../constants/NavItems";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="w-screen h-80 bg-black">
      <div className="px-60 py-20 flex items-center justify-between h-full w-full">
        <div>
          <p className="text-white font-mono italic text-5xl">Adil</p>
          <p className="pt-6 text-[#a8a8a8] font-serif pb-6">
            Crafting digital experiences through lines of code and pixels of
            creativity.
          </p>

          {NavItems.map((item) => (
            <a href="" className="pr-7 text-[#a8a8a8] hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <div>
          <div className="space-x-4">
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
    </div>
  );
}

export default Footer;
