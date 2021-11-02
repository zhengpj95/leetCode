/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
	let startX = 0;
	let startY = 0;
	let emptyCell = 0;
	let rows = grid.length;
	let cols = grid[0].length;
	let result = 0;

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (grid[row][col] == 1) {
				startX = row;
				startY = col;
			} else if (grid[row][col] == 0) {
				emptyCell++;
			}
		}
	}

	let backTracking = function (row, col, emptyCount) {
		//超出范围或者已经遍历过了
		if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] == -1) {
			return;
		}

		// 遇到
		if (grid[row][col] == 2) {
			// 跑到终点时，emptyCount+1了，把终点也算在内了
			if (emptyCount == emptyCell + 1) {
				result++;
			}
			return;
		}

		grid[row][col] = -1; //设为-1，表示遍历过，也相当于是障碍了，不可再遍历

		backTracking(row - 1, col, emptyCount + 1);
		backTracking(row + 1, col, emptyCount + 1);
		backTracking(row, col - 1, emptyCount + 1);
		backTracking(row, col + 1, emptyCount + 1);

		grid[row][col] = 0;
	};

	backTracking(startX, startY, 0);
	return result;
};
let res = uniquePathsIII([
	[1, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 2, -1],
]);

console.log(res);
