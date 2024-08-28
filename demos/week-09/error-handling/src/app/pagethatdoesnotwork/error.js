"use client";

export default function ErrorPage({ error, reset }) {
  console.log(reset);
  return (
    <div>
      <h2>Oh no! An error happened</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
