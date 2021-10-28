import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import ProgressCircle from "../ProgressCircle";
import ProgressDropdown from "../../ProgressDropdown";

function Progress({ step, title }) {
  return (
    <div styleName="container">
      <div styleName="left-side">
        <p styleName="step">
          Step {step + 1} <span styleName="light">/ 5</span>
        </p>
        <p>{title}</p>
      </div>
      <div styleName="circle">
        <ProgressCircle step={0} />
      </div>
      <ProgressDropdown />
    </div>
  );
}

Progress.propTypes = {};

export default Progress;
