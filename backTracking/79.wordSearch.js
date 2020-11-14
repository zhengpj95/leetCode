/**
 * Given an m x n board and a word, find if the word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cells,
 * where "adjacent" cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 *
 * Constraints:
 * m == board.length
 * n = board[i].length
 * 1 <= m, n <= 200
 * 1 <= word.length <= 103
 * board and word consists only of lowercase and uppercase English letters.
 * @author zheng
 * @date 2020/11/14 12:12:57
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (isExist2(board, i, j, word, 0)) {
				return true;
			}
		}
	}
	return false;
};

/**
 * @param {character[][]} board
 * @param {number} row
 * @param {number} col
 * @param {string} word
 */
let isExist = (board, row, col, word) => {
	if (!word || !word.length) return true;
	if (row < 0 || row >= board.length || col < 0 || col >= board[row].length || board[row][col] !== word[0]) {
		return false;
	}

	let char = board[row][col];
	board[row][col] = '#';
	let str = word.substr(1);
	let exist = isExist(board, row - 1, col, str) || isExist(board, row + 1, col, str) || isExist(board, row, col - 1, str) || isExist(board, row, col + 1, str);
	board[row][col] = char;
	return exist;
};

/**
 * @param {character[][]} board
 * @param {number} row
 * @param {number} col
 * @param {string} word
 * @param {number} index
 */
let isExist2 = (board, row, col, word, index) => {
	if (index >= word.length) return true;
	if (row < 0 || row >= board.length || col < 0 || col >= board[row].length || board[row][col] !== word[index]) {
		return false;
	}

	let char = board[row][col];
	board[row][col] = '';
	let exist =
		isExist2(board, row - 1, col, word, index + 1) ||
		isExist2(board, row + 1, col, word, index + 1) ||
		isExist2(board, row, col - 1, word, index + 1) ||
		isExist2(board, row, col + 1, word, index + 1);
	board[row][col] = char;
	return exist;
};

let board = [
		['A', 'B', 'C', 'E'],
		['S', 'F', 'C', 'S'],
		['A', 'D', 'E', 'E'],
	],
	word = 'ABCCED';
(board = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
]),
	(word = 'ABCB');

console.log(exist(board, word));
