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
};

/**
 * DP解法
 * O(T)=O(n)
 * O(S)=O(n)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayWithDP = function (nums) {
	if (!nums || !nums.length) return 0;

	let dp = [nums[0]];
	let res = dp[0];
	for (let i = 1; i < nums.length; i++) {
		dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
		if (dp[i] > res) res = dp[i];
	}
	return res;
};

const maxSubArray2 = function (nums) {
	if (!nums.length) {
		return 0;
	}

	let dp = nums[0];
	let res = dp;

	for (let i = 1; i < nums.length; i++) {
		dp = Math.max(nums[i], nums[i] + dp);
		res = Math.max(res, dp);
	}
	return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, -1]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([]));
