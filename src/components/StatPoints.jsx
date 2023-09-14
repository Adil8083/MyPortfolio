import React from "react";

function StatPoints({ skill, percentage }) {
  return (
    <div className="lg:w-[50%] w-[80%] flex justify-between items-center gap-x-20">
      <div className="w-full h-[3rem] flex flex-col items-start justify-center">
        <p className="font-mono  md:text-2xl text-lg text-gray-300 pb-1">
          {skill}
        </p>
        <div class="w-full h-1 bg-neutral-200 dark:bg-neutral-600 rounded animate-fade-right animate-duration-[500ms] animate-ease-in">
          <div
            class={`h-1 bg-yellow rounded ${
              "w-[" + percentage + "%]"
            }  animate-fade-right animate-duration-[500ms] animate-ease-in`}
          ></div>
        </div>
      </div>
      <p className="font-mono md:text-2xl text-lg text-gray-300 pt-5">
        {percentage}%
      </p>
    </div>
  );
}

export default StatPoints;
