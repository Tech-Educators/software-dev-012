import Link from "next/link";

//we will add data from an API
//first I need to have an async server component
export default async function QuotesPage({ searchParams }) {
  //I need to fetch my data from the API
  const result = await fetch("https://dummyjson.com/quotes");
  //I need to parse the data into json
  const data = await result.json();
  console.log(data);
  //I need to wrangle the data
  const wrangledData = data.quotes;

  //I will add query strings to filter the data
  // I need to destructure searchParams --> it's the same as query strings

  if (searchParams.sort === "desc") {
    wrangledData.reverse();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the main Quotes page</h1>
      {/* Add links for user to sort data using query strings */}
      <Link href="/quotes?sort=asc">Sort Asc</Link>
      <Link href="/quotes?sort=desc">Sort Desc</Link>

      <ol>
        {/* we are mapping through an array of objects */}
        {wrangledData.map((quotes) => {
          return (
            <li key={quotes.id}>
              <Link href={`/quotes/${quotes.id}`}>{quotes.quote}</Link>
            </li>
          );
        })}
      </ol>
    </main>
  );
}