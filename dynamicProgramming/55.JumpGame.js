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

console.log(canJumpWithDP([3, 2, 1, 0, 4]));
console.log(canJumpWithDP([2, 3, 1, 1, 4]));
