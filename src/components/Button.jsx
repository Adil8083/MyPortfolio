import React from "react";

function Button({ title, type }) {
  // console.log(type === "outlined");
  const CustomBtn = () => {
    if (type === "fill") {
      return (
        <div
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1w_Ik7YWR_oGa6KDsKUCvdqTRpiRZHFNv/view?usp=drive_link"
            )
          }
          className="px-[3%] py-[0.8%] bg-gradient-to-b from-purple to-[#6130af] rounded-[50px] self-stretch text-[13px] font-[700] text-center  tracking-[1px] cursor-pointer hover:from-black hover:to-black "
        >
          {title}
        </div>
      );
    } else if (type === "outlined") {
      return (
        <div className="px-[3%] py-[0.8%] bg-transparent border-2 rounded-[50px] self-stretch text-[13px] font-[700] text-center tracking-[1px] cursor-pointer hover:bg-white hover:text-black ">
          {title}
        </div>
      );
    }
  };
  return (
    <>
      <CustomBtn />
    </>
  );
}

export default Button;
