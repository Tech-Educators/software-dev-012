export default function Person(props) {
  return (
    <div className="person">
      <p>The name of the person is {props.info.name}</p>
      <p>They are in {props.info.location}</p>
    </div>
  );
}
