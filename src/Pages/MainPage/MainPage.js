// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar } from "../../Components";
import Fab from "@material-ui/core/Fab";
import cx from "classnames";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import background from "../../Assets/Images/main_background.jpg";
import TextIcon from "../../Assets/Icons/instruction.svg";
import EssayIcon from "../../Assets/Icons/note.svg";
import VideoIcon from "../../Assets/Icons/youtube.svg";
import Girl1 from "../../Assets/Icons/G1.svg";
import Girl2 from "../../Assets/Icons/G2.svg";
import Boy1 from "../../Assets/Icons/B1.svg";
import Boy2 from "../../Assets/Icons/B2.svg";
import REACTlogo from "../../Assets/Icons/reactIcon.svg";
import REDUXlogo from "../../Assets/Icons/reduxIcon.svg";
import NODEJSlogo from "../../Assets/Icons/nodejsIcon.svg";
import TSlogo from "../../Assets/Icons/tensorflow.svg";
import Gitlogo from "../../Assets/Icons/github-logo.svg";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

const defaultProps = {};
const propTypes = {};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: null,
      isMain: true,
      members: [
        {
          name: "DongOnee",
          icon: Boy1,
          task: "Logic Validation / Web Backend",
          git: "https://github.com/DongOnee/lova-backend",
          gitTitle: "Lova-Backend"
        },
        {
          name: "Hyein",
          icon: Girl2,
          task: "Sentence Classification",
          git: "https://github.com/namhyein/textclassification_cap",
          gitTitle: "Text Classification"
        },
        {
          name: "Grimeee",
          icon: Girl1,
          task: "Web Application",
          git: "https://github.com/Seogeurim/lova-front",
          gitTitle: "Lova-Front"
        },
        {
          name: "Jisung",
          icon: Boy2,
          task: "Truth Judgement",
          git: "https://github.com/jisung0920/nlstc",
          gitTitle: "Nlstc"
        }
      ]
    };
  }

  componentWillMount() {
    // 페이지 맨 위로 올라가기
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    const { members } = this.state;
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
            <p>Scroll Down</p>
            <KeyboardArrowDown
              className={cx(
                "mainPage__header__scrollDown-icon",
                "animated infinite heartBeat delay-2s"
              )}
            />
          </div>
        </div>

        <div className="mainPage__page1" onScroll={this.handleScroll}>
          <ScrollAnimation animateIn="fadeIn" duration={1.3}>
            <div className="mainPage__page1__section1">
              <div className="mainPage__page1__section1__title">
                <div className="mainPage__page1__section1__title-label">
                  <span>01.</span> <hr /> <span>Logicality Validation</span>
                </div>
                <div className="mainPage__page1__section1__title-head">
                  Good Logical Writing, <br /> now it's Easier.
                </div>
                <div className="mainPage__page1__section1__title-describe">
                  You can see how well your essay supports your argument. You
                  can also see how logical the article you're trying to identify
                  is. This feature allows you to check the logic of your essay
                  or filter out articles that lack logic. The degree of logic is
                  expressed as a percentage.
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn" duration={1.3} delay={150}>
            <div className="mainPage__page1__section2">
              <div className="mainPage__page1__section2__title">
                <div className="mainPage__page1__section1__title-label">
                  <span>02.</span> <hr /> <span>Reliability Validation</span>
                </div>
                <div className="mainPage__page1__section2__title-head">
                  Automatic <br />
                  Fact Checking
                </div>
                <div className="mainPage__page1__section2__title-describe">
                  You will automatically categorize sentences that contain
                  citations from your essays. It will also automatically search
                  for references to find out if the categorized sentence is a
                  reliable sentence. If you want to check the facts, you can
                  also select them yourself.
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="mainPage__page2">
          <div className="mainPage__page2__title">Choose the Input Type.</div>
          <div className="mainPage__page2__container">
            <ScrollAnimation
              className="mainPage__page2__container__boxS"
              animateIn="slideInUp"
            >
              <div className="mainPage__page2__container__box">
                <h1 className="mainPage__page2__container__box__title">
                  Fulltext
                </h1>
                <img
                  className="mainPage__page2__container__box__icon"
                  src={TextIcon}
                  alt="inputType"
                />
                <p className="mainPage__page2__container__box__describe">
                  Please enter the content you want to enter in fulltext at
                  once. Determines the logic and reliability of the entire
                  article.
                </p>
                <div className="mainPage__page2__container__box__btn">
                  <Fab
                    variant="extended"
                    size="medium"
                    className="mainPage__page2__container__box__btn-fab"
                    onClick={this.handleFulltext}
                  >
                    Go FullText Page
                  </Fab>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              className="mainPage__page2__container__boxS"
              animateIn="slideInUp"
              delay={250}
            >
              <div className="mainPage__page2__container__box">
                <h1 className="mainPage__page2__container__box__title">
                  Thematic
                </h1>
                <img
                  className="mainPage__page2__container__box__icon"
                  src={EssayIcon}
                  alt="inputType"
                />
                <p className="mainPage__page2__container__box__describe">
                  Please divide the input by argument and premise. Determine how
                  well the premise supports the argument and how reliable it is.
                </p>
                <div className="mainPage__page2__container__box__btn">
                  <Fab
                    variant="extended"
                    size="medium"
                    className="mainPage__page2__container__box__btn-fab"
                    onClick={this.handleThematic}
                  >
                    Go Thematic Page
                  </Fab>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              className="mainPage__page2__container__boxS"
              animateIn="slideInUp"
              delay={500}
            >
              <div className="mainPage__page2__container__box">
                <h1 className="mainPage__page2__container__box__title">
                  Video
                </h1>
                <img
                  className="mainPage__page2__container__box__icon"
                  src={VideoIcon}
                  alt="inputType"
                />
                <p className="mainPage__page2__container__box__describe">
                  Enter a video that requires a logic validation check as a
                  YouTube link. Extract subtitles from the video to conduct
                  logic and reliability tests.
                </p>
                <div className="mainPage__page2__container__box__btn">
                  <Fab
                    variant="extended"
                    size="medium"
                    className="mainPage__page2__container__box__btn-fab"
                    onClick={this.handleVideo}
                  >
                    Go Video Page
                  </Fab>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="mainPage__footer">
          <div className="mainPage__footer__title">
            <div className="mainPage__footer__title-head">Members of LOVA</div>
            <div className="mainPage__footer__title-describe">
              Four People who developed a system LOVA
            </div>
          </div>
          <div className="mainPage__footer__content">
            {members.map(data => {
              return (
                <div className="mainPage__footer__content__member">
                  <ScrollAnimation animateIn="flipInX">
                    <img
                      className="mainPage__footer__content__member-img"
                      src={data.icon}
                      alt="member"
                    />
                    <h1 className="mainPage__footer__content__member-name">
                      {data.name}
                    </h1>
                    <p className="mainPage__footer__content__member-task">
                      {data.task}
                    </p>
                    <div className="mainPage__footer__content__member__git">
                      <a href={data.git} target="_sub">
                        <img src={Gitlogo} alt="github" />
                        {data.gitTitle}
                      </a>
                      {data.name === "DongOnee" ? (
                        <a
                          className="mainPage__footer__content__member__git-dongOnee"
                          href="https://github.com/DongOnee/LOVA_logical"
                          target="_sub"
                        >
                          <img src={Gitlogo} alt="github" />
                          Logic Validation
                        </a>
                      ) : null}
                    </div>
                  </ScrollAnimation>
                </div>
              );
            })}
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

  handleFulltext = () => {
    this.props.history.push({
      pathname: "/fulltext/"
    });
  };

  handleThematic = () => {
    this.props.history.push({
      pathname: "/thematic/"
    });
  };

  handleVideo = () => {
    this.props.history.push({
      pathname: "/video/"
    });
  };
}

MainPage.defaultProps = defaultProps;
MainPage.propTypes = propTypes;

export default MainPage;
