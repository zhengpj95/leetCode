/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
	// nums.sort((a, b) => a - b);
	// let min = Number.MAX_SAFE_INTEGER;
	// for (let i = 0; i < nums.length; i++) {
	// 	let cnt = 0;
	// 	for (let j = 0; j < nums.length; j++) {
	// 		cnt += Math.abs(nums[j] - nums[i]);
	// 	}
	// 	min = Math.min(min, cnt);
	// }
	// return min;

	nums.sort((a, b) => a - b);
	let mid = Math.floor(nums.length / 2);
	let midNum = nums[mid];
	let rst = 0;
	for (let num of nums) {
		if (num != midNum) {
			rst += Math.abs(num - midNum);
		}
	}
	return rst;
};

let nums = [1, 33, 2, 3];
// nums = [1, 10, 2, 9];
console.log(minMoves2(nums));
