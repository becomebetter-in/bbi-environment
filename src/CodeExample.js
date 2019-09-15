import React, { createContext, useState } from "react";

const UserContext = createContext();

export default function() {
  const [localCount, setlocalCounter] = useState(0);
  const [user, changeUser] = useState("Paul");

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      <div className="card">
        <div>
          <button onClick={() => setlocalCounter(localCount + 1)}>
            change local state: {localCount}
          </button>
        </div>
        <div>
          <Display />
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </UserContext.Provider>
  );
}

function Display() {
  return (
    <UserContext.Consumer>
      {value => <div>My name is {value.user}.</div>}
    </UserContext.Consumer>
  );
}

function Profile() {
  return (
    <UserContext.Consumer>
      {value => (
        <div>
          <div>userProfile: {value.user}</div>
          <button onClick={() => value.changeUser("Paula")}>
            change name to "Paula"
          </button>
        </div>
      )}
    </UserContext.Consumer>
  );
}
