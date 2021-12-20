/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
	arr.sort((a, b) => a - b);
	let min = Infinity;
	let result = [];
	for (let i = 1; i < arr.length; i++) {
		let diff = arr[i] - arr[i - 1];
		if (diff == min) {
			result.push([arr[i - 1], arr[i]]);
		} else if (diff < min) {
			min = diff;
			result = [];
			result.push([arr[i - 1], arr[i]]);
		}
	}
	return result;
};
