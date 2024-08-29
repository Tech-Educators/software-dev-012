// make a type for what I expect posts to be
type postType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: postType[] = await response.json();

  return (
    <div>
      <h2>Home</h2>
      <p>I am the home page</p>
      {posts.map((post: postType) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}
