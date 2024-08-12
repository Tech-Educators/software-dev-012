import { Link, useSearchParams } from "react-router-dom";

export default function Animals() {
  const [searchParams] = useSearchParams();

  const sort = searchParams.get("sort");

  const animals = [
    "Pigeon",
    "Frog",
    "Cat",
    "Honeybadger",
    "Monkey",
    "Panda",
    "Elephant",
    "Dog",
    "Lion",
    "Tiger",
    "Eagle",
    "Guinea Pig",
    "Possum",
  ];

  if (sort === "asc") {
    animals.sort();
  } else if (sort === "desc") {
    animals.sort().reverse();
  }

  return (
    <div>
      <h2>Animals</h2>
      <Link to="/animals">Sort Normal</Link>
      <br />
      <Link to="/animals?sort=asc">Sort Alphabetically</Link>
      <br />
      <Link to="/animals?sort=desc">Sort Reverse Alphabetically</Link>

      <ul>
        {animals.map(function (animal) {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
}
