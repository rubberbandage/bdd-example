import React, {useState} from "react";
import {calculateNextNumber, calculatePreviousNumber} from "../helpers";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(calculateNextNumber(counter))
  const handleDecrement = () => setCounter(calculatePreviousNumber(counter))

  return <>
    <button onClick={handleIncrement} data-automation-id='Button-Increment'>Increment</button>
    <button onClick={handleDecrement} data-automation-id='Button-Decrement'>Decrement</button>
    <h1 data-automation-id='Counter'>{counter}</h1>
  </>;
}

export default Counter;
