import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div>
      <h2>Posts</h2>
      <div className="posts">
        {posts.map(function (post) {
          return (
            <Link key={post.id} href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
