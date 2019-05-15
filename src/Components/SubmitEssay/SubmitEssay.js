// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from "react";
import cx from "classnames";

const defaultProps = {};
const propTypes = {};

class SubmitEssay extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedToken: "" };
  }

  render() {
    console.log(this.state.selectedToken);
    const { pageType, inputText, claimText } = this.props;
    const { selectedToken } = this.state;
    return (
      <div className="submitEssay">
        {pageType === "thematic" ? (
          <p>
            {claimText.map((data, index) => {
              return (
                <span
                  key={index}
                  className={cx("submitEssay__token", {
                    "submitEssay__token-active":
                      selectedToken === "claim-" + data.range[0]
                  })}
                  onClick={() => this.handleClaimClick(data)}
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
            <br />
            <br />
          </p>
        ) : null}
        {inputText.map((data, index) => {
          return (
            <span
              key={index}
              className={cx("submitEssay__token", {
                "submitEssay__token-active": selectedToken === data.range[0]
              })}
              onClick={() => this.handleClick(data)}
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
    );
  }

  handleClaimClick = param => {
    const { handleChangeResults } = this.props;
    this.setState({ selectedToken: "claim-" + param.range[0] });
    handleChangeResults(param.raw);
  };

  handleClick = param => {
    const { handleChangeResults } = this.props;
    this.setState({ selectedToken: param.range[0] });
    handleChangeResults(param.raw);
  };
}

SubmitEssay.defaultProps = defaultProps;
SubmitEssay.propTypes = propTypes;

export default SubmitEssay;
