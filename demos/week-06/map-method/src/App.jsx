import Person from "./components/Person";

export default function App() {
  const staff = [
    { id: 1, name: "Jez", location: "Norwich" },
    { id: 2, name: "Frankie", location: "Nottingham" },
    { id: 3, name: "Heinry", location: "Hull" },
    { id: 4, name: "Tim", location: "Norwich" },
  ];

  return (
    <div>
      <h1>Array Map Method (lists and stuff)</h1>
      {staff.map(function (item) {
        return <Person key={item.id} info={item} />;
      })}
    </div>
  );
}
