// global variable to help us keep track of WHICH image we want to see
let currentIndex = 0;

const mainimage = document.getElementById("mainimage");

const images = ["hills.jpg", "stairs.jpg"];

function nextImage() {
  currentIndex++; // increase it by 1
  mainimage.src = images[currentIndex];
}

function prevImage() {
  currentIndex--; // decrease it by 1
  mainimage.src = images[currentIndex];
}

// we need to put a small version of each of those images on the page in the #thumbnails div

// each of those images needs an event listener so when we click it
// it changes the main-image

// we need a next and previous button to change to the next or previous image
