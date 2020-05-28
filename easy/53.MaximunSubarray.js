/**
 * Given an integer array nums, 
 * find the contiguous subarray (containing at least one number) 
 * which has the largest sum and return its sum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	if (!nums.length) {
		return 0;
	}
	let sum = 0;
	let min = 0;
	let max = Number.NEGATIVE_INFINITY;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		max = Math.max(max, sum - min);
		min = Math.min(min, sum);
	}
	return max;
};

const maxSubArray2 = function (nums) {
	if (!nums.length) {
		return 0;
	}
	let dp = nums[0];
	let dp1 = 0;
	let res = dp;

	for (let i = 1; i < nums.length; i++) {
		dp1 = Math.max(nums[i], nums[i] + dp);
		dp = dp1;
		res = Math.max(res, dp1);
	}
	return res;
}

const maxSubArray3 = function (nums) {
	if (!nums.length) {
		return 0;
	}

	let arr = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		arr[i] = Math.max(nums[i], nums[i] + arr[i - 1]);
	}
	arr.sort((a, b) => b - a);
	return arr[0];
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, -1]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([]));