import React from "react";
import PropTypes from "prop-types";
import Icon3Dots from "../assets/icons/icon-3dots.svg";
import "./styles.scss";

function ProgressDropdown() {
  return (
    <button styleName="button">
      <Icon3Dots />
    </button>
  );
}

ProgressDropdown.propTypes = {};

export default ProgressDropdown;
