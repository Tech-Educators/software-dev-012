import MyButton from "./MyButton";

// This component returns another single component multiple times:
export default function MyBigListOfButtons() {
  return (
    <div>
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}
