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
var robWithRecursionandMemo = function (nums) {
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

/**
 * bottom-up
 * Runtime: 72 ms, faster than 92.22% of JavaScript online submissions for House Robber.
 * Memory Usage: 38.6 MB, less than 41.96% of JavaScript online submissions for House Robber.
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (!nums || !nums.length) return 0;
	if (nums.length <= 2) return Math.max(...nums);
	let dp = [];
	dp[0] = [nums[0], 0]; //[rob, not rob]
	dp[1] = [nums[1], nums[0]];
	for (let i = 2; i < nums.length; i++) {
		// 抢：当前的值+dp[i-2]中抢与不抢的最大值
		// 不抢：dp[i-1]中的最大值
		dp[i] = [nums[i] + Math.max(...dp[i - 2]), Math.max(...dp[i - 1])];
	}
	return Math.max(...dp[dp.length - 1]);
};

/**
 * dp[i] 表示到当前房子时抢到的最大金额，不分抢不抢当前房子情况
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function (nums) {
	let dp = [nums[0], Math.max(nums[0], nums[1])];
	for (let i = 2; i < nums.length; i++) {
		dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
	}
	return dp[nums.length - 1] || 0;
};

let nums = [1, 2, 3, 1];
// nums = [2, 7, 9, 3, 1];
nums = [2, 1, 1, 2];
console.log(rob(nums));
