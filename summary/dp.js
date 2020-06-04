/**
 * 动态规划
 */

/**
 * 找出不相邻的最大的数之和
 */
// const arr = [1, 2, 4, 1, 7, 8, 3];
// const arr = [4, 1, 1, 9, 1];
const arr = [3, 34, 4, 12, 5, 2, 9];

/**
 * 递归的形式
 * @param {number[]} arr
 * @param {number} idx
 */
const recursion_opt = function (arr, idx) {
	if (idx == 0) {
		return arr[0];
	}
	if (idx == 1) {
		return Math.max(arr[0], arr[1]);
	}
	let a = recursion_opt(arr, idx - 1);
	let b = recursion_opt(arr, idx - 2) + arr[idx];
	return Math.max(a, b);
};

/**
 * 非递归形式
 * 动态规划，从头开始算
 * @param {number[]} arr
 */
const dp_opt = function (arr) {
	let dp = [];
	dp[0] = arr[0];
	dp[1] = Math.max(arr[0], arr[1]);

	for (let i = 2; i < arr.length; i++) {
		let a = dp[i - 2] + arr[i];
		let b = dp[i - 1];
		dp[i] = Math.max(a, b);
	}
	return dp[arr.length - 1];
};

console.log(recursion_opt(arr, arr.length - 1));
console.log(dp_opt(arr));
