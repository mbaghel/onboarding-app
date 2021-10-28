import React from "react";
import PT from "prop-types";

function ProgressCircle({ step }) {
  const radius = 28;
  const circumference = radius * 2 * Math.PI;
  const pct = (1 - (step + 1) / 5) * circumference;

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r={radius} stroke="#E9E9E9" stroke-width="8" />
      <circle
        cx="32"
        cy="32"
        r={radius}
        stroke="#9D41C9"
        stroke-linecap="round"
        stroke-width="8"
        strokeDasharray={circumference}
        strokeDashoffset={pct}
        transform="rotate(-90 32 32)"
      />
    </svg>
  );
}

ProgressCircle.propTypes = {
  step: PT.number,
};

export default ProgressCircle;
