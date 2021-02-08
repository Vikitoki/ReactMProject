import React from "react";

import "./Input.scss";

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && touched && shouldValidate;
}

const Input = (props) => {
  const clsForItem = ["input__item"],
    inputType = props.type || "text",
    htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    clsForItem.push(" invalid");
  }

  return (
    <>
      <div className={clsForItem.join("")}>
        <label htmlFor={htmlFor}>{props.label}</label>
        <input
          type={inputType}
          id={htmlFor}
          defaultValue={props.value}
          onChange={props.onChange}
        ></input>
        {isInvalid(props) ? (
          <span>{props.errorMessage || "Введите значение в поле"}</span>
        ) : null}
      </div>
    </>
  );
};

export default Input;
