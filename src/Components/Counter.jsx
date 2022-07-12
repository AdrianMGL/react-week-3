import React, { useState } from "react";
import GetMultiply from "./GetMultiply";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <br />
      <GetMultiply counter={counter} />
    </div>
  );
};

export default Counter;
