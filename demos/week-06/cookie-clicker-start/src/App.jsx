import { useState, useEffect } from "react";
import UpgradeButton from "./components/UpgradeButton";

export default function App() {
  const [cookies, setCookies] = useState(1);
  const [cps, setCps] = useState(1); // cookies per second

  useEffect(() => {
    const theInterval = setInterval(function () {
      setCookies((curr) => curr + cps);
    }, 1000);

    return () => clearInterval(theInterval);
  }, [cps]); // whenever cps changes, rerun the useEffect

  function incrementCookies() {
    setCookies(cookies + 1);
  }

  function buyUpgrade() {
    setCookies(cookies - 10);
    setCps(cps + 1);
  }

  return (
    <div>
      <h1>Basic Cookie Clicker</h1>

      <button onClick={incrementCookies}>I am Cookie</button>
      <p>Cookies: {cookies}</p>

      <p>Cookies Per Second (cps): {cps}</p>
      <UpgradeButton buyUpgrade={buyUpgrade} />
    </div>
  );
}

// a button to click to get another cookie
// see how many cookies we have
// to see how many cookies per second we are getting
// an upgrade button to get more cookies per second
