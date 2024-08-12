import { useParams, Outlet } from "react-router-dom";

export default function Profile() {
  // useParams() is a function that returns an object
  // we destructure our params out of it
  // it has a property called "username" because we put that in the Route in App.jsx
  const { username } = useParams();

  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome {username}</p>
      <Outlet />
    </div>
  );
}
