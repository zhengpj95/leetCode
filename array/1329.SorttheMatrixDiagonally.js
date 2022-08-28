/**
 * A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column
 * and going in the bottom-right direction until reaching the matrix's end.
 * For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix,
 * includes cells mat[2][0], mat[3][1], and mat[4][2].
 * Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.
 */
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
	let rows = mat.length;
	let cols = mat[0].length;

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			let newI = i;
			let newJ = j;
			let tmp = [];
			while (newI < rows && newJ < cols) {
				tmp.push(mat[newI][newJ]);
				newI++;
				newJ++;
			}

			tmp.sort((a, b) => a - b);

			newI = i;
			newJ = j;
			for (let i = 0; i < tmp.length; i++) {
				mat[newI++][newJ++] = tmp[i];
			}
		}
	}
	return mat;
};
