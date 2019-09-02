import React, { useEffect, useState } from "react";

export default function(props) {
  const [random, setRandom] = useState(Math.random());

  useEffect(() => {
    console.log("re-rendered");

    return () => console.log("unmounting...");
  });

  const reRender = () => setRandom(Math.random());

  return (
    <div className="card">
      <button onClick={reRender}>trigger re-render</button>
    </div>
  );
}
