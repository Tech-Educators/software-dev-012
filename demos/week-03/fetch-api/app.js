const img = document.querySelector("img");

// we put async in front of our function to tell it that it is
// allowed to take its time with some of the code
async function getFox() {
  // call the api to get the data
  const response = await fetch("https://randomfox.ca/floof/");

  // get the JSON from our response object
  // and returns it as a JavaScript object (not JSON)
  const data = await response.json();

  console.log(data); // { image: "...", link: "..."}

  // put the fox image onto the page
  img.src = data.image;
}

getFox();
