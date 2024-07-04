// this is the function declaration
function greet() {
  console.log("Hello world");
}

// this is calling the function
greet();

// we can call a function any number of times
greet();
greet();
greet();

// PARAMETERS
function sum(a, b) {
  console.log(a + b);
}

sum(1, 2);
sum(30, 20);

// as many params as you like, in sum we have 2, in madlibs we have 4
function madlibs(animal, number, desc, thing) {
  console.log(
    `Once upon a time there was a ${animal}. They had ${number} ${desc} ${thing}.`
  );
}

madlibs("flea", "10", "huge", "legs");

// RETURN VALUE
function multiply(a, b) {
  return a * b;
}

let myNumber = multiply(3, 5);
console.log(myNumber);

// when we return a value in a function TWO things happen
// 1. The function ends
// 2. It gives the return value to a variable (if you declare a variable with its invocation)
