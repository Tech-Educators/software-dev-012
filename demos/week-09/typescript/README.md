# TypeScript

## TYPE DECLARATIONS

We are telling myName that it HAS to be be a string and myNumber HAS to be a number.

```ts
const myName: string = "Tim";
const myNumber: number = 420;
```

## PARAMETER TYPES

We are telling this function that is HAS to take number params

```ts
function sum(a: number, b: number) {
  console.log(a + b);
}
```

if we try and give string params it will show us the error right there and then... magics

```ts
sum(400, "20"); // this line errors
sum(400, 20); // this line DOESN'T error... it cooks
```

## ARRAY TYPES

We can force an array to have a specific type of item inside

```ts
const myNumArray: number[] = [1, "tim", 420]; // this is moaning to tell us that "tim" is not a number
```

## CUSTOM TYPES

We can define our own types that variables must conform to.

```ts
type person = {
  name: string;
  age: number;
  handsome: boolean;
  beautiful?: boolean; // this proerty is optional
};
```

Then we can declare variables as those types.

```ts
const tim: person = {
  name: "Tim",
  age: 29,
  handsome: true,
};

const heinry: person = {
  name: "Heinry",
  age: 29,
  handsome: false,
  beautiful: true,
};

const frankie: person = {
  name: "Frankie",
  age: 70,
  handsome: false,
};
```

Take note of how we aren't telling this `jez` variable it has to be a `person` type, we will revisit this at the end.

```ts
const jez = {
  name: "Jez",
  age: 21,
  handsome: false,
};
```

So now we can create an array that must have people ONLY.

```ts
const people: person[] = [tim, heinry, frankie, jez];
```

Notice how `jez` is allowed in the array, even though he isn't a `person` because his object follows the RULES of the type `person`.
