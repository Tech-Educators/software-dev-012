console.log("Bananas");

function sum(a, b) {
  let result = a + b;
  debugger; // this will stop the code running HERE and open the debugger in the browser for me
  return result;
}

// the debugger just gives us a chance to see the code happening step by step
// (click the "step over" button to see each step as it happens)
function countToTen() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    debugger;
  }
}

// we can also see global variables in the debugger
const timsFavNumber = 144; // we will be able to see this from the debugger window

function countingWithTim() {
  let counter = 0;
  while (counter <= timsFavNumber) {
    console.log(counter);
    counter += 12; // increase the variable by 12
    debugger;
  }
}
