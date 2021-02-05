import React, { Component } from "react";
import MenuToggle from "../../components/navigation/menu-toggle/menu-toggle";
import Drawer from "../../components/navigation/drawer/drawer";

import "./layout.scss";

export default class Layout extends Component {
  state = {
    menu: false,
  };

  onToggleMenu = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  render() {
    return (
      <>
        <Drawer isOpen={this.state.menu} />
        <MenuToggle onToggleMenu={this.onToggleMenu} isOpen={this.state.menu} />
        <div className="layout">
          <main className="layout__main">{this.props.children}</main>
        </div>
      </>
    );
  }
}
