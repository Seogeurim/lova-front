// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import * as Action from "../../ActionCreators/Action";
import { SubmitEssay, ScoreChart, CheckingBox } from "../../Components";
import { connect } from "react-redux";
import { BarLoader } from "react-spinners";

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
      score: null,
      results: [],
      reference: [],
      isGetResult: false
    };
  }

  componentWillMount() {
    this.handleGetEssayScore();
    this.handleGetQuotedSentence();
  }

  render() {
    const { pageType, inputText, claimText } = this.props;
    const { score, results, reference, isGetResult } = this.state;
    console.log("reference : ", reference);
    return (
      <div className="submitPage">
        {!(score !== null && isGetResult) ? (
          <div className="submitPage__loading">
            <p className="submitPage__loading__helptext">
              Please wait for <br />
              the <span>Logic Validation</span> of your essay <br />
              to be completed.
            </p>
            <div className="submitPage__loading__loader">
              <BarLoader sizeUnit={"px"} width={350} color={"#3F51B5"} />
            </div>
          </div>
        ) : (
          <div className="submitPage__container">
            <div className="submitPage__container__essayArea">
              <SubmitEssay
                pageType={pageType}
                inputText={inputText}
                claimText={claimText}
                handleChangeResults={this.handleResults}
              />
            </div>

            <div className="submitPage__container__resultArea">
              <div className="submitPage__container__resultArea__logicScore">
                <div className="submitPage__container__resultArea__logicScore__scoreChart">
                  <ScoreChart score={score} />
                </div>
                <div className="submitPage__container__resultArea__logicScore__scoreText">
                  <p className="submitPage__container__resultArea__logicScore__scoreText-title">
                    Your Logicality Score is {score.toFixed(1)}
                    %.
                  </p>
                  <p className="submitPage__container__resultArea__logicScore__scoreText-helptext">
                    This score indicates that the logical level of your essay is{" "}
                    {score === 100 ? (
                      <span>
                        perfect. The topic sentence clearly shows your argument,
                        and the sentence that supports it also appears to be
                        explaining the subject very well. I hope you will
                        continue to write a good essay.
                      </span>
                    ) : score > 85 ? (
                      <span>
                        good. The topic sentence is well supported by the
                        premise, but there are some sentences that are not
                        relevant to your argument. I hope you'll try to improve
                        this point.
                      </span>
                    ) : score > 70 ? (
                      <span>
                        normal. The overall writing looks good, but there are
                        some sentences that don't fit the flow of this essay.
                        This makes it difficult to get the gist of the writing.
                        I hope you'll rewrite this part.
                      </span>
                    ) : score > 50 ? (
                      <span>
                        not so good. The sentences in the essay are not
                        organically linked to each other. Because of that, It
                        doesn't seem clear what you're trying to argue. So I
                        hope you'll rewrite it according to your argument.
                      </span>
                    ) : (
                      <span>
                        poor. Not only the argument is unclear in this essay,
                        but the sentences supporting the argument are also not
                        logical. We hope to establish a clear argument and find
                        a basis for it again.
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="submitPage__container__resultArea__factCheck">
                <p className="submitPage__container__resultArea__factCheck-title">
                  {results.length} quoted sentence in your essay.
                </p>
                <CheckingBox
                  target={results}
                  reference={reference}
                  handleReference={this.handleReference}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  handleGetEssayScore = () => {
    const { dispatch, essay_id } = this.props;
    const params = { id: essay_id };
    dispatch(Action.getEssayScore(params)).then(score => {
      console.log(score);
      if (score >= 100) {
        this.setState({ score: 100 });
      } else if (score < 0) {
        this.setState({ score: 0 });
      } else {
        this.setState({ score: score });
      }
    });
  };

  handleGetQuotedSentence = () => {
    const { dispatch, essay_id } = this.props;
    const params = { id: essay_id };
    dispatch(Action.getQuotedSentence(params)).then(results => {
      console.log("getQuotedSentence");
      console.log(results);
      this.setState({ results: results, isGetResult: true });
    });
  };

  handleResults = param => {
    const { results } = this.state;
    if (results.indexOf(param) === -1) {
      this.setState({ results: results.concat(param) });
    }
  };

  handleReference = dataFromCheckingBox => {
    const { reference } = this.state;
    this.setState({ reference: reference.concat(dataFromCheckingBox) });
  };
}

SubmitPage.defaultProps = defaultProps;
SubmitPage.propTypes = propTypes;

export default connect(mapStateToProps)(SubmitPage);
