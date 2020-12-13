/**
 * Write a program to find the n-th ugly number.
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 *
 * Note:
 * 1 is typically treated as an ugly number.
 * n does not exceed 1690.
 * @author zheng
 * @date 2020/12/13 13:37:09
 */

/**
 * Runtime: 104 ms, faster than 38.82% of JavaScript online submissions for Ugly Number II.
 * Memory Usage: 43 MB, less than 25.88% of JavaScript online submissions for Ugly Number II.
 * O(T)=O(N)
 * O(S)=O(N)
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
	if (n < 1) return 0;
	if (n == 1) return 1;
	let time1 = 0,
		time2 = 0,
		time3 = 0;
	let dp = [1];
	let idx = 1;
	while (idx < n) {
		dp[idx] = Math.min(dp[time1] * 2, dp[time2] * 3, dp[time3] * 5);
		if (dp[idx] == dp[time1] * 2) time1++;
		if (dp[idx] == dp[time2] * 3) time2++;
		if (dp[idx] == dp[time3] * 5) time3++;
		idx++;
	}
	return dp[n - 1];
};
