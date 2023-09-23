// Higher order function (HOF) → a function that takes a function as an argument, or returns a function

// ↓ Two main ways to define a function ↓

// 1 - Function declaration or statement:
// Uses the `function` keyword and is hoisted to the top of the file, which means you can use it or reference it anywhere else in the file
// Global code
function sayHi(message) {
	return 'Said... ' + message;
}

// 2- Function expression:
// The function is created when encountered in the code and is not hoisted
// Local code
const sayHi = function (message) {
	return 'Said...' + message;
};

// ...also can be anonymous, making them usable as arguments without names
const anon = arr.map(function (item) {
	return item * 2;
});

// ↓ Higher order functions ↓

// Callback function → is a function passed as argument to another function
function funWrapper(callback) {
	callback('Called by wrapper');
}

funWrapper(sayHi);
funWrapper((m) => console.log(m));

// Factory function → returns a function
function funCreator() {
	return function (message) {
		return 'Said...' + message;
	};
}

const fn = funCreator();
fn('hello!');
