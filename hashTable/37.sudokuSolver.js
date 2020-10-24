/**
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * A sudoku solution must satisfy all of the following rules:
 * 1.Each of the digits 1-9 must occur exactly once in each row.
 * 2.Each of the digits 1-9 must occur exactly once in each column.
 * 3.Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 *
 * The '.' character indicates empty cells.
 *
 * Constraints:
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit or '.'.
 * It is guaranteed that the input board has only one solution.
 * @author zheng
 * @date 2020/10/24 20:40:46
 */

/*
// The input board is shown above and the only valid solution is shown below:
[
	['5', '3', '4', '6', '7', '8', '9', '1', '2'],
	['6', '7', '2', '1', '9', '5', '3', '4', '8'],
	['1', '9', '8', '3', '4', '2', '5', '6', '7'],
	['8', '5', '9', '7', '6', '1', '4', '2', '3'],
	['4', '2', '6', '8', '5', '3', '7', '9', '1'],
	['7', '1', '3', '9', '2', '4', '8', '5', '6'],
	['9', '6', '1', '5', '3', '7', '2', '8', '4'],
	['2', '8', '7', '4', '1', '9', '6', '3', '5'],
	['3', '4', '5', '2', '8', '6', '1', '7', '9'],
]; 
*/

/**
 * 思路：先遍历一边记录每行，每列，每块有哪些数字，再进行填充
 * 怎么进行填充呢，每个未填充的cell都从0-9遍历吗？但是看题目，所给的案例只有一种答案
 * (BUG BUG Bug)
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function (board) {
	// 记录每行，每列，每块有哪些数字
	let map = new Map();
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			let char = board[i][j];
			if (char === '.') continue;
			let rowStr = `row_${i}_`;
			let columnStr = `column_${j}_`;
			let blockStr = `block_${Math.floor(i / 3)}_${Math.floor(j / 3)}`;
			if (!map.has(rowStr)) map.set(rowStr, []);
			if (!map.has(columnStr)) map.set(columnStr, []);
			if (!map.has(blockStr)) map.set(blockStr, []);

			let rowArr = map.get(rowStr);
			rowArr[char] = char;
			map.set(rowStr, rowArr);

			let columnArr = map.get(columnStr);
			columnArr[char] = char;
			map.set(columnStr, columnArr);

			let blockArr = map.get(blockStr);
			blockArr[char] = char;
			map.set(blockStr, blockArr);
		}
	}
};

let board = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

solveSudoku(board);
