import React, { createContext } from "react";

const UserContext = createContext();

export default function() {
  const userDetails = { name: "Paul" };

  return (
    <div className="card">
      <UserContext.Provider value={userDetails}>
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
      {value => <div>My name is {value.name}.</div>}
    </UserContext.Consumer>
  );
}
