// React Common Modules
import React, { Component } from "react";

//React Router
import { Route } from "react-router-dom";

import {
  DefaultPage,
  MainPage,
  FullTextPage,
  ThematicPage,
  VideoPage
} from "./Pages";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={MainPage} />
        <Route exact path="/fulltext" component={FullTextPage} />
        <Route exact path="/thematic" component={ThematicPage} />
        <Route exact path="/video" component={VideoPage} />
      </div>
    );
  }
}

export default App;
