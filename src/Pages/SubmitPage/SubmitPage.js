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
      ],
      url: [
        "https://www.archives.gov/publications/prologue/1996/fall/butow.html",
        "https://www.dailymail.co.uk/news/article-2237316/I-saw-John-Doe-Duffle-Bags-Flower-shop-seller-came-face-face-serial-killer-charged-murders.html",
        "http://s3-us-west-2.amazonaws.com/courses-images-archive-read-only/wp-content/uploads/sites/197/2016/02/20082314/Quotations-The-Writing-Center.pdf",
        "https://history.army.mil/html/books/030/30-15-1/CMH_Pub_30-15-1.pdf",
        "https://mafiadoc.com/fast-food-nation_5987e64d1723ddd069fb036d.html"
      ]
    };
  }

  componentWillMount() {
    this.handleGetEssayScore();
    this.handleGetQuotedSentence();
  }

  render() {
    const { pageType, inputText, claimText } = this.props;
    const { score, results, url } = this.state;
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
                  <div
                    key={data}
                    className="submitPage__container__resultArea__factCheck__sentence"
                    onClick={() => this.handleGetReference(data)}
                  >
                    {data}
                    <ul>
                      {url.map(data => {
                        return (
                          <li key={data}>
                            <a href={data} target="_sub">{data}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
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

  handleGetReference = param => {
    const { dispatch } = this.props;
    const params = { token: param };
    // dispatch(Action.getReference(params)).then(urls => {
    //   console.log("Reference");
    //   console.log(urls);
    // });
  };
}

SubmitPage.defaultProps = defaultProps;
SubmitPage.propTypes = propTypes;

export default connect(mapStateToProps)(SubmitPage);
