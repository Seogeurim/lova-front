// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from "react";
import cx from "classnames";
import * as Action from "../../ActionCreators/Action";
import { connect } from "react-redux";
import ContentLoader from "react-content-loader";

const defaultProps = {};
const propTypes = {};

const mapStateToProps = state => {
  return {
    actionResult: state.reducer.actionResult
  };
};

const RefLoader = props => (
  <div className="checkingBox__content-loader">
    <ContentLoader
      height={90}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <circle cx="35" cy="15" r="4" />
      <rect x="55" y="10" rx="5" ry="5" width="300" height="8" />
      <circle cx="35" cy="35" r="4" />
      <rect x="55" y="30" rx="5" ry="5" width="300" height="8" />
      <circle cx="35" cy="55" r="4" />
      <rect x="55" y="50" rx="5" ry="5" width="300" height="8" />
      <circle cx="35" cy="75" r="4" />
      <rect x="55" y="70" rx="5" ry="5" width="300" height="8" />
    </ContentLoader>
  </div>
);

class CheckingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedToken: [],
      checked: [],
      isChecking: []
    };
  }

  // componentDidUpdate(previousProps, previousState) {
  //   if (previousProps.target !== this.props.target) {
  //     window.scrollBy(0, 1);
  //     console.log("update");
  //   }
  // }

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
                  <div className="checkingBox__content">
                    <RefLoader />
                  </div>
                ) : (
                  reference.map((data, index) =>
                    data.targetId === currentIndex ? (
                      data.refData === null || data.refData === [] ? (
                        <div className="checkingBox__content__zero">
                          No results found.
                        </div>
                      ) : (
                        <ul className="checkingBox__content__urls">
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
                      )
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
    const params = {
      sentence: data.replace(/’|“|”/g, "'")
    };
    dispatch(Action.postReference(params)).then(result => {
      console.log("postReference result : ", result);
      const dataToSubmitPage = {
        targetId: index,
        refData: result !== undefined ? result.url : null
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
