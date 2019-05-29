// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar } from "../../Components";
import background from "../../Assets/Images/main_background.jpg";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

const defaultProps = {};
const propTypes = {};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainPage">
        <NavBar type="main" />
        <div className="mainPage__background">
          <img src={background} alt="background" />
        </div>
        <div className="mainPage__header">
          <div className="mainPage__header__title">Logic Validation</div>
          <div className="mainPage__header__describe">
            Realize automized Logicality & Reliability checking about your
            essay.
          </div>
          <div className="mainPage__header__scrollDown">
            <p>Scroll down</p>
            <KeyboardArrowDown />
          </div>
        </div>
      </div>
    );
  }
}

MainPage.defaultProps = defaultProps;
MainPage.propTypes = propTypes;

export default MainPage;
