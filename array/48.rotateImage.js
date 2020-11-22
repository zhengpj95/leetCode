/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
 * DO NOT allocate another 2D matrix and do the rotation.
 *
 * Constraints:
 * matrix.length == n
 * matrix[i].length == n
 * 1 <= n <= 20
 * -1000 <= matrix[i][j] <= 1000
 * @author zheng
 * @date 2020/11/22 13:50:01
 */

/**
 * Appraoch 1: Transpose and then reverse
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	let size = matrix.length;
	// transpose
	for (let i = 0; i < size; i++) {
		for (let j = i; j < size; j++) {
			let temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}

	// reverse
	// for (let i = 0; i < size; i++) {
	// 	for (let j = 0; j < size / 2; j++) {
	// 		let temp = matrix[i][j];
	// 		matrix[i][j] = matrix[i][size - j - 1];
	// 		matrix[i][size - j - 1] = temp;
	// 	}
	// }

	// reverse
	matrix.forEach((item) => item.reverse());
};

/**
 *
 * @param {number[][]} matrix
 */
let printMatrix = (matrix) => {
	let size = matrix.length;
	for (let i = 0; i < size; i++) {
		let str = '';
		for (let j = 0; j < size; j++) {
			str += `${matrix[i][j]} `;
		}
		console.log(str);
	}
};

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
rotate(matrix);
printMatrix(matrix);
