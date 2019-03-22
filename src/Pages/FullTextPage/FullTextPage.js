// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar } from "../../Components";
import Textarea from "react-textarea-autosize";
import { SubmitPage } from "..";

const defaultProps = {};
const propTypes = {};

class FullTextPage extends Component {
  constructor(props) {
    super(props);
    this.state = { paragraph: "", isSubmit: false };
  }

  render() {
    const { paragraph, isSubmit } = this.state;
    return (
      <div>
        <NavBar isActive="fulltext" />
        {isSubmit ? (
          <SubmitPage inputText={paragraph} />
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
    this.setState({ isSubmit: true });
  };
}

FullTextPage.defaultProps = defaultProps;
FullTextPage.propTypes = propTypes;

export default FullTextPage;
