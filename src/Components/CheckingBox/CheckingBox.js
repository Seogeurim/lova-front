// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from "react";
import cx from "classnames";

const defaultProps = {};
const propTypes = {};

class CheckingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedToken: []
    };
  }

  render() {
    console.log(this.state.selectedToken);
    console.log(this.props.reference);
    const { target, reference } = this.props;
    const { selectedToken } = this.state;
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
                onClick={() => this.handleTargetClick(data)}
              >
                {data}
              </div>
              {selectedToken.indexOf(index) !== -1 ? (
                <ul>
                  {reference[index].urls.map((data, index) => {
                    return (
                      <li key={index}>
                        <a href={data} target="_sub">
                          {data}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  handleTargetClick = param => {
    const { selectedToken } = this.state;
    const { target } = this.props;
    if (selectedToken.indexOf(target.indexOf(param)) !== -1) {
      this.setState({
        selectedToken: selectedToken.filter(
          num => num !== target.indexOf(param)
        )
      });
    } else {
      this.setState({
        selectedToken: selectedToken.concat(target.indexOf(param))
      });
      this.props.handleGetReference(param);
    }
  };
}

CheckingBox.defaultProps = defaultProps;
CheckingBox.propTypes = propTypes;

export default CheckingBox;
