// This component simply returns a button:
// We always have to 'export' the function, if we want to use the component elsewhere:

// export default function MyButton() {
//   return <button> I am a component button</button>;
// }

// Another way to do this:

function MyButton() {
  return <button>I am another component button</button>;
}

export default MyButton;
