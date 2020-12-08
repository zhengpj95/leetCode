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
