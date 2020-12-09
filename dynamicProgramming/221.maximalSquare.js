/**
 * Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 300
 * matrix[i][j] is '0' or '1'.
 * @author zheng
 * @date 2020/12/08 23:01:23
 */

/**
 * Brute Force
 * Time complexity : O((mn)^2) In worst case, we need to traverse the complete matrix for every 1.
 * Space complexity : O(1). No extra space is used.
 *
 * Runtime: 88 ms, faster than 86.39% of JavaScript online submissions for Maximal Square.
 * Memory Usage: 41.2 MB, less than 78.80% of JavaScript online submissions for Maximal Square.
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquareWithBruteForce = function (matrix) {
	let rows = matrix.length;
	let cols = rows > 0 ? matrix[0].length : 0;
	let maxLen = 0;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			// 为1才找square
			if (matrix[i][j] == '1') {
				let subLen = 1;
				let flag = true;
				// 从 i,j 开始往右下匹配 square
				// 注意 subLen+i 和 subLen+j，其是匹配到的 square 的大小
				while (subLen + i < rows && subLen + j < cols && flag) {
					// 行
					for (let k = j; k <= subLen + j; k++) {
						if (matrix[i + subLen][k] == '0') {
							flag = false;
							break;
						}
					}
					// 列
					for (let k = i; k <= subLen + i; k++) {
						if (matrix[k][j + subLen] == '0') {
							flag = false;
							break;
						}
					}
					if (flag) subLen++;
				}
				maxLen = Math.max(subLen, maxLen);
			}
		}
	}
	return maxLen * maxLen;
};

/**
 * Runtime: 88 ms, faster than 86.53% of JavaScript online submissions for Maximal Square.
 * Memory Usage: 41.5 MB, less than 57.21% of JavaScript online submissions for Maximal Square.
 *
 * Time complexity : O(mn). Single pass.
 * Space complexity : O(mn). Another matrix of same size is used for dp.
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquareWithDP = function (matrix) {
	let rows = matrix.length;
	let cols = rows > 0 ? matrix[0].length : 0;
	let maxLen = 0;

	let dp = new Array(rows + 1);
	for (let i = 0; i < dp.length; i++) {
		dp[i] = new Array(cols + 1).fill(0);
	}

	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= cols; j++) {
			if (matrix[i - 1][j - 1] == 1) {
				// 三个角的最小值
				// dp[i][j] 表示以当前 i,j 为quare的右下角的最大情况
				dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]) + 1;
				maxLen = Math.max(maxLen, dp[i][j]);
			}
		}
	}
	return maxLen * maxLen;
};

/**
 * 上面的解法，使用了一个新的matrix保存dp值。
 * 但是仔细思考，我们使用一个行长度的数组即可完成上面的解法了。
 *
 * 上面的解法中，我们更新 dp[i][j] 时，需要dp[i-1][j-1], dp[i][j-1], dp[i-1][j]
 * 重新使用一个单行的dp时，更新dp[k]时可以使用上一轮的dp[k]
 * dp[i-1][j-1]和dp[i][j-1]就要巧妙的保存了，dp[i-1][j-1]使用一个新变量保存，dp[i][j-1]就是dp[k-1]了
 *
 * Runtime: 92 ms, faster than 75.59% of JavaScript online submissions for Maximal Square.
 * Memory Usage: 41.1 MB, less than 87.16% of JavaScript online submissions for Maximal Square.
 *
 * Time complexity : O(mn). Single pass.
 * Space complexity : O(n). Another array which stores elements in a row is used for dp.
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquareWithDP2 = function (matrix) {
	let rows = matrix.length;
	let cols = rows > 0 ? matrix[0].length : 0;
	let maxLen = 0;
	let prev = 0;
	let dp = new Array(cols + 1).fill(0);

	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= cols; j++) {
			let temp = dp[j]; //下一轮时，这一步的dp[j]就相当于dp[i-1][j-1]
			if (matrix[i - 1][j - 1] == 1) {
				dp[j] = Math.min(prev, dp[j - 1], dp[j]) + 1;
				maxLen = Math.max(maxLen, dp[j]);
			} else {
				dp[j] = 0;
			}
			prev = temp;
		}
	}
	return maxLen * maxLen;
};
