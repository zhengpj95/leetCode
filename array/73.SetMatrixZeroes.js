/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	let rows = matrix.length;
	let cols = matrix[0].length;

	let isZeroInFirstRow = false; //check first row have zero
	let isZeroInFirstCol = false; //check first col have zero
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (row == 0 && matrix[0][col] == 0) {
				isZeroInFirstRow = true;
			}
			if (col == 0 && matrix[row][0] == 0) {
				isZeroInFirstCol = true;
			}
			if (matrix[row][col] == 0) {
				matrix[row][0] = 0;
				matrix[0][col] = 0;
			}
		}
	}

	for (let i = 1; i < rows; i++) {
		for (let j = 1; j < cols; j++) {
			if (matrix[i][0] == 0 || matrix[0][j] == 0) {
				matrix[i][j] = 0;
			}
		}
	}

	if (isZeroInFirstRow) {
		for (let i = 0; i < cols; i++) {
			matrix[0][i] = 0;
		}
	}
	if (isZeroInFirstCol) {
		for (let i = 0; i < rows; i++) {
			matrix[i][0] = 0;
		}
	}
};
