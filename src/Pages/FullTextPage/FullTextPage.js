// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar } from "../../Components";
import { SubmitPage } from "..";
import * as Action from "../../ActionCreators/Action";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
    this.state = {
      paragraph: "",
      isSubmit: false,
      outputText: [],
      essayId: ""
    };
  }

  componentWillMount() {
    this.setState({ isSubmit: false });
  }

  render() {
    const { isSubmit, outputText, essayId } = this.state;
    return (
      <div className="fullTextPage">
        <NavBar isActive="fulltext" />
        {isSubmit ? (
          <SubmitPage inputText={outputText} essay_id={essayId} />
        ) : (
          <div className="fullTextPage__inputArea">
            <div className="fullTextPage__inputArea__container">
              <TextField
                className="fullTextPage__inputArea__container__input"
                label="Write your essay."
                rowsMax="25"
                multiline
                onChange={e => this.handleParagraph(e)}
              />
              <div className="fullTextPage__inputArea__container__submit">
                <Button
                  className="fullTextPage__inputArea__container__submit-btn"
                  variant="outlined"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
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
    const params = { paragraph: paragraph };
    if (paragraph === "") {
      alert("You must enter at least one character.");
    } else {
      this.setState({ outputText: split(paragraph) });
      dispatch(Action.postEssay(params)).then(value => {
        console.log("postEssay");
        console.log(value);
        this.setState({ essayId: value });
        this.setState({ isSubmit: true });
      });
    }
  };
}

FullTextPage.defaultProps = defaultProps;
FullTextPage.propTypes = propTypes;

export default connect(mapStateToProps)(FullTextPage);
