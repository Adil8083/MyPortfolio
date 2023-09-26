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
        <p className="animate-fade-down text-center font-serif text-3xl font-bold text-purple animate-duration-[2000ms] md:w-[10rem] md:text-6xl">
          create
        </p>
      ) : (
        <></>
      )}
      {isMvisible ? (
        <p className="animate-fade-down text-center font-serif text-3xl font-bold text-yellow animate-duration-[2000ms] md:w-[10rem] md:text-6xl">
          make
        </p>
      ) : (
        <></>
      )}
      {isDvisible ? (
        <p className="animate-fade-down text-center font-serif text-3xl font-bold text-white animate-duration-[2000ms] md:w-[10rem]  md:text-6xl">
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
        <div className="flex items-center justify-center">
          <p className="mr-4 text-center font-serif text-3xl font-bold md:text-6xl">
            Hi!🤘 I
          </p>
          <AnimateText />
        </div>

        <p className="text-center font-serif text-3xl font-bold md:text-6xl">
          Websites & Applications
        </p>
      </div>
    </div>
  );
}

export default MainText;
