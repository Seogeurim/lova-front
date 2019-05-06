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
      score: 0.7243439404,
      results: [
        'In 2000, George Bierson’s "Marijuana, the Deceptive Drug", was published by the Massachusetts News.',
        "Bierson concludes that marijuana is harmful in many ways, including brain damage, damage to the reproductive system, and weakening of the immune system."
      ]
    };
  }

  componentWillMount() {
    this.handleGetEssayScore();
    this.handleGetQuotedSentence();
  }

  render() {
    const { pageType, inputText, claimText } = this.props;
    const { score, results } = this.state;
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
            <div className="submitPage__container__resultArea__logicScore">
              <div className="submitPage__container__resultArea__logicScore__scoreChart">
                <ScoreChart score={score.toFixed(3)} />
              </div>
              <div className="submitPage__container__resultArea__logicScore__scoreText">
                <p className="submitPage__container__resultArea__logicScore__scoreText-title">
                  Your Logicality Score is {(score.toFixed(3) * 100).toFixed(1)}
                  %.
                </p>
                <p className="submitPage__container__resultArea__logicScore__scoreText-helptext">
                  This score indicates that the logical level of your essay is{" "}
                  {score == 1 ? null : score > 0.9 ? null : score >
                    0.8 ? null : score > 0.7 ? (
                    <span>
                      normal. The topic sentence is well supported by the
                      premise, but there are some sentences that are not
                      relevant to your argument. I hope you'll try to improve
                      this point.
                    </span>
                  ) : score > 0.5 ? null : null}
                </p>
              </div>
            </div>
            <div className="submitPage__container__resultArea__factCheck">
              <p className="submitPage__container__resultArea__factCheck-title">
                {results.length} quoted sentence in your essay.
              </p>
              {results.map(data => {
                return (
                  <p
                    key={data}
                    className="submitPage__container__resultArea__factCheck__sentence"
                  >
                    {data}
                  </p>
                );
              })}
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

  handleGetQuotedSentence = () => {
    const { dispatch, essay_id } = this.props;
    const params = { id: essay_id };
    // dispatch(Action.getQuotedSentence(params)).then(results => {
    //   console.log("getQuotedSentence");
    //   console.log(results);
    // });
  };
}

SubmitPage.defaultProps = defaultProps;
SubmitPage.propTypes = propTypes;

export default connect(mapStateToProps)(SubmitPage);
