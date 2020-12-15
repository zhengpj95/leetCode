/**
 *
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

	// 凑数的种类
	let prime = [0, 1];
	for (let i = 2; i * i <= n; i++) {
		prime[i] = i * i;
	}

	if (prime.indexOf(n) >= 0) return 1;

	let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
	dp[0] = 0;
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j < prime.length; j++) {
			if (i < prime[j]) {
				// 当前凑数的种类比要凑的数大了（硬币种类比要凑的币值都大了）
				break;
			}
			dp[i] = Math.min(dp[i], dp[i - prime[j]] + 1);
		}
	}
	// console.log(dp)
	return dp[n];
};
