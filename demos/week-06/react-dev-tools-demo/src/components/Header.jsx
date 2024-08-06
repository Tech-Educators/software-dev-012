export default function Header(props) {
  return (
    <>
      <h1>Header</h1>
      <p>{props.username}</p>
      <p>{props.count}</p>
    </>
  );
}
