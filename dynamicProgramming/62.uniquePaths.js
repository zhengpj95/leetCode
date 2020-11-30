/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * he robot can only move either down or right at any point in time.
 * The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 *
 * Constraints:
 * 1 <= m, n <= 100
 * It's guaranteed that the answer will be less than or equal to 2 * 10^9.
 * @author zheng
 * @date 2020/11/30 14:39:32
 */

/**
 * O(T) = O(mn)
 * O(S) = O(mn)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	let dp = [];
	for (let i = 0; i < m; i++) {
		dp.push([1]);
	}
	for (let i = 0; i < n; i++) {
		dp[0][i] = 1;
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
		}
	}
	return dp[m - 1][n - 1];
};

/**
 * O(T) = O(mn)
 * O(S) = O(mn)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function (m, n) {
	let dp = [];
	for (let i = 0; i < m; i++) {
		dp.push(new Array(n).fill(1));
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
		}
	}
	return dp[m - 1][n - 1];
};

/**
 * O(T) = O(mn)
 * O(S) = O(n)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	let dp = new Array(n).fill(1);
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[j] = dp[j - 1] + dp[j];
		}
	}
	return dp[n - 1];
};

let m = 3,
	n = 7;
console.log(uniquePaths(m, n));
console.log(uniquePaths2(m, n));
