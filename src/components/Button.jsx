import React from "react";

function Button({ title, type }) {
  return (
    <>
      {type === "fill" ? (
        <div className="px-[45px] py-[15px] bg-gradient-to-b from-purple to-[#6130af] rounded-[50px] self-stretch text-[13px] font-[700] text-center tracking-[1px] cursor-pointer hover:from-black hover:to-black ">
          {title}
        </div>
      ) : type === "outlined" ? (
        <div className="px-[45px] py-[15px] bg-transparent border-2 rounded-[50px] self-stretch text-[13px] font-[700] text-center tracking-[1px] cursor-pointer hover:bg-white hover:text-black ">
          {title}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Button;
