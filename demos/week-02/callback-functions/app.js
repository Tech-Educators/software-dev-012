// 2 functions that do different things (in this case just say different messages)
function greet() {
  console.log("Hello world");
}
function shout() {
  console.log("AAAAAAAAAAAAAAAAAARGH");
}

// this function accepts another function as a parameter
function doSomething(cbf) {
  console.log("Doing something...");
  cbf();
}

// here we are calling our doSeomthing function
// we are giving it a different function as an argument (meaning a callback function)
// when we write cbf() on line 12, it runs the function we passed as an argument
doSomething(greet);
doSomething(shout);
