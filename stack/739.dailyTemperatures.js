/**
 * Given a list of daily temperatures T, return a list such that, for each day in the input,
 * tells you how many days you would have to wait until a warmer temperature.
 * If there is no future day for which this is possible, put 0 instead.
 *
 * For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73],
 * your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 *
 * Note: The length of temperatures will be in the range [1, 30000].
 * Each temperature will be an integer in the range [30, 100].
 * @author zheng
 * @date 2021/01/16 20:50:33
 */

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
	let res = new Array(T.length).fill(0);
	let stack = [];
	for (let i = 0; i < T.length; i++) {
		while (stack.length && T[i] > stack[stack.length - 1][1]) {
			let top = stack.pop();
			res[top[0]] = i - top[0];
		}
		stack.push([i, T[i]]);
	}
	return res;
};

/**
 * Runtime: 148 ms, faster than 93.17% of JavaScript online submissions for Daily Temperatures.
 * Memory Usage: 49.4 MB, less than 61.11% of JavaScript online submissions for Daily Temperatures.
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures2 = function (T) {
	let res = new Array(T.length).fill(0);
	let stack = [];
	for (let i = 0; i < T.length; i++) {
		while (stack.length && T[i] > T[stack[stack.length - 1]]) {
			let top = stack.pop();
			res[top] = i - top;
		}
		stack.push(i);
	}
	return res;
};
