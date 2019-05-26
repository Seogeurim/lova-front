// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

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

class CheckingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedToken: [],
      checked: [],
      isChecking: []
    };
  }

  render() {
    const { target, reference } = this.props;
    const { selectedToken, isChecking } = this.state;
    return (
      <div className="checkingBox">
        {target.map((data, index) => {
          const currentIndex = index;
          return (
            <div>
              <div
                key={index}
                className={cx("checkingBox__target", {
                  "checkingBox__target-active":
                    selectedToken.indexOf(index) !== -1
                })}
                onClick={() => this.handleTargetClick(data, index)}
              >
                {data}
              </div>
              {selectedToken.indexOf(index) !== -1 ? (
                isChecking.indexOf(index) !== -1 ? (
                  <div>Loading...</div>
                ) : (
                  reference.map((data, index) =>
                    data.targetId === currentIndex ? (
                      <ul>
                        {data.refData.map((data, index) => {
                          return (
                            <li key={index}>
                              <a href={data} target="_sub">
                                {data}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null
                  )
                )
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  handleTargetClick = (data, index) => {
    const { selectedToken, checked } = this.state;
    if (selectedToken.indexOf(index) !== -1) {
      // 클릭한 target이 selectedToken 안에 있으면
      this.setState({
        selectedToken: selectedToken.filter(num => num !== index)
      }); // selectedToken list에서 제거
    } else {
      // 새로 클릭한 target이라면
      this.setState({ selectedToken: selectedToken.concat(index) });
      if (checked.indexOf(index) === -1) {
        // check 한게 아니라면 reference 받아와야함
        this.setState({
          checked: checked.concat(index),
          isChecking: this.state.isChecking.concat(index)
        });
        this.handlePostReference(data, index);
      }
    }
  };

  handlePostReference = (data, index) => {
    const { dispatch } = this.props;
    const params = { sentence: data.replace("’", "'") };
    dispatch(Action.postReference(params)).then(result => {
      console.log("postReference result : ", result);
      const dataToSubmitPage = {
        targetId: index,
        refData: result.url
      };
      this.props.handleReference(dataToSubmitPage);
      this.setState({
        isChecking: this.state.isChecking.filter(num => num !== index)
      });
    });
  };
}

CheckingBox.defaultProps = defaultProps;
CheckingBox.propTypes = propTypes;

export default connect(mapStateToProps)(CheckingBox);
