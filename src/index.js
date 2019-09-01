import React, { Component } from "react";
import { render } from "react-dom";
import Assignment from "./Assignment";
import Headline from "./Headline";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '"TOPIC"',
      desciption:
        "Add a 'useEffect' hook to the 'Assignment' component that prints “re-rendered” to the console in each render cycle. Also add a button which triggers the rerender by changing a state."
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
