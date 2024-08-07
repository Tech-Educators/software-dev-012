import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    // we put the interval into a variable so we can clear it later
    const myInterval = setInterval(function () {
      console.log("hello");
      // putting a function inside a setState function, means we can access the current value of state
      // because this timer thinks "count" is equal to 0, it never tries to get the latest version
      // So we put a function to go get the current state value
      setCount((curr) => curr + 1); // this way goes to get the current value of count each time
    }, 1000);

    // this will run when we try to use the useEffect again, meaning it will remove any old intervals before making new ones
    return () => clearInterval(myInterval); // clear the interval if we try to run the useEffect again
  }, []);

  return (
    <div>
      <h1>Timers</h1>
      <p>Count: {count}</p>
    </div>
  );
}
/*
this version is what we are used to
setCount(count + 1);

this version is useful when we have written this snippet of code inside a timer
the timer doesn't know that count is changing, so we have to find out its current value
setCount(function (currentCount) {
  return currentCount + 1;
});
*/
