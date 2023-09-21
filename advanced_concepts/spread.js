// Spread operator → allows to copy all or part of an existing array/object into another

const obj1 = {
  first: 'a',
  second: 'b',
  third: 'c'
};

/* const obj2 = {
  third: 'd',
  fourth: 'e'
}; */

// ↓ Spread operator in obj definition ↓
// Position matters, the last object overrides the previous ones
const obj2 = {
  ...obj1, // in this case, `third` property is overrided by obj2
  third: 'd',
  fourth: 'e'
  /* ...obj1 */ // but here, `third` property is overrided by obj1 → {third: 'c', fourth: 'e', first: 'a', second: 'b'}
};
console.log(obj2); // {first: 'a', second: 'b', third: 'd', fourth: 'e'}

//

/* const full = Object.assign({}, obj1, obj2);
console.log(full); */ // Assigns all properties of objects to a new object

// ↓ Spread operator ↓
const full = { ...obj1, ...obj2 }; // Also merge objects
