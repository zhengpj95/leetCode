/**
 * Given an integer array nums,
 * find the contiguous subarray within an array (containing at least one number) which has the largest product.
 * 最大子数组乘积
 * @author zheng
 * @date 2020/12/04 22:12:22
 */

/**
 * 分开两步看待，如果nums都是正整数或者全是负数时，维持一个dp数组即可
 * 但是这里nums不分，也就是负负得正，所以需要维持一个最小的dp数组
 * Runtime: 76 ms, faster than 94.22% of JavaScript online submissions for Maximum Product Subarray.
 * Memory Usage: 40.8 MB, less than 16.46% of JavaScript online submissions for Maximum Product Subarray.
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let maxDp = new Array(nums.length);
	let minDp = new Array(nums.length);
	//维持最大和最小的子数组
	maxDp[0] = nums[0];
	minDp[0] = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > 0) {
			maxDp[i] = Math.max(nums[i], nums[i] * maxDp[i - 1]);
			minDp[i] = Math.min(nums[i], nums[i] * minDp[i - 1]);
		} else {
			maxDp[i] = Math.max(nums[i], nums[i] * minDp[i - 1]);
			minDp[i] = Math.min(nums[i], nums[i] * maxDp[i - 1]);
		}
	}
	return Math.max(...maxDp);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct2 = function (nums) {
	let res = nums[0],
		max = nums[0],
		min = nums[0];

	for (let i = 1; i < nums.length; i++) {
		let item = nums[i];
		let curMax = 0;
		let curMin = 0;
		if (item > 0) {
			curMax = Math.max(item, item * max);
			curMin = Math.min(item, item * min);
		} else {
			curMax = Math.max(item, item * min);
			curMin = Math.min(item, item * max);
		}
		max = curMax;
		min = curMin;
		res = Math.max(res, max);
	}
	return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct3 = function (nums) {
	let res = nums[0],
		max = nums[0],
		min = nums[0];

	for (let i = 1; i < nums.length; i++) {
		let item = nums[i];
		let curMax = Math.max(item, item * (item > 0 ? max : min));
		let curMin = Math.min(item, item * (item > 0 ? min : max));
		max = curMax;
		min = curMin;
		res = Math.max(res, max);
	}
	return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct4 = function (nums) {
	if (!nums || !nums.length) {
		return 0;
	}
	let max = nums[0];
	let min = nums[0];
	let result = max;

	for (let i = 1; i < nums.length; i++) {
		let tmpMax = max;
		max = Math.max(tmpMax * nums[i], min * nums[i], nums[i]);
		min = Math.min(tmpMax * nums[i], min * nums[i], nums[i]);
		result = Math.max(result, max);
	}
	return result;
};

let nums = [-4, -3, -2];
console.log(maxProduct3(nums));
