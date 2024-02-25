// ! Syntax
// const variableName: type = value;
const color: string = "red";
const isRed: boolean = color === "red";
const age: number = 20;

// ! Arrays
// const variableName: type[] = [value1, value2, value3];
const colors: string[] = ["red", "green", "blue"];

const areColorsRed: boolean[] = [true, false, true];

const ages: number[] = [20, 30, 40];

// * Function Type Annotations

// ! Synatx
// (parameter: type, parameter:type, ...) => returnType
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `Hello, ${name}`;
}
greet(123); // Gives error because 123 is not a string

// * Type Inference
// TypeScript can infer the type of a variable based on its value

const sum = add(10, 20); // TypeScript knows that sum is a number
