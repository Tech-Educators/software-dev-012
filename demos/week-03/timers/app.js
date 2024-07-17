// setTimeout
// setTimout runs a callback function after a number of miliseconds
function changeBG() {
  document.body.style.backgroundColor = "tomato";
}

setTimeout(changeBG, 3000);

// setInterval
// setInterval runs a callback function EVERY number of miliseconds we give it
const p = document.querySelector("p");

function tick() {
  p.textContent = p.textContent + "+"; // add another "+" into the p tag
}

setInterval(tick, 1000);

// written as inline function
setInterval(function () {
  const jeff = document.getElementById("jeff");
  jeff.classList.toggle("hidden"); // toggle means add if not there, remove if there
}, 10000);

// STOPPING intervals (clearing them)
let counter = 1;

// we put the inteval into a variable, so we can stop it later by name
const counterInterval = setInterval(function () {
  console.log(counter);
  counter++;
}, 1000);

setTimeout(function () {
  clearInterval(counterInterval); // this will stop the above interval
  console.log("counterInterval was cleared");
}, 4000);
