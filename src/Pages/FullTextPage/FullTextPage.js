// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar } from "../../Components";
import { SubmitPage } from "..";
import * as Action from "../../ActionCreators/Action";
import { connect } from "react-redux";
import Textarea from "react-textarea-autosize";
import { split } from "sentence-splitter";

const defaultProps = {};
const propTypes = {};

const mapStateToProps = state => {
  return {
    actionResult: state.reducer.actionResult
  };
};

class FullTextPage extends Component {
  constructor(props) {
    super(props);
    this.state = { paragraph: "", isSubmit: false, outputText: [], token: "" };
  }

  render() {
    const { paragraph, isSubmit, outputText, token } = this.state;
    return (
      <div>
        <NavBar isActive="fulltext" />
        {isSubmit ? (
          <SubmitPage
            inputText={outputText}
            essay={paragraph}
            essay_id={token}
          />
        ) : (
          <div className="inputArea">
            <div className="inputArea__container">
              <p className="inputArea__container__title">Write your essay.</p>
              <Textarea
                className="inputArea__container__input"
                minRows={15}
                maxRows={30}
                onChange={e => this.handleParagraph(e)}
              />
              <div className="inputArea__container__footer">
                <button onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  handleParagraph = e => {
    this.setState({ paragraph: e.target.value });
  };

  handleSubmit = e => {
    const { dispatch } = this.props;
    const { paragraph } = this.state;
    const params = { essay: paragraph };
    this.setState({ outputText: split(paragraph) });
    // dispatch(Action.postEssay(params)).then(value => {
    //   console.log(value);
    //   this.setState({ token: value });
    //   this.setState({ isSubmit: true });
    // });
    this.setState({ isSubmit: true });
  };
}

FullTextPage.defaultProps = defaultProps;
FullTextPage.propTypes = propTypes;

export default connect(mapStateToProps)(FullTextPage);
