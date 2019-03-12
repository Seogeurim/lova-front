// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar } from "../../Components";
import Textarea from "react-textarea-autosize";

const defaultProps = {};
const propTypes = {};

class ThematicPage extends Component {
  constructor(props) {
    super(props);
    this.state = { claim: "", premise: "" };
  }

  render() {
    return (
      <div>
        <NavBar isActive="thematic" />
        <div className="inputArea">
          <div className="inputArea__container">
            <div className="inputArea__container__head">
              <p className="inputArea__container__title">
                Write the <span>Main Claim Sentence</span> of your essay.
              </p>
              <Textarea
                className="inputArea__container__input"
                maxRows={4}
                onChange={e => this.handleClaim(e)}
              />
            </div>
            <div className="inputArea__container__body">
              <p className="inputArea__container__title">
                Write the <span>Premises</span> of your essay.
              </p>
              <Textarea
                className="inputArea__container__input"
                minRows={10}
                maxRows={20}
                onChange={e => this.handlePremise(e)}
              />
            </div>
            <div className="inputArea__container__footer">
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleClaim = e => {
    this.setState({ claim: e.target.value });
  };

  handlePremise = e => {
    this.setState({ premise: e.target.value });
  };

  handleSubmit = e => {};
}

ThematicPage.defaultProps = defaultProps;
ThematicPage.propTypes = propTypes;

export default ThematicPage;