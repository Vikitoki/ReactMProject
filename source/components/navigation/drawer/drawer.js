import React, { Component } from "react";

import "./drawer.scss";

export default class Drawer extends Component {
  constructor(props) {
    super(props);

    this.links = [1, 2, 3];
  }

  renderLinks = () => {
    return this.links.map((link, index) => {
      return (
        <li key={index}>
          <a href="#" className="drawer__link">
            {link}
          </a>
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
