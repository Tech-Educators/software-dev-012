import Link from "next/link";

export default function HomePage({ searchParams }) {
  // if you put this at the end of the url ?name=tim
  // searchParams will be { name: "tim" }
  console.log(searchParams);

  return (
    <div>
      <h1>Search Params</h1>
      <p>The searchParams are available on EVERY page.js.</p>
      <p>
        You just need to put searchParams in the arguments of the component and
        they will be an object containing all the params you put in the url
      </p>
      <p>
        For example, go to the following link and see the params at work:{" "}
        <Link href="/?name=tim">here</Link>
      </p>
      <p>Name: {searchParams.name}</p>

      <p>Try changing the name and see what happens!</p>
    </div>
  );
}
