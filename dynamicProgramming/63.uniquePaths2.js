/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time.
 * The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * Now consider if some obstacles are added to the grids. How many unique paths would there be?
 * An obstacle and space is marked as 1 and 0 respectively in the grid.
 *
 * Constraints:
 * m == obstacleGrid.length
 * n == obstacleGrid[i].length
 * 1 <= m, n <= 100
 * obstacleGrid[i][j] is 0 or 1.
 * @author zheng
 * @date 2020/11/30 15:17:18
 */

/**
 * O(T) = O(mn)
 * O(S) = O(mn)
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	let m = obstacleGrid.length,
		n = obstacleGrid[0].length;
	let dp = [];
	for (let i = 0; i < m; i++) {
		dp.push(new Array(n).fill(1));
	}

	let row = false,
		col = false; // 首行首列是否有obstacle，有则让其后面的全为0

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			// 首行有obstacle
			if (i == 0 && obstacleGrid[i][j] == 1) row = true;
			if (i == 0 && row) dp[i][j] = 0;
			// 首列有obstacle
			if (j == 0 && obstacleGrid[i][j] == 1) col = true;
			if (j == 0 && col) dp[i][j] = 0;

			if (i !== 0 && j !== 0) {
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
			}
			if (obstacleGrid[i][j] == 1) {
				dp[i][j] = 0;
			}
		}
	}
	return dp[m - 1][n - 1];
};
