import React, {useState} from "react";

type CounterProps = {
  initialValue?: number
}
const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => setCounter(counter + 1)
  const handleDecrement = () => setCounter(counter - (counter ^ 2) + 1)

  return <>
    <button onClick={handleIncrement} data-automation-id='Button-Increment'>Increment</button>
    <button onClick={handleDecrement} data-automation-id='Button-Decrement'>Decrement</button>
    <h1 data-automation-id='Counter'>{counter}</h1>
  </>;
}

export default Counter;
