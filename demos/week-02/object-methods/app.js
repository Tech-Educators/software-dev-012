// METHODS WE'VE ALREADY USED
// .log()
// .push()
// .querySelector
// .addEventLister
// .splice()
// .unshift()
// .pop()
// .shift()
// .remove()
// .appendChild()
// .getElementById()
// .createElement()

// METHOD EXAMPLE THAT CHANGES A PROPERTY OF THE OBJECT
const person = {
  name: "Frederick",
  age: 32,
  hobbies: ["Dancing", "Skateboarding", "Making Potpourri"],
  incAge: function () {
    person.age = person.age + 1;
  },
};

// congratulations freddie boi, its yo birthday!
person.age = person.age + 1;
// wow this is taking so long, if only there was a way to "automate" this
// look at line 20, and pretend you didn't already see it

person.incAge();

console.log(person);

// METHOD EXAMPLE THAT ADDS SOMETHING TO THE DOM
const theme1 = {
  backround: "tomato",
  text: "white",
  font: "monospace",
  select: function () {
    document.body.style.backgroundColor = theme1.backround;
    document.body.style.color = theme1.text;
    document.body.style.fontFamily = theme1.font;
  },
};

const theme2 = {
  background: "teal",
  text: "orange",
  font: "fantasy",
  select: function () {
    document.body.style.backgroundColor = theme2.background;
    document.body.style.color = theme2.text;
    document.body.style.fontFamily = theme2.font;
  },
};
