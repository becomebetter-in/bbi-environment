import React, { createContext } from "react";

const NumberContext = createContext();

export default function() {
  return (
    <div className="card">
      <NumberContext.Provider value={42}>
        <div>
          <Display />
        </div>
      </NumberContext.Provider>
    </div>
  );
}

function Display() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer is {value}.</div>}
    </NumberContext.Consumer>
  );
}
