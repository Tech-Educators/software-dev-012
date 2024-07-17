// global variable to keep track of the count
let count = 0;

// get our DOM node where we want to show the count
const p = document.querySelector("p");

// every second increase count by 1
setInterval(function () {
  count++;
  p.textContent = count;
  localStorage.setItem("countInLS", count);
}, 1000);

// I need to get what is in local storage when the page loads
function getCount() {
  // set the count variable to be what is stored in LS
  count = localStorage.getItem("countInLS");
  // update the p tag
  p.textContent = count;
}

getCount(); // this runs once when the page loads
