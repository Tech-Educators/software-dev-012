// importing out pages (they are just components)
import About from "./pages/About";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Lil Root</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/about/team">Meet the Team</Link>
          <Link to="/about/story">Our Story</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer>Copyright Lil Root 2024</footer>
    </BrowserRouter>
  );
}
