/**
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 * You can assume that you can always reach the last index.
 */

/**
 * O(T)=O(n^2)
 * O(S)=O(n)
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	if (!nums || !nums.length) {
		return 0;
	}
	let maxSize = nums.length;
	let dp = new Array(maxSize).fill(Number.MAX_SAFE_INTEGER);
	dp[0] = 0;
	for (let i = 0; i < maxSize; i++) {
		for (let j = 0; j <= nums[i]; j++) {
			if (i + j >= maxSize) continue;
			dp[i + j] = Math.min(dp[i] + 1, dp[i + j]);
			// console.log(`[${i}, ${j}] : ${dp[i]} - ${dp[j]} - ${dp}`);
		}
	}
	return dp[dp.length - 1];
};

/**
 * O(T)=O(n)
 * O(S)=O(1)
 * @param {number[]} nums
 * @return {number}
 */
var jumpWithGreedy = function (nums) {
	if (!nums || !nums.length) {
		return 0;
	}

	let result = 0;
	let curEnd = 0;
	let maxStep = 0;

	// 这里i<nums.length-1，是因为i=0时计算了一次跳动，最后一步跳到最后一个元素就不需要计算了
	for (let i = 0; i < nums.length - 1; i++) {
		maxStep = Math.max(maxStep, nums[i] + i); //每个元素所能跳的最大步数

		// i==curEnd 表示一次跳动结束
		if (i == curEnd) {
			result++;
			curEnd = maxStep; //这一轮里找到下次最大的跳动步数
		}
	}
	return result;
};

jump([1, 2, 3, 4]);
