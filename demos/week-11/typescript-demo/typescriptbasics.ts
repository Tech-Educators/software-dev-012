

// we have severals types of data in javascript 

let myNumber = 42;

let myString = 'String';

let myBoolean = true;


// complex data types

let myArray = []

let myObject = {}

// how do we 'type' them. 


let myNumberTyped:number = 42;

let myStringTyped:string = 'String';

let myBooleanTyped:boolean = true;


// complex data types

let myArrayTyped: [] = []

let myObjectTyped: {name: string} = {
    name: 'Sam'
}



// typing things in arrays 
// you can specify that it only takes three numbers in the array

// let myArray2: [number, number, string]= [1,2,'hello', 4] // errors because 4 elements instead of 3

let myArray3: number[] = [11,23,1,4,3,1,23]

// second syntax for this 
let myArray4: Array<string> = ['string', 'hello', 'this works too']


let myArrayMixed:(number | string)[] = ['string', 42] // we can mix types in arrays like this.


// we can make things called types. 
// this is to save us time when describing objects. 

let myInfo: {name: string, age: number, city: string} = {
    name: "Sam",
    age: 25,
    city: "Liverpool"
}

// lets create a 'type' for our information instead.

type dogInfo = {
    name: string,
    color: string,
    type: string,
    cute: boolean
}

let myPetDarcy: dogInfo = {
    name: 'Darcy',
    color: 'Brown',
    type: 'Small',
    cute: true
}


// we can also 'type' functions if needed
// define parameter types by using :
// define return type after parenthesis() 
function sum(a: number, b: number):number {
    return a + b
}

// typescript will 'infer' types. 

// dont have to explictly add the type. 
let myCoolNumber = 54
// myCoolNumber = 'sam'

// only use Any if you cannot find types for something or have some strange dynamic data.
let novalue:any;


// union types

type classes = 'physics' | 'art' | 'history'

// @ts-ignore
let myClass:classes = "asdfasd" // errors because asdfasd isn't in the 'classes' type

// lets define a type for our tree object to follow

type treeTypes = {
    typeOfTree: 'fir' | 'oak' | 'willow' | 'cherry',
    evergreen: boolean,
    age: number,
    img_url?: string // use the ? to say 'this is optional' 
}

let myArrayOfTrees: treeTypes[] = [
    {
        typeOfTree: 'fir',
        evergreen: true,
        age: 400,  
    },{
        typeOfTree: 'oak',
        evergreen: true,
        age: 400,
        img_url: 'asdfasdfasdf'
    }
]