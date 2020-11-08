/**
 * Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.
 * Notice that the row index starts from 0.
 *
 * Follow up:
 * Could you optimize your algorithm to use only O(k) extra space?
 * @author zheng
 * @date 2020/11/08 20:26:25
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
	if (rowIndex === 0) return [1];
	if (rowIndex === 1) return [1, 1];
	let triangle = [[1], [1, 1]];
	for (let i = 2; i < rowIndex + 1; i++) {
		let row = [1];
		for (let j = 1; j < i; j++) {
			row.push(triangle[i - 1][j] + triangle[i - 1][j - 1]);
		}
		row.push(1);
		triangle.push(row);
	}
	return triangle[rowIndex];
};

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(3));
