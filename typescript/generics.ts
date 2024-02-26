// * Generics
// Makes it easir to write functions, interfaces, and more that work with a variety of types

// function wrapInArray(value: string): string[] {
//   return [value];
// }

// const result = wrapInArray("hello generics");
// const result2 = wrapInArray(10); // Error because the function is expecting a string

// We can use generics to make the function work with any type

// 2 ways to solve this
// 1. Type Union
// function wrapInArray(value: string | number): (string | number)[] {}

//  2. Generics
// ! Syntax
// function name<Type>(parameter: Type): Type[] {}
// usually we use T as the type parameter name
function wrapInArray<TypeToWrap>(value: TypeToWrap): TypeToWrap[] {
  return [value];
}

// and then we can call the function with any type by specifying the type in angle brackets
const result = wrapInArray<string>("hello generics");
const result2 = wrapInArray<number>(10);

// * Multiple generic types
// We can also use generics with multiple parameters
// ! Syntax
// function name<Type1, Type2>(parameter1: Type1, parameter2: Type2): void {}
// the order of the type parameters doesn't matter, it works the same way
function toRecord<TypeOfId, TypeOfValue>(id: TypeOfId, value: TypeOfValue) {
  return {
    id,
    value,
  };
}

const result3 = toRecord<number, string>(123, "my@gmail.com");
const result4 = toRecord<string, number[]>("123", [1, 2, 3]);

// another e.g.

function randomElement<T>(arr: T[]) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const random = randomElement<number>([1, 2, 3, 4, 5]);
const random2 = randomElement<string>(["a", "b", "c", "d"]);

// * Generics with fetch
// We can use generics with fetch to specify the type of the data we are fetching
// ! Syntax
// fetch<Type>("url").then((res) => res.json());

interface User {
  username: string;
}

interface Message {
  content: string;
}

// interface Image {
//   url: string;
// }

// ! It's repetitive to use the same type assertion every time we fetch data
// async function fetchUser() {
//   const res = await fetch("/users");
//   // json is a variable of type any by default
//   const json = await res.json();

//   // force TypeScript to treat json as a User type
//   return json as User;
// }

// async function fetchMessage() {
//   const res = await fetch("/messages");
//   const json = await res.json();

//   return json as Message;
// }

// async function fetchImage() {
//   const res = await fetch("/images");
//   const json = await res.json();

//   return json as Image;
// }

// So, time to use Generics to make the code DRY!

async function fetchData<T>(path: string): Promise<T> {
  const res = await fetch(path);
  const json = await res.json();

  return json as T;
}

const run = async () => {
  const user = await fetchData<User>("/users");
  const message = await fetchData<Message>("/messages");
  const image = await fetchData<Image>("/images");
};

// * Generic Type Inference
// TypeScript can infer the type of a generic based on the value we pass to the function

function wrapInArray2<T>(value: T): T[] {
  return [value];
}

const array = wrapInArray2("something"); // TypeScript knows that array is a string[]
const array2 = wrapInArray2(10); // TypeScript knows that array2 is a number[]

// * Generic Type Constraints
// A constraint is a way to tell TypeScript that a generic type must be or extend a certain type
// ! Syntax
// function name<Type extends Constraint>(parameter: Type): Type[] {}
// We use extends to specify the constraint, 'extends' means 'must be'

function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergeResult = merge({ id: "asfd" }, { color: "red" });

// another e.g.

interface Product {
  name: string;
  count: number;
}

// keyof -> operator that takes an object type and produces a string or numeric literal union of its keys
type ProductKeys = keyof Product; // "name" | "count"

const key: ProductKeys = "count";

// T extends keyof U -> T must be a key of U
// U extends object -> U must be an object
function collect<T extends keyof U, U extends object>(key: T, arr: U[]) {
  return arr.map((el) => el[key]); // U[T]
}

const collectResult = collect("name", [
  { count: 1, name: "A" },
  { count: 2, name: "B" },
]);
