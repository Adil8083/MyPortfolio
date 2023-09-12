import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function MainText() {
  const [isCvisible, setIsCVisible] = useState(true);
  const [isMvisible, setIsMVisible] = useState(false);
  const [isDvisible, setIsDVisible] = useState(false);
  const [loopState, setLoopState] = useState(true);
  const clickMenu = useSelector((state) => state.navClick.value);
  const delayText = async () => {
    if (loopState) {
      setLoopState(false);
    } else {
      setLoopState(true);
    }
    if (isCvisible && !isMvisible && !isDvisible) {
      setIsCVisible(false);
      setIsMVisible(true);
    } else if (!isCvisible && isMvisible && !isDvisible) {
      setIsMVisible(false);
      setIsDVisible(true);
    } else if (!isCvisible && !isMvisible && isDvisible) {
      setIsCVisible(true);
      setIsDVisible(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      delayText();
    }, 2000);
  }, [loopState]);

  const AnimateText = () => (
    <>
      {isCvisible ? (
        <p className="font-bold font-serif md:text-7xl text-3xl text-center animate-fade-down animate-duration-[2000ms] md:w-[10rem] text-purple">
          create
        </p>
      ) : (
        <></>
      )}
      {isMvisible ? (
        <p className="font-bold font-serif md:text-7xl text-3xl text-center animate-fade-down animate-duration-[2000ms] md:w-[10rem] text-yellow">
          make
        </p>
      ) : (
        <></>
      )}
      {isDvisible ? (
        <p className="font-bold font-serif md:text-7xl text-3xl text-center animate-fade-down animate-duration-[2000ms] md:w-[10rem]  text-white">
          design
        </p>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <div className="">
      <div>
        <div className="flex justify-center items-center">
          <p className="font-bold font-serif md:text-7xl text-3xl text-center mr-4">
            Hi!🤘 I
          </p>
          <AnimateText />
        </div>

        <p className="font-bold font-serif md:text-7xl text-3xl text-center">
          Websites & Applications.
        </p>
      </div>
    </div>
  );
}

export default MainText;
