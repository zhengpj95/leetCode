/**
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * @author zheng
 * @date 2020/11/07 21:53:41
 */

/**
 * Time complexity: O(n^2)
 * Space complexity: O(n^2)
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
	let result = [];
	for (let i = 1; i <= numRows; i++) {
		let items = [1];
		for (let j = 1; j < i; j++) {
			if (j === i - 1) items.push(1);
			else items.push(result[i - 2][j] + result[i - 2][j - 1]);
		}
		result.push(items);
	}
	return result;
};

/**
 * 遍历出每层的前一半，后一半就复制前面一半即可
 * Time complexity: O(n^2)
 * Space complexity: O(n^2)
 * @param {number} numRows
 * @return {number[][]}
 */
const generate2 = function (numRows) {
	let result = [];
	for (let i = 1; i <= numRows; i++) {
		if (i === 1 || i === 2) {
			result.push(new Array(i).fill(1));
			continue;
		}
		let items = [1];
		for (let j = 1; j < Math.ceil(i / 2); j++) {
			items.push(result[i - 2][j] + result[i - 2][j - 1]);
		}
		let arr = [...items];
		if (i > 2 && i & 1) {
			arr.pop();
		}
		items.push(...arr.reverse());
		result.push(items);
	}
	return result;
};

/**
 * Time complexity: O(n^2)
 * Space complexity: O(n^2)
 * @param {number} numRows
 * @return {number[][]}
 */
const generate3 = function (numRows) {
	let triangle = [];
	for (let i = 1; i <= numRows; i++) {
		let row = [];
		row.push(1);
		let preRow = triangle[i - 2];
		for (let j = 1; j < i - 1; j++) {
			row.push(preRow[j] + preRow[j - 1]);
		}
		if (i > 1) row.push(1);
		triangle.push(row);
	}
	return triangle;
};

/**
 * Time complexity: O(n^2)
 * Space complexity: O(n^2)
 * @param {number} numRows
 * @return {number[][]}
 */
const generate4 = function (numRows) {
	if (numRows === 0) return [];
	if (numRows === 1) return [[1]];
	let triangle = [[1]];
	for (let i = 1; i < numRows; i++) {
		let row = [1];
		for (let j = 1; j < i; j++) {
			row.push(triangle[i - 1][j] + triangle[i - 1][j - 1]);
		}
		row.push(1);
		triangle.push(row);
	}
	return triangle;
};

console.log(generate3(5));
console.log(generate4(3));
