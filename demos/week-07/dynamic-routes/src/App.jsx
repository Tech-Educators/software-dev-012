import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/animals">Animals</Link>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/profile/:username" element={<Profile />}>
            <Route
              path="posts"
              element={<p>Here is a pretend list of posts by the user</p>}
            />
            <Route path="followers" element={<p>I has 100s of followers</p>} />
          </Route>

          <Route path="/animals" element={<Animals />} />
        </Routes>

        {/* <p>
          The : in front on /username in the route means that the username part
          is dynamic
        </p>
        <p>
          We don&apos;t actually need to type the word username, we write
          whatever our username actually is
        </p> */}

        <footer>&copy;footer</footer>
      </div>
    </BrowserRouter>
  );
}
