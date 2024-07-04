console.log("Conditionals are fun!");

// every if statement will have the following structure

// if(condition) {
//     action
// }

if (5 > 3) {
  console.log("5 is more than 3");
}

if (3 < 1) {
  console.log("3 is less than 1");
}

// Comparison Operators
// = assignment operator (not a comparison operator)
// == check if equals
// === STRICTLY equal to
// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// != not equal to
// !== STRICTLY not equal to

let a = 10;
let b = "10";

if (a == b) {
  console.log("a == b is true");
}

if (a === b) {
  console.log("a === b is true");
}

// IF ELSE
let myAge = 29;

if (myAge < 19) {
  console.log("Hello child");
} else {
  console.log("Hello adult");
}

// IF ELSE IF
if (myAge < 19) {
  console.log("Hello child");
} else if (myAge < 30) {
  console.log("Hello 20 something adult");
} else {
  console.log("Hello actual adult");
}

// WE CAN CHECK BOOLEAN
let loggedIn = false;

if (loggedIn) {
  console.log("Access granted");
} else {
  console.log("Access denied... punk.");
}

// USER INPUT FOR THE CONDITION
let answer = prompt("What is the best colour?");

if (answer == "tomato") {
  console.log("Correct, this is the best colour");
} else {
  console.log("LOOK WHAT YOU'VE DONE");
  document.body.style.backgroundColor = answer;
}

// SWITCH (optional, you just need to have seen its ugly face)
let valueToCheck = 6;

switch (valueToCheck) {
  case 1:
    console.log("That is a low rating");
    break;
  case 2:
    console.log("Thats a bit better");
    break;
  case 3:
    console.log("We got a certified fence sitter over here!");
    break;
  case 4:
    console.log("Almost a good review!");
    break;
  case 5:
    console.log("DING DING!!");
    break;
  default:
    console.log("Thats too high/too low/not a number");
    break;
}
