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
        <p className="font-bold  font-serif animate-fade-down animate-duration-[2000ms] w-[12vw] text-purple sm:text-2xl lg:text-7xl">
          create
        </p>
      ) : (
        <></>
      )}
      {isMvisible ? (
        <p className="font-bold sm:text-2xl lg:text-7xl font-serif animate-fade-down animate-duration-[2000ms] w-[12vw]  text-yellow">
          make
        </p>
      ) : (
        <></>
      )}
      {isDvisible ? (
        <p className="font-bold sm:text-2xl lg:text-7xl font-serif animate-fade-down animate-duration-[2000ms] w-[12vw]  text-white">
          design
        </p>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <div className="flex flex-col justify-center items-center space-y-8">
      <div className="flex justify-center items-center">
        <p className="flex font-bold font-serif pr-6 sm:text-2xl lg:text-7xl">
          Hi!🤘 I
        </p>
        {clickMenu ? <AnimateText /> : <></>}
      </div>
      <p className="font-bold font-serif sm:text-2xl lg:text-7xl">
        websites & applications.
      </p>
    </div>
  );
}

export default MainText;
