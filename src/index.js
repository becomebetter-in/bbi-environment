import React, { Component } from "react";
import { render } from "react-dom";
// import "./style.css";

import CodeExample from "./CodeExample";
import Headline from "./Headline";

import text from "./text.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: text.headline,
      type: text.type,
      desciption: text.description
    };
  }

  render() {
    return (
      <div className="app">
        <Headline
          name={this.state.name}
          type={this.state.type}
          desciption={this.state.desciption}
        />
        <CodeExample />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
