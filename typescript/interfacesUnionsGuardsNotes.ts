import React from "react";

// * Extending an Interface
// We can extends an interface
// this is useful when we want to create a new interface that has all the properties of another interface
// ! Syntax
// interface InterfaceName extends InterfaceName {}

interface ButtonProps {
  label: string;
  onClick: () => void;
}

interface Image {
  src: string;
}

// interface User {
//   username: string;
// }

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={() => onClick()}>{label}</button>;
}

// ^ IconButtonProps without extending ButtonProps
// interface IconButtonProps {
//   label: string;
//   onClick: () => void;
//   icon: string;
// }

// function IconButton({ label, onClick, icon }: IconButtonProps) {
//   return (
//     <button onClick={() => onClick()}>
//       <i className={icon}></i>
//       {label}
//     </button>
//   );
// }

// ^ IconButtonProps extending ButtonProps
interface IconButtonProps extends ButtonProps {
  icon: string;
}

function IconButton({ label, onClick, icon }: IconButtonProps) {
  return (
    <button onClick={() => onClick()}>
      <i className={icon}></i>
      {label}
    </button>
  );
}

// * Union Types
// We can use the | operator to specify that a variable can have multiple types

// function printNumber(value: number) {
//   console.log(value);
// }

// function printString(value: string) {
//   console.log(value);
// }

// * Type Narrowing with Type Guards
// Narrowing -> when we reduce the type of a variable
// Type Guard -> a way to check the type of a variable
function print(value: string | number | string[] | Image) {
  if (typeof value === "string") {
    value.toUpperCase();
  }
  if (typeof value === "number") {
    Math.round(value);
  }
  if (Array.isArray(value)) {
    value;
  }
  if (typeof value === "object" && !Array.isArray(value)) {
    value.src;
  }
  console.log(value);
}

print(10);
print("Hello");
print(["hello", "world"]);
print({ src: "img.png" });

// * Custom Type Guards
// We can create our own type guards
// ! Synatx
// function name(parameter: type): parameter is type
function isUser(value: User | Image): value is User {
  return "username" in value;
}

// * Type Predicates
// A type predicate is a function that returns a boolean
// and is used to check the type of a variable
function logOutput(value: User | Image) {
  // if we do it like this, we will get an error because both properties return true
  // if (typeof value === "object") {
  //   value;
  // }

  // instead, we use in operator -> if ("username" in value)
  // or we can use our custom type guard
  if (isUser(value)) {
    console.log(value.username);
  } else {
    console.log(value.src);
  }
}

logOutput({ src: "img.png" });
logOutput({ username: "john" });

// * Optional properties
// We can make properties optional by adding a ? after the property name
// ! Syntax
// interface InterfaceName {
//   property?: type;
// }

interface UserProfile {
  likes: string[];
}

interface User {
  id: string;
  username: string;
  profile?: UserProfile;
}

const user: User = {
  id: "123",
  username: "me",
  profile: {
    likes: ["cats", "dogs"],
  },
};

if (user.profile) {
  user.profile.likes;
}

user.profile?.likes;

// ^ Example in function

function logValue(value: string, message?: string) {
  if (message) {
    console.log(message, value);
  } else {
    console.log(value);
  }
}

logValue("Hello");
logValue("Hello", "Greeting:");
