/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
	let min = Math.min(...nums);
	let moves = 0;
	for (let num of nums) {
		moves += num - min;
	}
	return moves;
};

let nums = [2, 3, 4];

console.log(minMoves(nums));
