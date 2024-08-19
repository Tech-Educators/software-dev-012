import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <h2>Posts</h2>
      <p>I am the posts page</p>
      <Link href="/posts/1">Post 1</Link>
      <Link href="/posts/999">Post 999</Link>
      <Link href="/posts/jez">Post jez</Link>
    </div>
  );
}
