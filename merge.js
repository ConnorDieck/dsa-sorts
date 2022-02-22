function merge(arr1, arr2) {
	const out = [];
	let left = 0;
	let right = 0;

	while (left < arr1.length && right < arr2.length) {
		if (arr1[left] < arr2[right]) {
			out.push(arr1[left]);
			left++;
		} else {
			out.push(arr2[right]);
			right++;
		}
	}
	while (left < arr1.length) {
		out.push(arr1[left]);
		left++;
	}
	while (right < arr2.length) {
		out.push(arr2[right]);
		right++;
	}

	return out;
}

function mergeSort(arr) {
	// Base case
	if (arr.length <= 1) return arr;

	// Normal case
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

module.exports = { merge, mergeSort };
