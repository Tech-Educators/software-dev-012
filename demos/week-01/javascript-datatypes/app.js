// variables recap
// we can store information in variables like this
let myName = "Jez";

// and we can view our variables value in the console like this
console.log(myName);

// a variable can have its value reassigned
let jezIsCool = true;
// here we see that it has the value of true
console.log(jezIsCool);

// then we change it
jezIsCool = false;
// here we see the value is false
console.log(jezIsCool);

// DATA TYPES
// strings - anything between ""
let myString = "This is my string. How quaint.";
let myConfusingString = "10";
let mySecondConfusingString = "true";

// numbers
let myAge = 500;
let score = 0;
let myBankBalance = -100;
let year = 2024;
let myDecimal = 0.1;

// booleans
let timIsHandsome = true;
let timHasAFullHeadOFHair = false;

// STRING CONCATENATION
let str1 = "Hello";
let str2 = "world";

let str3 = str1 + str2; // Helloworld
let str4 = str1 + " " + str2; // Hello world

// TEMPLATE LITERALS
// we use ` instead of " for these. They are called backticks
let templateLit = `${str1} ${str2}`; // Hello world

// ARITHMATIC
let a = 11;
let b = 21;

let sum = a + b; // 32
let product = a * b; // 231
let quotient = a / b; // 0.52380952381
let difference = a - b; // -10
let modulo = a % b; // 11
let betterModulo = b % a; // 10

// RESTRICTIONS
// A variable can be name ANTHING with the following exceptions
// it cannot be a JavaScript reserved work like: let, function etc
// it cannot include special characters expect for _ and numbers
// it cannot start with a number

// NAMING CONVENTIONS
let flatcase;
let snake_case;
let PascalCase;
let camelCase;
// the below are silly and we do use them (unless we are feeling silly)
let strName = "Hungarian case starts with the type, then the meaning";
let nUTcaSe;
let SCREAMINGCASE;
