// This Component is Skeleton of React Structure for Web Development
// If you want to make other Component, Copy and Refactor this Component.

import React, { Component } from "react";
import { Animate } from "react-move";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";

const defaultProps = {};
const propTypes = {};

class ScoreChart extends Component {
  constructor(props) {
    super(props);
    this.state = { isAnimated: false };
  }

  componentDidMount() {
    this.setState({ isAnimated: true });
  }

  render() {
    const { score } = this.props;
    const percentage = (score * 100).toFixed(1);
    return (
      <Animate
        start={() => ({
          percentage: 0
        })}
        update={() => ({
          percentage: [this.state.isAnimated ? percentage : 0],
          timing: {
            duration: 1000,
            ease: easeQuadInOut
          }
        })}
      >
        {({ percentage }) => {
          const roundedPercentage = percentage.toFixed(1);
          return (
            <div className="scoreChart">
              <CircularProgressbar
                percentage={roundedPercentage}
                text={`${roundedPercentage}%`}
                counterClockwise
              />
            </div>
          );
        }}
      </Animate>
    );
  }
}

ScoreChart.defaultProps = defaultProps;
ScoreChart.propTypes = propTypes;

export default ScoreChart;
