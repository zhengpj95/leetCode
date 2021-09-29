/**
 * Given a positive integer n,
 * generate an n x n matrix filled with elements from 1 to n2 in spiral order.
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	if (n < 1) {
		return [];
	}
	let matrix = new Array(n);
	for (let i = 0; i < matrix.length; i++) {
		matrix[i] = new Array(n).fill(null);
	}
	let rowBegin = 0;
	let rowEnd = n - 1;
	let colBegin = 0;
	let colEnd = n - 1;
	let count = 1;
	while (rowBegin <= rowEnd && colBegin <= colEnd) {
		//right
		for (let i = colBegin; i <= colEnd; i++) {
			matrix[rowBegin][i] = count;
			count++;
		}
		rowBegin++;
		//down
		for (let i = rowBegin; i <= rowEnd; i++) {
			matrix[i][colEnd] = count;
			count++;
		}
		colEnd--;
		//left
		if (colBegin <= colEnd) {
			for (let i = colEnd; i >= colBegin; i--) {
				matrix[rowEnd][i] = count;
				count++;
			}
			rowEnd--;
		}
		//up
		if (rowBegin <= rowEnd) {
			for (let i = rowEnd; i >= rowBegin; i--) {
				matrix[i][colBegin] = count;
				count++;
			}
			colBegin++;
		}
	}
	// console.log(matrix);
	return matrix;
};

generateMatrix(3);
