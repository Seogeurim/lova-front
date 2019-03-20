// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";

const defaultProps = {};
const propTypes = {};

class SubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { inputText } = this.props;
    return (
      <div className="submitPage">
        <div className="submitPage__output">
          <div className="submitPage__output__textArea">{inputText}</div>
          <div className="submitPage__output__resultArea">
            This is Output box
          </div>
        </div>
      </div>
    );
  }
}

SubmitPage.defaultProps = defaultProps;
SubmitPage.propTypes = propTypes;

export default SubmitPage;
