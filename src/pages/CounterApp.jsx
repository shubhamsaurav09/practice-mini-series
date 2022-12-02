import React, { useState } from "react";
import "./CounterApp.css";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p>
        Count:{" "}
        <span className={count >= 0 ? "greenColor" : "redColor"}>{count}</span>
      </p>
      <button className="increment" onClick={handleIncrement}>
        +
      </button>
      <button className="decrement" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}
