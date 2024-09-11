import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>Candles</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/add-candle">Add Candle</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}