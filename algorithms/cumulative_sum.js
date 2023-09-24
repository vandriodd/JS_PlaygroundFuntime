// Create a function that takes an array of numbers and returns a number that is the summ of all values in the array

// const arr = [1, 3, 5, 7];

// With reduce method
const sum = [1, 3, 5, 7].reduce((acc, cur) => acc + cur, 0);

// Without
function sum(arr) {
	let total = 0;

	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

console.log(`Sum: ${total}`);
