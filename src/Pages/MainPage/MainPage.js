// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar, ScoreChart } from "../../Components";
import cx from "classnames";
import background from "../../Assets/Images/main_background.jpg";
import fakenews from "../../Assets/Images/fakenews.jpg";
import REACTlogo from "../../Assets/Icons/reactIcon.svg";
import REDUXlogo from "../../Assets/Icons/reduxIcon.svg";
import NODEJSlogo from "../../Assets/Icons/nodejsIcon.svg";
import TSlogo from "../../Assets/Icons/tensorflow.svg";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

const defaultProps = {};
const propTypes = {};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollTop: null, isMain: true };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <div className="mainPage">
        <NavBar type={cx({ main: this.state.isMain })} />
        <div className="mainPage__background">
          <img src={background} alt="background" />
        </div>
        <div className="mainPage__header">
          <div className="mainPage__header__title">
            <div className="mainPage__header__title-head">Logic Validation</div>
            <div className="mainPage__header__title-describe">
              Realize automized Logicality & Reliability checking about your
              essay.
            </div>
          </div>

          <div className="mainPage__header__scrollDown">
            <p>Scroll down</p>
            <KeyboardArrowDown />
          </div>
        </div>

        <div className="mainPage__page1" onScroll={this.handleScroll}>
          <div className="mainPage__page1__section1">
            <div className="mainPage__page1__section1__scoreChart">
              <ScoreChart score={78.6} />
            </div>
            <div className="mainPage__page1__section1__title">
              <div className="mainPage__page1__section1__title-head">
                Great Logical Writing, <br /> now it's Easier.
              </div>
              <div className="mainPage__page1__section1__title-describe">
                You can see how well your essay supports your argument. You can
                also see how logical the article you're trying to identify is.
                This feature allows you to check the logic of your essay or
                filter out articles that lack logic. The degree of logic is
                expressed as a percentage.
              </div>
            </div>
          </div>

          <div className="mainPage__page1__section2">
            <div className="mainPage__page1__section2__title">
              <div className="mainPage__page1__section2__title-head">
                Automatic Fact Checking
              </div>
              <div className="mainPage__page1__section2__title-describe">
                You will automatically categorize sentences that contain
                citations from your essays. It will also automatically search
                for references to find out if the categorized sentence is a
                reliable sentence. If you want to check the facts, you can also
                select them yourself.
              </div>
            </div>
            <div className="mainPage__page1__section2__img">
              <img src={fakenews} alt="factChecking" />
            </div>
          </div>
        </div>

        <div className="mainPage__page2">
          <div className="mainPage__page2__title">Choose the Input Type.</div>
          <div className="mainPage__page2__container">
            <div className="mainPage__page2__container__box">Fulltext</div>
            <div className="mainPage__page2__container__box">Thematic</div>
            <div className="mainPage__page2__container__box">Video</div>
          </div>
        </div>

        <div className="mainPage__footer">
          <div className="mainPage__footer__title">
            <div className="mainPage__footer__title-head">Members of LOVA</div>
            <div className="mainPage__footer__title-describe">
              Four People who developed a system LOVA
            </div>
          </div>
          <div className="mainPage__footer__end">
            <div className="mainPage__footer__end__tools">
              <img
                className="mainPage__footer__end__tools-react"
                src={REACTlogo}
                alt="react"
              />
              <img
                className="mainPage__footer__end__tools-redux"
                src={REDUXlogo}
                alt="redux"
              />
              <img
                className="mainPage__footer__end__tools-nodejs"
                src={NODEJSlogo}
                alt="nodejs"
              />
              <img
                className="mainPage__footer__end__tools-ts"
                src={TSlogo}
                alt="tensorflow"
              />
            </div>
            {/* <div className="mainPage__footer__end-contact">Github</div> */}
          </div>
        </div>
      </div>
    );
  }

  onScroll = e => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({ scrollTop });
    if (scrollTop === 0) {
      this.setState({ isMain: true });
    } else {
      this.setState({ isMain: false });
    }
  };

  handleScroll = e => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log("hey");
    }
  };
}

MainPage.defaultProps = defaultProps;
MainPage.propTypes = propTypes;

export default MainPage;
