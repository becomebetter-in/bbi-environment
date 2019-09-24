import React, { useState } from "react";

export default function() {
  const [count, setCount] = useState(0);
  return (
    <div class="card">
      <p>Clicked {count}x!</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Drecrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
