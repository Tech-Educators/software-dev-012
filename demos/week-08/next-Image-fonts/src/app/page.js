import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Wisdom quotes</h1>
      <h2>Home</h2>
      <Image src="https://cdn.pixabay.com/photo/2022/08/18/09/14/sea-7394353_1280.jpg" width={500} height={300}/>
      <Image src="/Quote.avif" width={500} height={300} />
    </main>
  );
}
