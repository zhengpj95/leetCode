/**
 * https://leetcode.com/problems/domino-and-tromino-tiling/discuss/116581/Detail-and-explanation-of-O(n)-solution-why-dpn2*dn-1%2Bdpn-3
 *
 * dp[0] = 1, dp[1] = 1, dp[2] = 2, dp[3] = 5
 *
 * 每一项都是前面两项，以及前面n-2项的2倍的来
 * dp[n] = dp[n - 1] + dp[n - 2] + 2 * (dp[n - 3] + ... + dp[0])
 * dp[n - 1] = dp[n - 2] + dp[n - 3] + 2 * (dp[n - 4] + ... + dp[0])
 *
 * dp[n] - dp[n - 1] = dp[n - 1] + dp[n - 3]
 * ==> dp[n] = 2dp[n - 1] + dp[n - 3]
 *
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
	let dp = [1, 1, 2, 5];
	if (n <= 3) {
		return dp[n];
	}
	for (let i = 4; i <= n; i++) {
		dp[i] = 2 * dp[i - 1] + dp[i - 3];
		dp[i] %= Math.pow(10, 9) + 7;
	}
	return dp[n];
};
