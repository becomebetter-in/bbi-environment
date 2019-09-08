import React, { createContext } from "react";

const UserContext = createContext();

export default function() {
  const user = "Paul";

  return (
  <UserContext.Provider value={user}>
    <div className="card">
        <div>
          <Display />
        </div>
    </div>
  </UserContext.Provider>
  );
}

function Display() {
  return (
    <UserContext.Consumer>
      {value => <div>My name is {value}.</div>}
    </UserContext.Consumer>
  );
}
