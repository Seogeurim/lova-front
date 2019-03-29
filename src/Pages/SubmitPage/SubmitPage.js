// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import cx from "classnames";
import * as Action from "../../ActionCreators/Action";
import { connect } from "react-redux";

const defaultProps = {};
const propTypes = {};

const mapStateToProps = state => {
  return {
    actionResult: state.reducer.actionResult
  };
};

class SubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedToken: "",
      token: "",
      score: ""
    };
  }

  componentWillMount() {
    this.handleGetEssayScore();
  }

  render() {
    console.log(this.state.selectedToken);
    const { inputType, inputText, claimText, essay_id } = this.props;
    const { selectedToken } = this.state;
    return (
      <div className="submitPage">
        <div className="submitPage__output">
          <div className="submitPage__output__textArea">
            {inputType === "thematic" ? (
              <p>
                {claimText.map(data => {
                  return (
                    <span
                      key={"claim-" + data.range[0]}
                      className={cx("submitPage__output__textArea__token", {
                        "submitPage__output__textArea__token-active":
                          selectedToken === "claim-" + data.range[0]
                      })}
                      onClick={() => this.handleClick("claim-" + data.range[0])}
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
            {this.state.score}
          </div>
        </div>
      </div>
    );
  }

  handleClick = param => {
    this.setState({ selectedToken: param });
  };

  handleGetEssayScore = () => {
    const { dispatch, essay_id } = this.props;
    const params = { id: essay_id };
    dispatch(Action.getEssayScore(params)).then(score => {
      console.log("score");
      console.log(score);
      this.setState({ score: score });
    });
  };
}

SubmitPage.defaultProps = defaultProps;
SubmitPage.propTypes = propTypes;

export default connect(mapStateToProps)(SubmitPage);
