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
      outputArray: [
        {
          key: "0",
          token:
            "For many years, children growing up in a single parent family have been viewed as different."
        },
        {
          key: "1",
          token:
            "Being raised by only one parent seems impossible to many yet over the decades it has become more prevalent."
        },
        {
          key: "2",
          token:
            "In today's society many children have grown up to become emotionally stable and successful whether they had one or two parents to show them the rocky path that life bestows upon all human beings."
        }
      ],
      selectedToken: ""
    };
  }

  render() {
    console.log(this.state.outputArray);
    console.log(this.state.selectedToken);
    const { inputText } = this.props;
    const { outputArray, selectedToken } = this.state;
    return (
      <div className="submitPage">
        <div className="submitPage__output">
          <div className="submitPage__output__textArea">
            {outputArray.map(data => {
              return (
                <span
                  key={data.key}
                  className={cx("submitPage__output__textArea__token", {
                    "submitPage__output__textArea__token-active":
                      selectedToken === data.key
                  })}
                  onClick={() => this.handleClick(data.key)}
                >
                  {data.token}{" "}
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
