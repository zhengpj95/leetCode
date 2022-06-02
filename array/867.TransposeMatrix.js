/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
	let rows = matrix.length;
	if (!rows) return [];
	let cols = matrix[0].length;
	let res = [];
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (!res[j]) {
				res[j] = [];
			}
			res[j][i] = matrix[i][j];
		}
	}
	return res;

	// let res = [];
	// for (let i = 0; i < matrix[0].length; i++) {
	// 	let row = [];
	// 	for (let j = 0; j < matrix.length; j++) {
	// 		row.push(matrix[j][i]);
	// 	}
	// 	res.push(row);
	// }
	// return res;
};
let matrix = [
	[1, 2],
	[3, 4],
	[5, 6],
];
console.log(transpose(matrix));
