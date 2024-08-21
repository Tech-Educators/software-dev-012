import Link from "next/link";
//when we have a dynamic page, we need to generate dynamic metadata!
export async function generateMetadata({params}){
    const result = await fetch(`https://dummyjson.com/quotes/${params.id}`);
    const data = await result.json();
    console.log(data)

    return {
        title: `Quotes page - ${data.id}`,
        description: `Deep words of wisdom from ${data.author}`
    };
}
//We need to fetch data from a specific object using the id
export default async function IdPage({ params }) {
  const result = await fetch(`https://dummyjson.com/quotes/${params.id}`);
  const data = await result.json();

  return (
    <>
      <Link href="/quotes">Back to Quotes list</Link>

      <h1>This is the id nested route</h1>
      <p>This is the param: {params.id}</p>
      <h2>Quote: {data.quote}</h2>
      <p>Author: {data.author}</p>
    </>
  );
}