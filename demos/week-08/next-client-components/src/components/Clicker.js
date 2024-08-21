"use client";
import { useState } from "react";

export default function Clicker() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Count: {count}</p>
      <p>The button and count p tag are rendered on the client</p>
    </div>
  );
}
