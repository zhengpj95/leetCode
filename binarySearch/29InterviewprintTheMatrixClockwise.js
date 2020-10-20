/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	if (!matrix.length) {
		return [];
	}
	let rows = matrix.length;
	let columns = matrix[0].length;
	let visited = [];
	for (let i = 0; i < rows; i++) {
		let tmp = [];
		for (let j = 0; j < columns; j++) {
			tmp[j] = 0;
		}
		visited[i] = tmp;
	}

	let res = [];
	let total = rows * columns;
	let row = 0;
	let column = 0;
	let direction = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];
	let directIdx = 0;
	for (let i = 0; i < total; i++) {
		res[i] = matrix[row][column];
		visited[row][column] = 1;

		let newR = row + direction[directIdx][0];
		let newC = column + direction[directIdx][1];

		if (
			newR < 0 ||
			newR >= rows ||
			newC < 0 ||
			newC >= columns ||
			visited[newR][newC]
		) {
			directIdx = (directIdx + 1) % 4;
		}
		row += direction[directIdx][0];
		column += direction[directIdx][1];
	}
	return res;
};
spiralOrder([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]);
