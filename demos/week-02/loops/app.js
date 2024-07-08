// WHILE
// I want counter to be increased by 1 until its 10
// i want to be told in the log each time it increases
let counter = 0;

while (counter < 10) {
  counter++; // this increases the variable by 1
  console.log("while " + counter);
}
// a while loop is essentially an if statement that runs more than once

// FOR
// make a new variable; check the new variable; change the variable
// instansiation; condition; afterthought
for (let i = 0; i < 10; i++) {
  console.log("for " + i);
}

/*
the order of a for loop is:

1. the new variable is created
2. the condition is checked. If true run code block
3. the afterthought is run
4. repeat steps 2 & 3 until the condition is false

*/

// DO WHILE
// a do while loop is the same as a while loop EXPECT it will always run the code block at least once
let doCounter = 0;

do {
  doCounter++;
  console.log("do while " + doCounter);
} while (doCounter < 10);

// bestest friends ever
// for loops & arrays
// we have an array of staff members and we want to say hello to each of them
const staff = [
  "tim",
  "jez",
  "heinry",
  "manny",
  "joe",
  "cordelia",
  "sam",
  "akshat",
  "frankie",
];

// the sad long way
// console.log("Hello " + staff[0]);
// console.log("Hello " + staff[1]);
// console.log("Hello " + staff[2]);
// console.log("Hello " + staff[3]);
// console.log("Hello " + staff[4]);
// console.log("Hello " + staff[5]);
// console.log("Hello " + staff[6]);

const namesDiv = document.getElementById("names");

// the cool popular quick way
for (let i = 0; i < staff.length; i++) {
  // greet in the console
  console.log("Hello " + staff[i]);

  // greet on the page
  const p = document.createElement("p");
  p.textContent = staff[i];
  namesDiv.appendChild(p);
}
