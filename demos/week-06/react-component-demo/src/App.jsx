import "./App.css";
// VSCode will automatically import your components from the correct location, if you have typed them out in your function.
import MyBigListOfButtons from "./components/MyBigListOfButtons";
import MyParagraph from "./components/MyParagraphComponent";

function App() {
  return (
    // We sometimes use a 'fragment' instead of a div (A pair of these: <> </>) to wrap our returned JSX in:
    <>
      <h1>My React Component Playground</h1>
      {/* Importing a <p> component: */}
      <MyParagraph />
      {/* Importing a component, containing components!!: */}
      <MyBigListOfButtons />
    </>
  );
}

export default App;
