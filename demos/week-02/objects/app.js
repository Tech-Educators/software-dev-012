// recap of arrays
// arrays are good for storing lists of the same type of thing
const meArr = [
  "Tim",
  29,
  false,
  true,
  ["Bluey", "3D Printing", "Wife", "Kids"],
];
// but not great for storing different information about ONE thing

// The meArr array and meObj are not related, they just happen to have the same info!

// OBJECTS
const meObj = {
  name: "Tim",
  age: 29,
  longHair: false,
  handsome: true,
  favThings: ["Bluey", "3D Printing", "Wife", "Kids"],
};

// ACCESSING INDIVIDUAL ITEMS
//arrays
console.log(meArr[0]); // Tim
//objects
console.log(meObj["name"]); // Tim
// even better
console.log(meObj.name); // Tim

// ADDING NEW ITEMS
// arrays
meArr.push(true);
//objects
meObj.glasses = true;

// UPDATING EXISTING ITEMS
meObj.age = 30;
// add a new item to my favThings
meObj.favThings.push("SD012");

console.log(meObj);

//REAL WORLD EXAMPLE OF AN ARRAY OF OBJECTS
const products = [
  { title: "Guoda", price: 10 },
  { title: "Roquefort", price: 75 },
  { title: "Cream Cheese", price: 2 },
];

// how do I get the price of the seocnd product
console.log(products[1].price);

// CRAZYNESS (i know I saw it)
const crazyObject = {
  arrayOne: [
    "Woah",
    1,
    [
      {
        arrayThree: [{}, {}, {}, { confused: true }],
      },
    ],
  ],
  arrayTwo: "gotcha",
};

// ^ this is dumb. BUT its valid JS. That doesn't mean you should ever write code like this

// how do I access the confused property to get the value
console.log(crazyObject.arrayOne[2][0].arrayThree[3].confused);
