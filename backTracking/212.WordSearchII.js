/**
 * Given an m x n board of characters and a list of strings words, return all words on the board.
 * Each word must be constructed from letters of sequentially adjacent cells,
 * where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once in a word.
 */

/**
 * 暴力解法，每一个word都需要遍历一遍board，有什么方式可以简化点？？
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
	let result = [];
	for (let word of words) {
		if (checkExist(board, word)) {
			result.push(word);
		}
	}
	return result;
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var checkExist = function (board, word) {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (isExist(board, i, j, word, 0)) {
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
 * @param {number} index
 */
let isExist = (board, row, col, word, index) => {
	if (index >= word.length) return true;
	if (row < 0 || row >= board.length || col < 0 || col >= board[row].length || board[row][col] !== word[index]) {
		return false;
	}

	let char = board[row][col];
	board[row][col] = '';
	let exist =
		isExist(board, row - 1, col, word, index + 1) ||
		isExist(board, row + 1, col, word, index + 1) ||
		isExist(board, row, col - 1, word, index + 1) ||
		isExist(board, row, col + 1, word, index + 1);
	board[row][col] = char;
	return exist;
};
