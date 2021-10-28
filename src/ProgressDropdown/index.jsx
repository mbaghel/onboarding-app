import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePopper } from "react-popper";
import Icon3Dots from "../assets/icons/icon-3dots.svg";
import "./styles.scss";
import OutsideClickHandler from "react-outside-click-handler";

function ProgressDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 14],
        },
      },
    ],
  });

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <button
        ref={setReferenceElement}
        styleName="button"
        onClick={() => setIsOpen(true)}
      >
        <Icon3Dots />
      </button>
      {isOpen && (
        <div
          styleName="popover"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          This is a popper
        </div>
      )}
    </OutsideClickHandler>
  );
}

ProgressDropdown.propTypes = {};

export default ProgressDropdown;
