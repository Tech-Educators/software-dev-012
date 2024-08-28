// this function takes 5 seconds to do something (the something is nothing)
async function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
}

export default async function SlowComponent() {
  await delay(); // to simulte our component taking time to load
  return <p>I am a very slow component. But I made it look at me!</p>;
}
