import React from "react";

function StatPoints({ skill, percentage }) {
  return (
    <div className="flex w-[80%] items-center justify-between gap-x-20 lg:w-[50%]">
      <div className="flex h-[3rem] w-full flex-col items-start justify-center">
        <p className="pb-1  font-mono text-lg text-gray-300 md:text-2xl">
          {skill}
        </p>
        <div className="h-1 w-full animate-fade-right rounded bg-neutral-200 animate-duration-[500ms] animate-ease-in dark:bg-neutral-600">
          <div
            style={{ width: percentage }}
            className={`h-1 animate-fade-right rounded bg-yellow animate-duration-[500ms] animate-ease-in`}
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
