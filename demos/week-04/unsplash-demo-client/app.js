const imgContainer = document.getElementById("img-container");

// make a function that calls our API to get the array of images
async function getImages() {
  // make the fetch
  const res = await fetch("https://handsome-faces-server.onrender.com/images");

  // get the json from the response
  const data = await res.json();

  // put the images onto the DOM
  for (let i = 0; i < data.length; i++) {
    const img = document.createElement("img");
    img.src = data[i];
    imgContainer.appendChild(img);
  }
}

getImages();
