import React, { createContext } from "react";

const UserContext = createContext();

export default function() {
  const user = "Paul";

  return (
    <div className="card">
      <UserContext.Provider value={user}>
        <div>
          <Display />
        </div>
      </UserContext.Provider>
    </div>
  );
}

function Display() {
  return (
    <UserContext.Consumer>
      {value => <div>My name is {value}.</div>}
    </UserContext.Consumer>
  );
}
