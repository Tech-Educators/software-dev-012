export default function PageThatDoesNotWork() {
  // simulate something going wrong with a database query
  throw new Error("Something went wrong and an error occured - Tim Smith 2024");
  return <div>I do work!</div>;
}
