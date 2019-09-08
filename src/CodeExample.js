import React, { createContext, useContext } from "react";

const UserContext = createContext();
const ThemeContext = createContext();

export default function() {
  const user = "Paul";

  return (
    <ThemeContext.Provider value={"light"}>
      <UserContext.Provider value={user}>
        <div className="card">
          <Display />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Display() {
  const value = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <div>
      My name is {value} and I use the {theme} theme.
    </div>
  );
}
