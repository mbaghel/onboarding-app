import React from "react";
import PT from "prop-types";
import { useSelector } from "react-redux";
import "./styles.scss";
import Progress from "../Progress";

const ONBOARDING_STEPS = [
  "Get Started",
  "Contact Details",
  "Payment Setup",
  "Build Your Profile",
  "Onboarding Complete!",
];

function Header({ step }) {
  const { firstName, lastName, handle } = useSelector(
    (state) => state.authUser
  );

  const title = ONBOARDING_STEPS[step];

  return (
    <div>
      <div styleName="row">
        <h1 styleName="title">{title}</h1>
        <Progress step={step} title={title} />
      </div>
      <p>
        {firstName} {lastName}&nbsp;&nbsp;|&nbsp;&nbsp;{handle}
      </p>
    </div>
  );
}

Header.propTypes = {
  step: PT.number,
};

export default Header;
