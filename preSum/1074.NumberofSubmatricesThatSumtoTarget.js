/**
 * Brute Force
 * 这道题类似于 560.subarraySumEqualsK
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
	let rows = matrix.length,
		cols = matrix[0].length;

	let preSum = new Array(rows + 1); // 二维preSum
	for (let i = 0; i < preSum.length; i++) {
		preSum[i] = new Array(cols + 1).fill(0);
	}
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= cols; j++) {
			// preSum[i - 1][j] + preSum[i][j - 1] 包含了两个 preSum[i - 1][j - 1]，所以要减去一次
			preSum[i][j] = preSum[i - 1][j] + preSum[i][j - 1] - preSum[i - 1][j - 1] + matrix[i - 1][j - 1];
		}
	}
	// console.log(preSum);

	let rst = 0;
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= cols; j++) {
			for (let r = 0; r < i; r++) {
				for (let c = 0; c < j; c++) {
					if (preSum[i][j] - preSum[i][c] - preSum[r][j] + preSum[r][c] === target) {
						rst++;
					}
				}
			}
		}
	}

	return rst;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget2 = function (matrix, target) {
	let rows = matrix.length,
		cols = matrix[0].length;
	let dp = new Array(rows + 1); // 二维preSum
	for (let i = 0; i < dp.length; i++) {
		dp[i] = new Array(cols + 1).fill(0);
	}
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= cols; j++) {
			dp[i][j] = dp[i][j - 1] + matrix[i - 1][j - 1];
		}
	}
	console.log(dp);

	let rst = 0;
	// todo
};

let matrix = [
		[0, 1, 0],
		[1, 1, 1],
		[0, 1, 0],
	],
	target = 0;
// (matrix = [
// 	[1, -1],
// 	[-1, 1],
// ]),
// 	(target = 0);
// (matrix = [[904]]), (target = 0);
console.log(numSubmatrixSumTarget(matrix, target));
