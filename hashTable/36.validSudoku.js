/**
 * Determine if a 9 x 9 Sudoku board is valid.
 * Only the filled cells need to be validated according to the following rules:
 * 1. Each row must contain the digits 1-9 without repetition.
 * 2. Each column must contain the digits 1-9 without repetition.
 * 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Note:
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 * @author zheng
 * @date 2020/10/21 15:36:57
 */

/**
 * 大神的解法，只想说一句：人的思维很重要，不要固步自封
 * 我能想到分行，分列，分块，使用 map 来判断（分块的没有想好如何操作）
 * 但是下面这样子的解法，我是真的没有想到，也没有反应到
 * Time complexity: O(rows * columns)
 * Space complexity: O(rows * columns)
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
	let rows = board.length;
	let columns = board[0].length;
	let map = new Map();
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			let number = board[i][j];
			if (number === '.') continue;
			let rowStr = `${number}_row_${i}`;
			let columnStr = `${number}_column_${j}`;
			//分成了9块，0_0, 0_1, 0_2, 1_0, 1_1, 1_2, 2_0, 2_1, 2_2
			let blockStr = `${number}_block_${Math.floor(i / 3)}_${Math.floor(j / 3)}`;
			if (map.has(rowStr) || map.has(columnStr) || map.has(blockStr)) {
				return false;
			}
			map.set(rowStr, 1);
			map.set(columnStr, 1);
			map.set(blockStr, 1);
		}
	}
	return true;
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
console.log(isValidSudoku(board));
