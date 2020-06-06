/**
 * Given an unsorted array of integers,
 * find the length of the longest consecutive elements sequence.
 * Your algorithm should run in O(n) complexity.
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	if (!nums.length) {
		return 0;
	}
	nums.sort((a, b) => a - b);
	nums = [...new Set(nums)];
	let dp = new Array(nums.length).fill(1); //[1];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1] + 1) {
			dp[i] = dp[i - 1] + 1;
		} else {
			dp[i] = 1;
		}
	}

	return Math.max(...dp);
};

let arr = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
let res = longestConsecutive(arr);
console.log(res);

// 创建指定长度的数组，并填充1
// let a = new Array(8).fill(1);
// console.log(a);
