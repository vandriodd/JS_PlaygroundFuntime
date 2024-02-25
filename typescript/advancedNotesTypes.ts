// * Any type
// Special type that tells TypeScript to ignore type checking
// ! Try to avoid using any
// We can use an 'as' ype assertion to forcibly tell typescript what an 'any' variables type is

interface Book {
  title: string;
}

// async function fetchBook() {
//   const res = await fetch("/book");
//   const data = await res.json();
//   // until here, data is a variable of type any

//   // ^ type assertion
//   // so, we can do a type assertion to tell TypeScript that data is a Book type
//   return data as Book;
// }

// * Unknown type
// Special type that tells TypeScript that the value could be anything
// We have to do aggressive type narrowing before assuming what a 'unknown' variable's real type

async function fetchBook() {
  const res = await fetch("/book");
  // force TypeScript to treat data as a unknown type
  const data: unknown = await res.json();

  // here we have to do aggressive type narrowing to tell TypeScript that data is a Book type, and not a unknown type
  if (data && typeof data === "object" && "title" in data) {
    return data as Book;
  }

  throw new Error("Could not fetch book");
}

// * Type Aliases
// We can use type aliases to give a type a name
// ! Syntax
// type NewTypeName = type (or types)

// interface Image {
//   src: string;
// }

type Image = {
  src: string;
};

type LoggableValue = string | number | Image | string[];

function logValue(value: LoggableValue) {}

// ^ When use interface and when use type alias?
// Use interface when we want to define an object type
// Use type alias when we want to define a union type or a tuple type
