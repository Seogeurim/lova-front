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
      currentIndex: null,
      isLoading: true,
      checkRef: true
    };
  }

  componentWillMount() {
    this.handlePostReference();
  }

  render() {
    const { target, reference } = this.props;
    const { selectedToken, currentIndex, isLoading } = this.state;
    console.log("currentIndex : ", this.state.currentIndex);
    return (
      <div className="checkingBox">
        {target.map((data, index) => {
          return (
            <div>
              <div
                key={index}
                className={cx("checkingBox__target", {
                  "checkingBox__target-active":
                    selectedToken.indexOf(target.indexOf(data)) !== -1
                })}
                onClick={() => this.handleTargetClick(data, index)}
              >
                {data}
              </div>
              {selectedToken.indexOf(index) !== -1 ? ( // selectedToken 이 새로 선택된 것일 때
                isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <ul>
                    {reference.map(data =>
                      data.targetId === currentIndex
                        ? data.urls.map((data, index) => {
                            return (
                              <li key={index}>
                                <a href={data} target="_sub">
                                  {data}
                                </a>
                              </li>
                            );
                          })
                        : null
                    )}
                  </ul>
                )
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  handleTargetClick = (param, index) => {
    const { selectedToken } = this.state;
    const { target } = this.props;
    this.setState({ currentIndex: index });
    if (selectedToken.indexOf(target.indexOf(param)) !== -1) {
      // 클릭한 target이 selectedToken 안에 있으면
      this.setState({
        selectedToken: selectedToken.filter(
          num => num !== target.indexOf(param)
        )
      }); // selectedToken list에서 제거
    } else {
      // 새로 클릭한 target이라면
      this.setState({
        selectedToken: selectedToken.concat(target.indexOf(param)),
        checkRef: true,
        isLoading: true
      });
      //this.handlePostReference(param);
    }
  };

  handlePostReference = () => {
    const { dispatch, target, reference } = this.props;
    target.map((data, index) => {
      const postParam = { sentence: data };
      dispatch(Action.postReference(postParam)).then(data => {
        const dataToParent = {
          targetId: index,
          urls: data.url
        };
        this.props.handleReference(dataToParent);
      });
    });
    //   const { dispatch, target, reference } = this.props;
    //   const postParam = { sentence: param };
    //   if (reference.length !== 0) {
    //     reference.map(data =>
    //       data.targetId === target.indexOf(param)
    //         ? this.setState({ checkRef: false })
    //         : null
    //     );
    //   }
    //   console.log("checkRef state : ", this.state.checkRef);
    //   if (this.state.checkRef) {
    //     dispatch(Action.postReference(postParam)).then(data => {
    //       const dataToParent = {
    //         targetId: target.indexOf(param),
    //         urls: data.url
    //       };
    //       this.props.handleReference(dataToParent);
    //     });
    //     this.setState({ isLoading: false });
    //   }
  };
}

CheckingBox.defaultProps = defaultProps;
CheckingBox.propTypes = propTypes;

export default connect(mapStateToProps)(CheckingBox);
