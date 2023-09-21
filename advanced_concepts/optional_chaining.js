// Optional chaining → allows to call object properties safely, without throwing an error

const obj = undefined;

/* console.log(obj.hello); */ // TypeError: Cannot read properties of undefined (reading 'hello')

// ↓ Old ways of checking for undefined ↓
if (obj) {
  obj.hello;
}

obj && obj.hello;

// ↓ Modern one, using optional chaining ↓
console.log(obj?.hello);
// returns undefined without throwing an error
let test = {};
console.log(test);
console.log((test.foo = 'hola'));

// ↓ Optional chaining in arrays ↓
const arr = [1, 2, 3];

console.log(arr?.[0]); // If the array is undefined, returns undefined, else gets the first element

// ↓ Optional chaining in functions ↓
// If foo is defined, calls foo with arguments 1 and 2
function foo(a, b) {
  return a + b;
}
console.log(foo?.(1, 2)); // 3
