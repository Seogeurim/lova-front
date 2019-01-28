// React Common Modules
import React, { Component } from "react";

//React Router
import { Route } from "react-router-dom";

import { DefaultPage, MainPage } from "./Pages";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={MainPage} />
      </div>
    );
  }
}

export default App;
