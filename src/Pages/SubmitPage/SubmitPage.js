// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import * as Action from "../../ActionCreators/Action";
import { SubmitEssay, ScoreChart } from "../../Components";
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
      score: 0.7243439404
    };
  }

  componentWillMount() {
    this.handleGetEssayScore();
  }

  render() {
    const { pageType, inputText, claimText } = this.props;
    return (
      <div className="submitPage">
        <div className="submitPage__container">
          <div className="submitPage__container__essayArea">
            <SubmitEssay
              pageType={pageType}
              inputText={inputText}
              claimText={claimText}
            />
          </div>

          <div className="submitPage__container__resultArea">
            {/* {this.state.score} */}
            <div className="submitPage__container__resultArea__scoreChart">
              <ScoreChart score={this.state.score.toFixed(3)} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleGetEssayScore = () => {
    const { dispatch, essay_id } = this.props;
    const params = { id: essay_id };
    // dispatch(Action.getEssayScore(params)).then(score => {
    //   console.log("score");
    //   console.log(score);
    //   this.setState({ score: score });
    // });
  };
}

SubmitPage.defaultProps = defaultProps;
SubmitPage.propTypes = propTypes;

export default connect(mapStateToProps)(SubmitPage);
