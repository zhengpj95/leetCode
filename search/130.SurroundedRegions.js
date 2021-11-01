/**
 * 从4个角落开始，把边上为 O 的及其相连接的都设为另一个值 Z
 * 最后遍历整个board，把 Z 变成 O，其余的都是 X 了
 *
 * 从正向思考时候，你需要找出 O 周边的情况，如果是单独一个O还好处理，若是多个O相连，就需要找出这块O区域的周边情况
 * 那么就要考虑从反面思考了，找出O以及与其相连，都让它置为另一个值Z，就可以从四个角落往中间收缩，已经遍历过的若是原来为O的必变成了其他值Z
 *
 * Time Complexity: O(rows*cols)
 * Space Complexity: O(rows*cols) dfs处理过程中的堆栈
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
	if (!board || board.length < 3 || board[0].length < 3) {
		return;
	}
	let rows = board.length;
	let cols = board[0].length;

	let dfs = (row, col) => {
		board[row][col] = 'Z';
		if (row > 0 && board[row - 1][col] == 'O') {
			dfs(row - 1, col);
		}
		if (row < rows - 1 && board[row + 1][col] == 'O') {
			dfs(row + 1, col);
		}
		if (col > 0 && board[row][col - 1] == 'O') {
			dfs(row, col - 1);
		}
		if (col < cols - 1 && board[row][col + 1] == 'O') {
			dfs(row, col + 1);
		}
	};

	// 左边，右边
	for (let row = 0; row < rows; row++) {
		if (board[row][0] == 'O') {
			dfs(row, 0);
		}
		if (board[row][cols - 1] == 'O') {
			dfs(row, cols - 1);
		}
	}

	// 上边，下边
	// 因为上面的已经处理的列数左右两边的情况了，那么就可以搜小最边上的两列
	for (let col = 1; col < cols - 1; col++) {
		if (board[0][col] == 'O') {
			dfs(0, col);
		}
		if (board[rows - 1][col] == 'O') {
			dfs(rows - 1, col);
		}
	}

	// 最后把 Z 变成 O ，其余都是 X
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (board[row][col] == 'O') {
				board[row][col] = 'X';
			} else if (board[row][col] == 'Z') {
				board[row][col] = 'O';
			}
		}
	}
};

let board = [
	['X', 'X', 'X', 'X'],
	['X', 'O', 'O', 'X'],
	['X', 'X', 'O', 'X'],
	['X', 'O', 'X', 'X'],
];
solve(board);
console.log(board);
