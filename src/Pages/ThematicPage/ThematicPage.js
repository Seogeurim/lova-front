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

class ThematicPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claim: "",
      premise: "",
      isSubmit: false,
      outputClaim: [],
      outputPremise: [],
      essayId: ""
    };
  }

  componentWillMount() {
    this.setState({ isSubmit: false });
  }

  render() {
    const { isSubmit, outputPremise, outputClaim, essayId } = this.state;
    return (
      <div className="thematicPage">
        <NavBar isActive="thematic" />
        {isSubmit ? (
          <SubmitPage
            pageType="thematic"
            inputText={outputPremise}
            claimText={outputClaim}
            essay_id={essayId}
          />
        ) : (
          <div className="thematicPage__inputArea">
            <div className="thematicPage__inputArea__container">
              <TextField
                className="thematicPage__inputArea__container__claimPart"
                label="Write the Claim Sentences of your essay."
                rowsMax="4"
                multiline
                onChange={e => this.handleClaim(e)}
              />
              <TextField
                className="thematicPage__inputArea__container__premisePart"
                label="Write the Premises for the claim sentences."
                rowsMax="20"
                multiline
                onChange={e => this.handlePremise(e)}
              />
              <div className="thematicPage__inputArea__container__submit">
                <Button
                  className="thematicPage__inputArea__container__submit-btn"
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

  handleClaim = e => {
    this.setState({ claim: e.target.value });
  };

  handlePremise = e => {
    this.setState({ premise: e.target.value });
  };

  handleSubmit = e => {
    const { dispatch } = this.props;
    const { claim, premise } = this.state;
    const paragraph = claim + " " + premise;
    const params = { paragraph: paragraph };
    if (this.state.paragraph === "") {
      alert("You must enter at least one character.");
    } else {
      this.setState({ outputClaim: split(claim) });
      this.setState({ outputPremise: split(premise) });
      dispatch(Action.postEssay(params)).then(value => {
        console.log("postEssay");
        console.log(value);
        this.setState({ essayId: value });
        this.setState({ isSubmit: true });
      });
    }
  };
}

ThematicPage.defaultProps = defaultProps;
ThematicPage.propTypes = propTypes;

export default connect(mapStateToProps)(ThematicPage);
