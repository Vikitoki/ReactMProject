import React from "react";

import "./Button.scss";

const Button = (props) => {
  const clsButton = ["btn ", props.type];

  return (
    <button
      onClick={props.onClick}
      type="button"
      className={clsButton.join("")}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button