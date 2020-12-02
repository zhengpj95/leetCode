/**
 * Write an efficient algorithm that searches for a target value in an m x n integer matrix.
 * The matrix has the following properties:
 * 		Integers in each row are sorted in ascending from left to right.
 * 		Integers in each column are sorted in ascending from top to bottom.
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= n, m <= 300
 * -10^9 <= matix[i][j] <= 10^9
 * All the integers in each row are sorted in ascending order.
 * All the integers in each column are sorted in ascending order.
 * -10^9 <= target <= 10^9
 * @author zheng
 * @date 2020/12/02 09:17:28
 */

/**
 * 从 top,right 方向上往左下角缩小，因为每行每列都是有序的
 * Runtime: 324 ms, faster than 24.80% of JavaScript online submissions for Search a 2D Matrix II.
 * Memory Usage: 41.7 MB, less than 79.33% of JavaScript online submissions for Search a 2D Matrix II.
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix1 = function (matrix, target) {
	if (!matrix || !matrix.length || !matrix[0].length) return false;

	let row = 0;
	let col = matrix[0].length - 1;
	while (col >= 0 && row < matrix.length) {
		if (matrix[row][col] === target) {
			return true;
		}
		matrix[row][col] > target ? col-- : row++;
	}
	return false;
};
