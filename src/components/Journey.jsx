import React from "react";
import {
  Stepper,
  Step,
  Box,
  StepLabel,
  Typography,
  StepContent,
  // Button,
  Paper,
  styled,
} from "@mui/material";
import Education from "../constants/Educatiion";
import Expericne from "../constants/Experience";
import Button from "../components/Button";
function Journey({ content }) {
  let dataContent = [];
  if (content === "education") {
    dataContent = Education;
  } else {
    dataContent = Expericne;
  }

  return (
    <>
      <ol className="dark:border-white-700 relative border-l border-gray-200">
        {dataContent.map((items) => (
          <li className="mb-10 ml-4" key={items.title}>
            <div className="dark:bg-white-700 absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-300 dark:text-gray-300">
              {items.from}
              {" - "}
              {items.to}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {items.title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
              {items.institute}, {items.country}
            </p>
            {items.projects && (
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                Products: {items.projects}
              </p>
            )}

            {(items.detail || items.project) && (
              <a
                className="transititext-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 cursor-pointer text-sm text-gray-300 underline transition duration-150 ease-in-out hover:text-white"
                data-te-toggle="tooltip"
                title="Expand Details"
              >
                Read More
              </a>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Journey;
