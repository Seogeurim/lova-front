// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import cx from "classnames";
import MainLogo from "../../Assets/Images/lova_main.png";

const defaultProps = {};
const propTypes = {};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isActive, type } = this.props;
    return (
      <Navbar
        className={cx("navBar", {
          "navBar-main": type === "main"
        })}
        light
        expand="md"
        fixed="top"
      >
        <NavbarBrand className="navBar__logo" onClick={this.handleHome}>
          <img src={MainLogo} width={30} alt="lova-logo" />
          <span>LOVA</span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className={cx("ml-auto", "navBar__items")} navbar>
            <NavItem>
              <NavLink
                className={cx("navBar__items__item", {
                  "navBar__items__item-active": isActive === "fulltext"
                })}
                onClick={this.handleFulltext}
              >
                FullText
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={cx("navBar__items__item", {
                  "navBar__items__item-active": isActive === "thematic"
                })}
                onClick={this.handleThematic}
              >
                Thematic
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={cx("navBar__items__item", {
                  "navBar__items__item-active": isActive === "video"
                })}
                onClick={this.handleVideo}
              >
                Video
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

  handleHome = () => {
    this.props.history.push({
      pathname: "/"
    });
  };

  handleFulltext = () => {
    this.props.history.push({
      pathname: "/fulltext/"
    });
  };

  handleThematic = () => {
    this.props.history.push({
      pathname: "/thematic/"
    });
  };

  handleVideo = () => {
    this.props.history.push({
      pathname: "/video/"
    });
  };
}

NavBar.defaultProps = defaultProps;
NavBar.propTypes = propTypes;

export default withRouter(NavBar);
