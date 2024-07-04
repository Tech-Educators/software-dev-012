// GLOBAL VS LOCAL
let result = 100; // this variable is GLOBAL

function sum(a, b) {
  // here we are naughty and we reuse the variable name
  let result = a + b; // this variable is LOCAL

  // this will use the GLOBAL variable unless there is a LOCAL one
  console.log(result);
}

// invoke the function
sum(2, 9); // this will log 11 to the console

console.log(result); // this will log 100 to the console

// UPDATING GLOBAL VARIABLES
let score = 0; // GLOBAL

function increaseScore() {
  // because we haven't got a LOCAL variable called score
  // this will update the GLOBAL score
  score = score + 1;
}

console.log(score); // 0
increaseScore();
console.log(score); // 1
