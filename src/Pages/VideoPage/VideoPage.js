// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from "react";
import { NavBar } from "../../Components";

const defaultProps = {};
const propTypes = {};

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar isActive="video" />
        This is Video Page
      </div>
    );
  }
}

VideoPage.defaultProps = defaultProps;
VideoPage.propTypes = propTypes;

export default VideoPage;
