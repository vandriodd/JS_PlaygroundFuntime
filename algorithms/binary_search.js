// Create a function that given a sorted array and a target value, returns the index of the target value or -1 if it's not in the array

/* const arr = ['a', 'b', 'c', 'x', 'y', 'z'];

export function search(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == target) return i;
	}
} */

export function search(arr, target, start = 0, end = arr.length - 1) {
	if (start > end) return -1;

	const middle = Math.floor((start + end) / 2);

	if (arr[middle] === target) return middle;
	if (arr[middle] > target) {
		return search(arr, target, start, middle - 1); // search the left half
	}
	if (arr[middle] < target) {
		return search(arr, target, middle + 1, end); // search the right half
	}
}
