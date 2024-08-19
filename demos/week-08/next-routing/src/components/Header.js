import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Next Routing is fun</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/team">Meet the team</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}
