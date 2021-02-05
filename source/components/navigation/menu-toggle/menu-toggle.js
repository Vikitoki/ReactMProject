import React from "react";

import "./menu-toggle.scss";

const MenuToggle = (props) => {
  const cls = ["burger-menu"];

  if (props.isOpen) {
    cls.push(" open");
  }

  return (
    <div onClick={props.onToggleMenu} className={cls.join("")}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuToggle;
