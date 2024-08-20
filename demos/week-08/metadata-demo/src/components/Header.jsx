import Link from "next/link";

export default function Header() {
    return(
    <>
    <h1>This is the header</h1>
    <nav>
        <Link href ="/">Home</Link>
        <br />
        <Link href="/about">About</Link>
        <br />
        <Link href="/quotes">Quotes</Link>
    </nav>
    </>
    );
}