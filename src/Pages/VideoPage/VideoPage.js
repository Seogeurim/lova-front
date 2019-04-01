// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar } from "../../Components";
import YouTube from "react-youtube";

const defaultProps = {};
const propTypes = {};

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = { youtubeUrl: "", youtubeId: "", isClicked: false };
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div>
        <NavBar isActive="video" />
        <input type="text" onChange={e => this.handleURL(e)} />
        <input type="button" value="Click" onClick={this.handleClick} />
        {this.state.isClicked ? (
          <YouTube
            videoId={this.state.youtubeId}
            opts={opts}
            onReady={this._onReady}
          />
        ) : null}
      </div>
    );
  }

  handleURL = e => {
    this.setState({ youtubeUrl: e.target.value, isClicked: false });
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
