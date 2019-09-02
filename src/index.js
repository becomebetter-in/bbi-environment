import React, { Component } from "react";
import { render } from "react-dom";
import Assignment from "./Assignment";
import Headline from "./Headline";
import "./style.css";

import text from "../text.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: text.headline,
      desciption: text.description
    };
  }

  render() {
    return (
      <div className="app">
        <Headline name={this.state.name} desciption={this.state.desciption} />
        <Assignment />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
