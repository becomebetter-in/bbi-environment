import React from "react";

export default ({ name, desciption, type }) => (
  <>
    <h1>
      <i>{name} </i>
      {type}
    </h1>
    <p className="desciption">{desciption}</p>
  </>
);
