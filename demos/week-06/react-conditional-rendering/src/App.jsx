import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [username, setUsername] = useState("Jez");

  // Here is the old school JavaScript that we are familiar with.
  // "If -> count is equal to two -> then console log that statement"
  if (count == 2) {
    console.log("Count was equal to 2!");
  }

  // Some functions for page interactivity
  function handleClick() {
    setCount(count + 1);
  }

  function setUserToTim() {
    setUsername("Tim");
  }

  function setUserToJez() {
    setUsername("Jez");
  }

  return (
    <>
      <p> I am here, conditionally rendering some things!</p>
      <button onClick={handleClick}>Increase Count</button>
      <p>{count}</p>

      {/* Ternary Operator */}
      {/* Here, we're conditionally rendering something inside of a <p> element: */}
      {/* if count is equal to 2 ? -> then display text within the <p> tag saying 'count is two' -> OTHERWISE : render ""*/}
      <p>{count == 2 ? "Count is two" : ""}</p>

      {/* Here, we're conditionally rendering the elements themselves: */}
      {/* if count is greater than 5 ? -> then render a <h1> tag with 'Count is greater than 5' -> OTHERWISE : render a different <p> tag with something else in it: */}
      {count > 5 ? (
        <h1>Count is greater than 5</h1>
      ) : (
        <p>Count is not greater than 5 yet...</p>
      )}

      {/* && - The Logical And -- the Logical Conjunction -- the Logical Conjunctionator, The Real RizzRazzinator */}
      {/* If the condition on the left is true, do the thing on the right */}
      <p>{count == 10 && "I equal ten!"}</p>
      <h2>Usernames? Using && </h2>

      <button onClick={setUserToTim}>Set username to Tim</button>
      <button onClick={setUserToJez}>Set username to Jez</button>

      {/* If it is true that 'username is equal to "Tim" ' -> render the text "Tim woz ere, being bougy with an Aura." */}
      <p>{username == "Tim" && "Tim woz ere, being bougy with an Aura."}</p>
      <p>
        {username == "Jez" &&
          "Jez woz ere even more, hitting extra, hitting different."}
      </p>
    </>
  );
}

export default App;
