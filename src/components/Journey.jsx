import React from "react";
import {
  Stepper,
  Step,
  Box,
  StepLabel,
  Typography,
  StepContent,
  Button,
  Paper,
  styled,
} from "@mui/material";
import Education from "../constants/Educatiion";
import Expericne from "../constants/Experience";

function Journey({ content }) {
  let dataContent = [];
  if (content === "education") {
    dataContent = Education;
  } else {
    dataContent = Expericne;
  }
  console.log(Education);
  return (
    <>
      <ol className="dark:border-white-700 relative border-l border-gray-200">
        {dataContent.map((items) => (
          <li className="mb-10 ml-4" key={items.degree}>
            <div className="dark:bg-white-700 mt- absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-300 dark:text-gray-300">
              {items.from}
              {"-"}
              {items.to}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {items.degree}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
              {items.school}
            </p>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
              {items.country}
            </p>
            {items.detail && (
              <a
                href="#"
                className="dark:hover:bg-gay-700 inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Read more{" "}
                <svg
                  className="ml-2 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Journey;
