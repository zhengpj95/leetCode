/**
 * Related Topics: Hash Table, Backtracking
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * A sudoku solution must satisfy all of the following rules:
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 * The '.' character indicates empty cells.
 *
 * Constraints:
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit or '.'.
 * It is guaranteed that the input board has only one solution.
 * @author zheng
 * @date 2020/10/25 20:41:10
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function (board) {
	if (!board || !board.length) return;

	// 判断行，列，块是否有已给元素
	let isValid = (board, row, col, ele) => {
		ele = typeof ele === 'number' ? ele + '' : ele;
		for (let i = 0; i < 9; i++) {
			if (board[row][i] !== '.' && board[row][i] === ele) return false;
			if (board[i][col] !== '.' && board[i][col] === ele) return false;
			let block_row = 3 * Math.floor(row / 3) + Math.floor(i / 3);
			let block_col = 3 * Math.floor(col / 3) + (i % 3);
			if (board[block_row][block_col] !== '.' && board[block_row][block_col] === ele) return false;
		}
		return true;
	};

	let solve = (board) => {
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board[0].length; j++) {
				let ele = board[i][j];
				if (ele !== '.') continue;
				for (let t = 1; t <= 9; t++) {
					if (isValid(board, i, j, t)) {
						board[i][j] = t + '';
						if (solve(board)) {
							return true;
						}
						board[i][j] = '.';
					}
				}
				return false;
			}
		}
		return true;
	};

	solve(board);
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

for (let i = 0; i < board.length; i++) {
	let str = '';
	for (let j = 0; j < board[i].length; j++) {
		str += board[i][j] + ' ';
	}
	console.log(str);
}
