// we have severals types of data in javascript 
var myNumber = 42;
var myString = 'String';
var myBoolean = true;
// complex data types
var myArray = [];
var myObject = {};
// how do we 'type' them. 
var myNumberTyped = 42;
var myStringTyped = 'String';
var myBooleanTyped = true;
// complex data types
var myArrayTyped = [];
var myObjectTyped = {
    name: 'Sam'
};
// typing things in arrays 
// you can specify that it only takes three numbers in the array
// let myArray2: [number, number, string]= [1,2,'hello', 4] // errors because 4 elements instead of 3
var myArray3 = [11, 23, 1, 4, 3, 1, 23];
// second syntax for this 
var myArray4 = ['string', 'hello', 'this works too'];
var myArrayMixed = ['string', 42]; // we can mix types in arrays like this.
// we can make things called types. 
// this is to save us time when describing objects. 
var myInfo = {
    name: "Sam",
    age: 25,
    city: "Liverpool"
};
var myPetDarcy = {
    name: 'Darcy',
    color: 'Brown',
    type: 'Small',
    cute: true
};
// we can also 'type' functions if needed
// define parameter types by using :
// define return type after parenthesis() 
function sum(a, b) {
    return a + b;
}
// typescript will 'infer' types. 
// dont have to explictly add the type. 
var myCoolNumber = 54;
// myCoolNumber = 'sam'
// only use Any if you cannot find types for something or have some strange dynamic data.
var novalue;
// @ts-ignore
var myClass = "asdfasd"; // errors because asdfasd isn't in the 'classes' type
var myArrayOfTrees = [
    {
        typeOfTree: 'fir',
        evergreen: true,
        age: 400,
    }, {
        typeOfTree: 'oak',
        evergreen: true,
        age: 400,
        img_url: 'asdfasdfasdf'
    }
];
