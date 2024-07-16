// const cowsay = require("cowsay"); // this is the old way of importing node_modules
import cowsay from "cowsay"; // this is the ES6 way

// to use import syntax, we need to put
// "type": "module"
// in our package.json

const cowsaid = cowsay.say({
  text: "Hello class",
  e: "–O",
  T: "U ",
});

console.log(cowsaid);

const cowthought = cowsay.think({ text: "zzzzz", e: "––", t: "" });
console.log(cowthought);

console.log("Hello, I am JavaScript, but I am running in your terminal.");
console.log("Hello JavaScript, you are very welcome here.");
