// an array is just a list of things
const colours = ["tomato", "teal", "cadetblue", "red"];
console.log(colours); // this logs the entire array

// GETTING SPECIFIC ITEMS FROM THE ARRAY
console.log(colours[0]); // this will get me the item with the INDEX of 0
console.log(colours[3]); // this will get me the item with the INDEX of 3

// ADDING ITEMS TO THE END OF AN ARRAY
colours.push("green");
console.log(colours);

// REMOVING ITEMS FROM THE END OF AN ARRAY
colours.pop();
console.log(colours);

// ADD AN ITEM TO THE START OF AN ARRAY
colours.unshift("orange");
console.log(colours);

// REMOVE AN ITEM FROM THE START OF AN ARRAY
colours.shift();
console.log(colours);

// SEEING THE ITEM WE HAVE REMOVED
const removedColour = colours.pop(); // this is because pop() returns the value it removed
console.log(removedColour);

// REMOVING A SPECIFC ITEM FROM THE ARRAY
// ["tomato", "teal", "cadetblue"]
colours.splice(1, 1, "fuchsia", "hotpink");
console.log(colours); // ["tomato", "fuchsia", "hotpink", "cadetblue"]

// this is a horrifying mess... but its allowed
// so long as each item is separated by a comma, it can be in your array
// const mixedUpArray = [10, true, "yelp this is wrong", ["woah"]]; // this is naughty don't do it
