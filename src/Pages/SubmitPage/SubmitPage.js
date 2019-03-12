// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar } from "../../Components";

const defaultProps = {};
const propTypes = {};

class SubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        This is Submit Page
      </div>
    );
  }
}

SubmitPage.defaultProps = defaultProps;
SubmitPage.propTypes = propTypes;

export default SubmitPage;
