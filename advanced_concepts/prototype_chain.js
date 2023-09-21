// Prototype chaining -> Inheritance of properties/methods

const animal = {
  dna: 123,
  legs: {
    front: 2,
    back: 2
  }
};

// Base object (like parent)
const p1 = Object.getPrototypeOf(animal); // -> [Object: null prototype] {}
console.log(p1);

// Prototype of prototype
const p2 = Object.getPrototypeOf(p1); // -> null because we reach the end of the Prototype chain
console.log(p2);

const dog = {
  bark() {
    console.log('woof');
  }
};

// Extends the prototype chain -> animal parent of the dog
// Dog inherits all properties of animal
Object.setPrototypeOf(dog, animal);
console.log(Object.getPrototypeOf(dog)); // Prints animal object
