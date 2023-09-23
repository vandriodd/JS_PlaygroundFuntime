// Closure → is a function that has access to the parent scope, even after the parent function has closed
// Is used for data encapsulation, allowing the access to data through specific functions

// ↓ Lexical environment ↓
const state = '🧸💜';

function callMe() {
	console.log(`Hi ${state}`);
}

// Not a closure
// No external data, is a fully self-contained closed expression
// variables are removed from the stack when memory is cleared
function pureFun(a, b) {
	return a + b;
}

// ↓ Closure ↓
// The function `impureFun` it accesses the variable `b` from its parent scope
// variables persist on memory
let b = 3;

function impureFun(a) {
	return a + b;
}

// ! Call stack memory is short-lived, and heap memory can keep data indefinitely

// This function defines a local variable `x` that can be accessed by inner function
function outer() {
	let x = 1;
	// Inner can also modify the variable of its parent scope
	function inner() {
		x = x + 1; // creates a closure to save the value of `x` in memory
	}
	return inner;
}

// Higher function that holds the inner function and is called to modify the value of `x`
const incrementX = outer();
incrementX(); // x = 2
incrementX(); // x = 3
