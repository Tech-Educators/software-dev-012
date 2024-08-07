import { useState, useEffect } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);

  // whatever happens in the callback function of useEffect will only run ONCE (when the page first loads)
  useEffect(function () {
    // declare our function that does something asyncronously
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      setPosts(data); // changing state causes the component to re run
    }

    // run our function that does something asycnronously
    getPosts();
  }, []);

  // getPosts(); // this runs every time the component runs

  return (
    <div>
      <h1>useEffect and Fetch</h1>
      {posts.map(function (post) {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
