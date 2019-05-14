// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import * as Action from "../../ActionCreators/Action";
import { SubmitEssay, ScoreChart, CheckingBox } from "../../Components";
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
      score: null,
      results: [
        'In 2000, George Bierson’s "Marijuana, the Deceptive Drug", was published by the Massachusetts News.',
        "Bierson concludes that marijuana is harmful in many ways, including brain damage, damage to the reproductive system, and weakening of the immune system."
      ],
      reference: [
        {
          targetId: 0,
          urls: [
            "https://www.archives.gov/publications/prologue/1996/fall/butow.html",
            "https://www.dailymail.co.uk/news/article-2237316/I-saw-John-Doe-Duffle-Bags-Flower-shop-seller-came-face-face-serial-killer-charged-murders.html",
            "http://s3-us-west-2.amazonaws.com/courses-images-archive-read-only/wp-content/uploads/sites/197/2016/02/20082314/Quotations-The-Writing-Center.pdf",
            "https://history.army.mil/html/books/030/30-15-1/CMH_Pub_30-15-1.pdf",
            "https://mafiadoc.com/fast-food-nation_5987e64d1723ddd069fb036d.html"
          ]
        },
        {
          targetId: 1,
          urls: [
            "https://www.npmjs.com/package/react-thumbnail",
            "https://www.facebook.com/",
            "https://www.naver.com/"
          ]
        }
      ]
    };
  }

  componentWillMount() {
    this.handleGetEssayScore();
    this.handleGetQuotedSentence();
    this.handleGetReference();
  }

  componentDidMount() {}

  render() {
    const { pageType, inputText, claimText } = this.props;
    const { score, results, reference } = this.state;
    return (
      <div className="submitPage">
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
            {score ? (
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
                    {score === 1 ? null : score > 0.9 ? null : score >
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
            ) : null}
            {/* <-- loading */}
            <div className="submitPage__container__resultArea__factCheck">
              <p className="submitPage__container__resultArea__factCheck-title">
                {results.length} quoted sentence in your essay.
              </p>
              <CheckingBox target={results} reference={reference} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleGetEssayScore = () => {
    const { dispatch, essay_id } = this.props;
    const params = { id: essay_id };
    dispatch(Action.getEssayScore(params)).then(score => {
      console.log(score);
      this.setState({ score: score });
    });
  };

  handleGetQuotedSentence = () => {
    const { dispatch, essay_id } = this.props;
    const params = { id: essay_id };
    dispatch(Action.getQuotedSentence(params)).then(results => {
      console.log("getQuotedSentence");
      console.log(results);
      //this.setState({ results: results });
    });
  };

  handleGetReference = () => {
    const { dispatch } = this.props;
    const { results, reference } = this.state;
    results.map(data => {
      const param = { token: data };
      dispatch(Action.getReference(param)).then(urls => {
        console.log("Reference");
        console.log(urls);
        // this.setState({
        //   reference: reference.concat({
        //     targetId: results.indexOf(data),
        //     urls: urls
        //   })
        // });
      });
    });
  };

  handleResults = param => {
    this.setState({ results: this.state.results.concat(param) });
    this.handleGetReference();
  };
}

SubmitPage.defaultProps = defaultProps;
SubmitPage.propTypes = propTypes;

export default connect(mapStateToProps)(SubmitPage);
