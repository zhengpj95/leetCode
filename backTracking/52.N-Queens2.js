/**
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
 * Given an integer n, return the number of distinct solutions to the n-queens puzzle.
 * @author zheng
 * @date 2020/11/13 10:01:06
 */

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function (n) {
	let total = 0;
	let board = [];
	for (let i = 0; i < n; i++) {
		let row = [];
		for (let j = 0; j < n; j++) {
			row.push('.');
		}
		board.push(row);
	}

	const backtrack = (board, rowIndex) => {
		if (rowIndex >= board.length) {
			total += 1;
			return;
		}

		for (let col = 0; col < board[0].length; col++) {
			if (isValid(board, rowIndex, col)) {
				board[rowIndex][col] = 'Q';
				backtrack(board, rowIndex + 1);
				board[rowIndex][col] = '.';
			}
		}
	};

	backtrack(board, 0);
	return total;
};

/**
 * @param {string[][]} board
 * @param {number} row
 * @param {number} column
 */
const isValid = (board, row, column) => {
	// 判断列
	for (let i = 0; i < row; i++) {
		if (board[i][column] === 'Q') return false;
	}

	// 判断右上
	for (let i = row - 1, j = column + 1; i >= 0; i--, j++) {
		if (board[i][j] === 'Q') return false;
	}

	// 判断左上
	for (let i = row - 1, j = column - 1; i >= 0 && j >= 0; i--, j--) {
		if (board[i][j] === 'Q') return false;
	}
	return true;
};

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens2 = function (n) {};

console.log(totalNQueens(4));
