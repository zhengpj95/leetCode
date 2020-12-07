/**
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed.
 * All houses at this place are arranged in a circle.
 * That means the first house is the neighbor of the last one.
 * Meanwhile, adjacent houses have a security system connected,
 * and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 1000
 * @author zheng
 * @date 2020/12/07 22:55:40
 */

/**
 * Runtime: 76 ms, faster than 75.62% of JavaScript online submissions for House Robber II.
 * Memory Usage: 38.5 MB, less than 54.30% of JavaScript online submissions for House Robber II.
 *
 * 既然houses[n]和houses[1]是相连的，
 * 那么抢 houses[1]-houses[n-1] 或者 houses[2]-houses[n]，houses[1]和houses[n]就不会被同时抢到了
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (!nums || !nums.length) return 0;
	if (nums.length <= 3) return Math.max(...nums);

	let dp = [nums[0], Math.max(nums[0], nums[1])];
	for (let i = 2; i < nums.length - 1; i++) {
		dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
	}

	let dp1 = [0, nums[1], Math.max(nums[1], nums[2])];
	for (let i = 3; i < nums.length; i++) {
		dp1[i] = Math.max(nums[i] + dp1[i - 2], dp1[i - 1]);
	}
	return Math.max(dp[dp.length - 1], dp1[dp1.length - 1]);
};

/**
 * Recursion
 * @param {number[]} nums
 */
var rob2 = function (nums) {
	if (!nums || !nums.length) return 0;
	if (nums.length <= 3) return Math.max(...nums);

	let subRob = (nums, start, end) => {
		let [rob, notrob] = [0, 0];
		for (let i = start; i <= end; i++) {
			[rob, notrob] = [notrob + nums[i], Math.max(notrob, rob)];
		}
		return Math.max(rob, notrob);
	};
	return Math.max(subRob(nums, 0, nums.length - 2), subRob(nums, 1, nums.length - 1));
};

let nums = [2, 3, 2];
nums = [3];
console.log(rob(nums));
console.log(rob2(nums));
