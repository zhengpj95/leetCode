/**
 * Given an unsorted array of integers,
 * find the length of longest increasing subsequence.
 *
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	let len = nums.length;
	let dp = [];
	for (let i = 0; i < len; i++) {
		dp[i] = 1; //初始都是1，因为包括自身长度
	}

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}

	let res = 0;
	for (let i = 0; i < len; i++) {
		res = Math.max(res, dp[i]);
	}
	return res;
};
