/**
 * Given a 2D matrix matrix, find the sum of the elements inside the rectangle
 * defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 *
 * Note:
 * You may assume that the matrix does not change.
 * There are many calls to sumRegion function.
 * You may assume that row1 ≤ row2 and col1 ≤ col2.
 * @author zheng
 * @date 2020/12/20 13:47:30
 */

// =======================Approach 1: Brute Force=======================

var matrix = [];

/**
 * Runtime: 172 ms, faster than 27.76% of JavaScript online submissions for Range Sum Query 2D - Immutable.
 * Memory Usage: 43.4 MB, less than 68.06% of JavaScript online submissions for Range Sum Query 2D - Immutable.
 * 
 * Time complexity : O(mn) time per query. 
 * 		Assume that m and n represents the number of rows and columns respectively, 
 * 		each sumRegion query can go through at most times m*n elements.
 Space complexity : O(1). Note that data is a reference to matrix and is not a copy of it.
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
	this.matrix = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
	let sum = 0;
	for (let row = row1; row <= row2; row++) {
		for (let col = col1; col <= col2; col++) {
			sum += this.matrix[row][col];
		}
	}
	return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
