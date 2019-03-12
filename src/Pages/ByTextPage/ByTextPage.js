// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar } from "../../Components";
import Textarea from "react-textarea-autosize";

const defaultProps = {};
const propTypes = {};

class ByTextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="InputBox">
          <div className="textInput">
            <div className="textInput__head">
              <p>Write your Full Essay.</p>
              <Textarea className="textInput__head__input" maxRows={4} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ByTextPage.defaultProps = defaultProps;
ByTextPage.propTypes = propTypes;

export default ByTextPage;
