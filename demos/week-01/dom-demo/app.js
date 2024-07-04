console.log("Hello world");
console.log(document);

// let is a variable
// const is a constant
// we use const for our DOM nodes because they will ALWAYS be THAT DOM node

// using the document we can select a specific element on the page
const title = document.querySelector("h1");
console.log(title);

// we can use querySelecter with ANY valid CSS selector
const bestPTag = document.querySelector(".best-tag");
console.log(bestPTag);

// if I have multiple items with the same class (like best-tag)
// querySelector will get the FIRST item

// we can select by ID so we can be absolutely certain there is only 1 of those items
const ptagWithID = document.getElementById("my-id");
console.log(ptagWithID);

// we can use JavaScript to change the DOM Nodes in any way we like

ptagWithID.textContent = "I have been edited in JavaScript... HELP";

// we can also create new DOM Nodes
const newImg = document.createElement("img");
const imgContainer = document.getElementById("img-container");
imgContainer.appendChild(newImg);
newImg.src = "./tomato.jpg";

// appending text to the end of an existing element
bestPTag.textContent = bestPTag.textContent + " something extra";
// this sets the value to be WHAT IS ALREADY IS plus something extra
