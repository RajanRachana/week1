import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container my-2">
      <h1 className="fw-bold fst-italic my-3">
        Day 5: State and Lifecycle in React
      </h1>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment} className="btn btn-outline-primary">
        Increment
      </button>
      <button onClick={decrement} className="btn btn-outline-primary">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
