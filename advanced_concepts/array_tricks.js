// ↓ Creating ↓

// Literal syntax
const arr = [1, 2, 3, 4, 5];

// Using Array class
const arr2 = Array(100).fill(0);

// Create a range of numbers
const arr3 = Array(100)
	.fill(0)
	.map((_, i) => i + 1); // takes index of each item and adds one to it [0, ... 99, 100]

// Returns index
const arr4 = [...Array(100).keys()];

const unique = new Set(arr);
// Or use spread operator to convert back to array
// Remove duplicates from an array
const unique2 = [...new Set(arr)];

// Get a random element
const random = arr[Math.floor(Math.random()) * arr.length];

// ↓ Looping ↓

// for...of, loops over every value and executes the code inside the braces
for (const val of arr) {
	console.log(val);
}

// for...in, iterates over property names (avoid for arrays cuz has unespecific order)
for (const idx in arr) {
	console.log(idx);
}

// Imperative style, loop over a key-value pair
for (const [idx, val] of arr.entries()) {
	console.log(idx, val);
}

// Functional style
// Takes callback function and this function provides both the value and index for each iterarion of a loop
arr.forEach();

// Converts the values in an array to a different values
arr.map();

// Removes unwanted values
arr.filter();

// Finds specific value
arr.find();

// Takes an entire array and calculate a single value from it
arr.findIndex();
arr.reduce();
