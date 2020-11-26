/**
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed,
 * the only constraint stopping you from robbing each of them is that adjacent houses have security system connected
 * and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of each house,
 * determine the maximum amount of money you can rob tonight without alerting the police.
 *
 * Constraints:
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 400
 * @author zheng
 * @date 2020/11/26 19:47:59
 */

/**
 * recursion time limit exceeded
 * @param {number[]} nums
 * @return {number}
 */
var robWithRecursion = function (nums) {
	let dp = (nums, start) => {
		if (start >= nums.length) {
			return 0;
		}
		// not rob, rob
		return Math.max(dp(nums, start + 1), nums[start] + dp(nums, start + 2));
	};

	return dp(nums, 0);
};

/**
 * recursion + memorization
 * Runtime: 96 ms, faster than 5.25% of JavaScript online submissions for House Robber.
 * Memory Usage: 38 MB, less than 94.81% of JavaScript online submissions for House Robber.
 * @param {number[]} nums
 * @return {number}
 */
var robWithRecursion = function (nums) {
	let memo = [];
	let dp = (nums, start) => {
		if (start >= nums.length) {
			return 0;
		}
		if (memo[start] != undefined || memo[start] != null) return memo[start];
		// not rob, rob
		memo[start] = Math.max(dp(nums, start + 1), nums[start] + dp(nums, start + 2));
		return memo[start];
	};

	return dp(nums, 0);
};
