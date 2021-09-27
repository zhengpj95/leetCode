/**
 * You are given an integer array nums.
 * You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 */

/**
 * O(T)=O(n^2)
 * O(S)=O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var canJumpWithDP = function (nums) {
	if (!nums || !nums.length) {
		return false;
	}
	let size = nums.length;
	let dp = new Array(size).fill(Number.MAX_SAFE_INTEGER);
	dp[0] = 0;
	for (let i = 0; i < size; i++) {
		for (let j = 0; j <= nums[i] && i + j < size; j++) {
			dp[i + j] = Math.min(dp[i] + 1, dp[i + j]);
			// console.log(`[${i}, ${j}] : ${dp[i]} - ${dp[j]} - ${dp}`);
		}
	}
	return dp[dp.length - 1] != Number.MAX_SAFE_INTEGER;
};

/**
 * O(T)=O(n)
 * O(S)=O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var canJumpWithGreedy = function (nums) {
	if (!nums || !nums.length) {
		return false;
	}

	let curEnd = 0;
	let maxStep = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		maxStep = Math.max(maxStep, nums[i] + i);
		// console.log(`${i} - ${nums[i] + i} - ${maxStep}`);

		// 当前元素是0的，且其不等于最后一个，而且最大步数还是当前，已进入死循环
		if (maxStep == nums[i] + i && nums[i] == 0 && i != nums.length - 1) {
			return false;
		}
		if (i == curEnd) {
			curEnd = maxStep;
		}
	}
	return maxStep >= nums.length - 1;
};

/**
 * O(T)=O(n)
 * O(S)=O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var canJumpWithGreedy2 = function (nums) {
	// let step = 0;
	// let i = 0;
	// for (; i < nums.length && i <= step; i++) {
	// 	step = Math.max(nums[i] + i, step);
	// 	// console.log(i, nums[i] + i, step);
	// }
	// return i == nums.length;

	let step = 0;
	// i <= step 表示所能跳到的最大位置；如果超了这个位置还不到末尾的，定为false
	for (let i = 0; i < nums.length && i <= step; i++) {
		step = Math.max(step, nums[i] + i);
		if (step >= nums.length - 1) {
			return true;
		}
	}
	return false;
};
// console.log(canJumpWithGreedy([2, 3, 1, 1, 4]));
console.log(canJumpWithGreedy2([3, 2, 1, 0, 4, 12, 32]));
// console.log(canJumpWithGreedy([0, 2, 3]));
// console.log(canJumpWithGreedy([1, 0, 1, 0]));
