import React from "react";

function Button({ title, type, onClick }) {
  // console.log(type === "outlined");
  const CustomBtn = () => {
    if (type === "fill") {
      return (
        <div
          onClick={() => onClick()}
          className="cursor-pointer self-stretch rounded-[50px] bg-gradient-to-b from-purple to-[#6130af] px-[3%] py-[0.8%] text-center text-[13px]  font-[700] tracking-[1px] hover:from-black hover:to-black "
        >
          {title}
        </div>
      );
    } else if (type === "outlined") {
      return (
        <div
          onClick={() => onClick()}
          className="cursor-pointer self-stretch rounded-[50px] border-2 bg-transparent px-[3%] py-[0.8%] text-center text-[13px] font-[700] tracking-[1px] hover:bg-white hover:text-black "
        >
          {title}
        </div>
      );
    }
  };
  return <CustomBtn />;
}

export default Button;
