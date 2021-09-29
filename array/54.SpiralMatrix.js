/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	if (!matrix || !matrix.length) {
		return [];
	}
	let rowEnd = matrix.length - 1;
	let colEnd = matrix[0].length - 1;
	let result = [];
	let rowBegin = 0,
		colBegin = 0;
	while (rowBegin <= rowEnd && colBegin <= colEnd) {
		// right
		for (let i = colBegin; i <= colEnd; i++) {
			result.push(matrix[rowBegin][i]);
		}
		rowBegin++;

		// down
		for (let i = rowBegin; i <= rowEnd; i++) {
			result.push(matrix[i][colEnd]);
		}
		colEnd--;

		// left
		if (rowBegin <= rowEnd) {
			for (let i = colEnd; i >= colBegin; i--) {
				result.push(matrix[rowEnd][i]);
			}
		}
		rowEnd--;

		// up
		if (colBegin <= colEnd) {
			for (let i = rowEnd; i >= rowBegin; i--) {
				result.push(matrix[i][colBegin]);
			}
		}
		colBegin++;
	}
	return result;
};

console.log(
	spiralOrder([
		[1, 2, 3, 30],
		[4, 5, 6, 60],
		[7, 8, 9, 90],
	])
);
