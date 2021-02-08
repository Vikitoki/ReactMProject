import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./drawer.scss";

export default class Drawer extends Component {
  constructor(props) {
    super(props);

    this.links = [
      { to: "/", label: "Список", exact: true },
      { to: "/auth", label: "Авторизация", exact: false },
      { to: "/quiz-creator", label: "Создать тест", exact: true },
    ];
  }

  renderLinks = () => {
    return this.links.map(({ to, label, exact }, index) => {
      return (
        <li key={index}>
          <NavLink to={to} exact={exact} activeClassName={'d-active'} className="drawer__link">
            {label}
          </NavLink>
        </li>
      );
    });
  };

  render() {
    const clsDrawer = ["drawer"];

    if (this.props.isOpen) {
      clsDrawer.push(" active");
    }

    return (
      <div className={clsDrawer.join("")}>
        <nav className="drawer__nav">
          <ul className="drawer__list">{this.renderLinks()}</ul>
        </nav>
      </div>
    );
  }
}
