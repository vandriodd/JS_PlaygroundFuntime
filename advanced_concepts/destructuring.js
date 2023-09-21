// Destructuring -> access to properties from objects and bind them to variables

const dog = {
  name: 'fido',
  age: 4,
  bark() {
    console.log('woof');
  }
};

// Dot notation `object.propertyName`
/* const name = dog.name;
const age = dog.age; */

// ↓ Object destructuring ↓
/* const { name: fullName, age } = dog; */ // `{ propertyName } = object`
const { name: fullName, age } = dog; // Destructurin with alias `{ propertyName: newName } = object `

// ↓ Array destructuring ↓
const arr = ['foo', 'bar', 'baz'];
/* const [a, b, c] = arr; */ // Position matters, each variable is asigned to match position
const [, , c] = arr; // Equals to `const c = arr[2];`
