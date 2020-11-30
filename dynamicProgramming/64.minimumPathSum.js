/**
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right,
 * which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 *
 * Constraints:
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 200
 * 0 <= grid[i][j] <= 100
 * @author zheng
 * @date 2020/12/01 00:34:55
 */

/**
 * O(T) = O(mn)
 * O(S) = O(1)
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	let m = grid.length;
	let n = grid[0].length;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i == 0 && j > 0) {
				grid[i][j] = grid[i][j] + grid[i][j - 1];
			} else if (j == 0 && i > 0) {
				grid[i][j] = grid[i][j] + grid[i - 1][j];
			} else if (i > 0 && j > 0) {
				grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1]);
			}
		}
	}
	return grid[m - 1][n - 1];
};

/**
 * O(T) = O(mn)
 * O(S) = O(1)
 * Runtime: 72 ms, faster than 99.09% of JavaScript online submissions for Minimum Path Sum.
 * Memory Usage: 39.1 MB, less than 87.31% of JavaScript online submissions for Minimum Path Sum.
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum2 = function (grid) {
	let m = grid.length;
	let n = grid[0].length;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i == 0 && j == 0) {
				continue;
			}
			if (i == 0) {
				grid[i][j] = grid[i][j] + grid[i][j - 1];
			} else if (j == 0) {
				grid[i][j] = grid[i][j] + grid[i - 1][j];
			} else {
				grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1]);
			}
		}
	}
	return grid[m - 1][n - 1];
};

let grid = [
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1],
];
grid = [
	[1, 2, 3],
	[4, 5, 6],
];
console.log(minPathSum(grid));
