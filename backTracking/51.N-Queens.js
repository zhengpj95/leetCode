/**
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 *
 * Each solution contains a distinct board configuration of the n-queens' placement,
 * where 'Q' and '.' both indicate a queen and an empty space respectively.
 * @author zheng
 * @date 2020/11/13 09:38:11
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
	let result = [];
	let board = [];
	for (let i = 0; i < n; i++) {
		let row = [];
		for (let j = 0; j < n; j++) {
			row.push('.');
		}
		board.push(row);
	}
	backtrack(result, board, 0);
	return result;
};

/**
 * @param {number[][]} result
 * @param {string[][]} board
 * @param {number} rowIndex
 */
const backtrack = (result, board, rowIndex) => {
	if (rowIndex >= board.length) {
		result.push(copyBoard(board));
		return;
	}

	for (let col = 0; col < board[0].length; col++) {
		if (isValid(board, rowIndex, col)) {
			board[rowIndex][col] = 'Q';
			backtrack(result, board, rowIndex + 1);
			board[rowIndex][col] = '.';
		}
	}
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
 * @param {string[][]} board
 */
const copyBoard = (board) => {
	let res = [];
	for (let i = 0; i < board.length; i++) {
		res.push([...board[i]].join(''));
	}
	return res;
};

console.log(solveNQueens(4));
