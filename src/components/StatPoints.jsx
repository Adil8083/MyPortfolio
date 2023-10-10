import React from "react";
import { useInView } from "react-intersection-observer";
function StatPoints({ skill, percentage }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the event only once
  });
  return (
    <div
      className="flex w-[80%] items-center justify-between gap-x-20 lg:w-[50%]"
      ref={ref}
    >
      <div className="flex h-[3rem] w-full flex-col items-start justify-center">
        <p className="pb-1  font-mono text-lg text-gray-300 md:text-2xl">
          {skill}
        </p>
        <div
          className={`h-1 w-full ${
            inView
              ? "animate-fade-right animate-duration-[1000ms] animate-ease-in"
              : "animate-none"
          }  rounded bg-neutral-200  dark:bg-neutral-600`}
        >
          <div
            style={{ width: percentage }}
            className={`h-1 ${
              inView
                ? "animate-fade-right animate-duration-[1000ms] animate-ease-in"
                : "animate-none"
            } rounded bg-yellow `}
          ></div>
        </div>
      </div>
      <p className="pt-5 font-mono text-lg text-gray-300 md:text-2xl">
        {percentage}
      </p>
    </div>
  );
}

export default StatPoints;
