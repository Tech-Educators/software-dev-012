import { useState } from "react";

export default function App() {
  // const [stateVariable, mutationFunction] = useState(initial value)
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}
