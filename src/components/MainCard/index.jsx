import React from "react";
import PT from "prop-types";
import Header from "../Header";

import "./styles.scss";

function MainCard() {
  return (
    <div styleName="container">
      <div styleName="card">
        <Header step={0} />
      </div>
    </div>
  );
}

MainCard.propTypes = {};

export default MainCard;
