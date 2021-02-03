import React, { Component } from "react";
import "./layout.scss";

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <main className="layout__main">{this.props.children}</main>
      </div>
    );
  }
}
