// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar } from "../../Components";
import YouTube from "react-youtube";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";
import Button from "@material-ui/core/Button";

const defaultProps = {};
const propTypes = {};

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeUrl: "",
      youtubeId: "",
      isValid: true,
      isClicked: false
    };
  }

  render() {
    const opts = {
      height: "350",
      width: "575",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const { youtubeId, isValid, isClicked } = this.state;
    return (
      <div className="videoPage">
        <NavBar isActive="video" />
        <div className="videoPage__youtube">
          <FormControl className="videoPage__youtube__input">
            <InputLabel>YouTube Link here.</InputLabel>
            <Input
              onChange={e => this.handleURL(e)}
              error={!isValid}
              onKeyPress={this.handleEnter}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    className="videoPage__youtube__input__enterBtn"
                    aria-label="Keyboard Return"
                    disabled={!isValid}
                    onClick={this.handleClick}
                  >
                    <KeyboardReturn />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {isClicked ? (
            <YouTube
              className="videoPage__youtube__show"
              videoId={youtubeId}
              opts={opts}
              onReady={this._onReady}
            />
          ) : null}

          {isClicked ? (
            <Button className="videoPage__youtube__button" variant="outlined">
              Submit
            </Button>
          ) : null}
        </div>
      </div>
    );
  }

  handleURL = e => {
    this.setState({ youtubeUrl: e.target.value, isClicked: false });
    const re = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm;
    this.setState({ isValid: re.test(e.target.value) });
  };

  handleEnter = e => {
    if (e.key === "Enter" && this.state.isValid === true) {
      this.handleClick();
    }
  };

  handleClick = () => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const matchs = this.state.youtubeUrl.match(regExp);
    if (matchs) {
      this.setState({ youtubeId: matchs[7] });
    }
    this.setState({ isClicked: true });
  };

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

VideoPage.defaultProps = defaultProps;
VideoPage.propTypes = propTypes;

export default VideoPage;
