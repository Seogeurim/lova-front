// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar, ScoreChart } from "../../Components";
import cx from "classnames";
import background from "../../Assets/Images/main_background.jpg";
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

        <div className="mainPage__page1">
          <div className="mainPage__page1__section1">
            <div className="mainPage__page1__section1__scoreChart">
              <ScoreChart score={78.6} />
            </div>
            <div className="mainPage__page1__section1__title">
              <div className="mainPage__page1__section1__title-head">
                Great Logical Writing, <br /> now it's Easier.
              </div>
              <div className="mainPage__page1__section1__title-describe">
                You can see how well you explain your argument.
              </div>
            </div>
          </div>

          <div className="mainPage__page1__section2">
            <div className="mainPage__page1__section2__title">
              <div className="mainPage__page1__section2__title-head">
                Automatic Fact Checking
              </div>
              <div className="mainPage__page1__section2__title-describe">
                Automatically categorize quoted sentences <br /> and examine how
                reliable they are.
              </div>
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
            <div className="mainPage__footer__end-system">
              React / Redux / NodeJS / Tensorflow
            </div>
            <div className="mainPage__footer__end-contact">Github</div>
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
}

MainPage.defaultProps = defaultProps;
MainPage.propTypes = propTypes;

export default MainPage;
