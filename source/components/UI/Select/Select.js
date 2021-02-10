import React from "react";

import "./Select.scss";

const Select = (props) => {
  const htmlFor = `${props.label}-${Math.random()}`;
  return (
    <div className="select">
      <div className="select__item">
        <label htmlFor={htmlFor}>{props.label}</label>
        <select id={htmlFor} value={props.value} onChange={props.onChange}>
          {props.options.map((option, index) => {
            return (
              <option value={option.value} key={`${option.key} - ${index}`}>
                {option.text}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
