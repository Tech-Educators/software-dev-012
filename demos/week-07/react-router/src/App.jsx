import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>React Router</h1>
      <p>This content will show on every page</p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <p>This content will show on every page</p>
    </div>
  );
}
