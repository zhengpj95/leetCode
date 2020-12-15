/**
 * Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
 * @author zheng
 * @date 2020/12/15 22:48:40
 */

/**
 * 类似与凑硬币问题，但是这里对应的硬币种类是计算出来的
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
	if (n <= 0) return 0;

	// 类似凑银币问题，prime是硬币类型
	let prime = [0, 1];
	for (let i = 2; i <= n; i++) {
		prime[i] = i * i;
	}
	if (prime.includes(n)) return 1;

	let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
	dp[0] = 0;
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j < prime.length; j++) {
			if (i < prime[j]) break; //币值大于要凑的数，不符合了
			dp[i] = Math.min(dp[i], dp[i - prime[j]] + 1);
		}
	}
	return dp[n];
};
