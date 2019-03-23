// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import cx from "classnames";

const defaultProps = {};
const propTypes = {};

class SubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedToken: ""
    };
  }

  render() {
    console.log(this.state.selectedToken);
    const { inputText } = this.props;
    const { selectedToken } = this.state;
    return (
      <div className="submitPage">
        <div className="submitPage__output">
          <div className="submitPage__output__textArea">
            {inputText.map(data => {
              return (
                <span
                  key={data.range[0]}
                  className={cx("submitPage__output__textArea__token", {
                    "submitPage__output__textArea__token-active":
                      selectedToken === data.range[0]
                  })}
                  onClick={() => this.handleClick(data.range[0])}
                >
                  {data.type === "WhiteSpace" ? (
                    data.raw.indexOf("\n") !== -1 ? (
                      <br />
                    ) : (
                      " "
                    )
                  ) : (
                    data.raw
                  )}
                </span>
              );
            })}
          </div>
          <div className="submitPage__output__resultArea">
            This is Output box
          </div>
        </div>
      </div>
    );
  }

  handleClick = param => {
    this.setState({ selectedToken: param });
  };
}

SubmitPage.defaultProps = defaultProps;
SubmitPage.propTypes = propTypes;

export default SubmitPage;
