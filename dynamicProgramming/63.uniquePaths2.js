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

/**
 * O(T) = O(mn)
 * O(S) = O(1) 在 obstacleGrid 中操作
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles2 = function (obstacleGrid) {
	if (obstacleGrid[0][0] === 1) return 0;

	let m = obstacleGrid.length,
		n = obstacleGrid[0].length;
	let row = false;
	for (let i = 0; i < n; i++) {
		if (obstacleGrid[0][i] == 1) row = true;
		obstacleGrid[0][i] = row ? 0 : 1;
	}
	let col = false;
	for (let i = 1; i < m; i++) {
		if (obstacleGrid[i][0] == 1) col = true;
		obstacleGrid[i][0] = col ? 0 : 1;
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			obstacleGrid[i][j] = obstacleGrid[i][j] == 1 ? 0 : obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
		}
	}
	return obstacleGrid[m - 1][n - 1];
};

/**
 * O(T) = O(mn)
 * O(S) = O(1) 在 obstacleGrid 中操作
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles3 = function (obstacleGrid) {
	if (obstacleGrid[0][0] === 1) return 0;

	let m = obstacleGrid.length,
		n = obstacleGrid[0].length;

	obstacleGrid[0][0] = 1;
	for (let i = 1; i < n; i++) {
		// 当前的为0且前面的为1，才为1；否则为0
		obstacleGrid[0][i] = obstacleGrid[0][i - 1] == 1 && obstacleGrid[0][i] == 0 ? 1 : 0;
	}
	for (let i = 1; i < m; i++) {
		obstacleGrid[i][0] = obstacleGrid[i - 1][0] == 1 && obstacleGrid[i][0] == 0 ? 1 : 0;
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			obstacleGrid[i][j] = obstacleGrid[i][j] == 1 ? 0 : obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
		}
	}
	return obstacleGrid[m - 1][n - 1];
};

/**
 * O(T) = O(mn)
 * O(S) = O(mn)
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles4 = function (obstacleGrid) {
	let m = obstacleGrid.length,
		n = obstacleGrid[0].length;
	let dp = new Array(m + 1);
	for (let i = 0; i < m + 1; i++) {
		dp[i] = new Array(n + 1).fill(0);
	}

	// dp[0][1] = dp[1][0] = 1;
	dp[0][1] = 1;
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (!obstacleGrid[i - 1][j - 1]) {
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
			}
		}
	}
	return dp[m][n];
};

/**
 * O(T) = O(mn)
 * O(S) = O(n)
 * Runtime: 72 ms, faster than 98.80% of JavaScript online submissions for Unique Paths II.
 * Memory Usage: 38.6 MB, less than 90.12% of JavaScript online submissions for Unique Paths II.
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles5 = function (obstacleGrid) {
	let m = obstacleGrid.length,
		n = obstacleGrid[0].length;

	let dp = new Array(n).fill(0);
	dp[0] = 1;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (obstacleGrid[i][j] === 1) {
				dp[j] = 0;
			} else if (j > 0) {
				dp[j] = dp[j] + dp[j - 1];
			}
		}
	}
	return dp[n - 1];
};
let grid = [
	[0, 1],
	[0, 0],
];
// grid = [[1], [0]];
grid = [
	[0, 0, 0],
	[0, 1, 0],
	[0, 0, 0],
];
console.log(uniquePathsWithObstacles4(grid));
