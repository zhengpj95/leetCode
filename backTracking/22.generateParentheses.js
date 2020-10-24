/**
 * Related Topics: String, BackTracking
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * @author zheng
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	let res = [];
	generateWithFilter(0, 0, n, '', res);
	return res;
};

/**
 * 没有过滤不满足的情况
 * @param {number} level
 * @param {number} max
 * @param {string} s
 * @param {string[]} result
 */
var generateNotFilter = function (level, max, s, result) {
	// 结束条件
	if (level >= max) {
		result.push(s);
		return;
	}

	// 逻辑处理
	generateNotFilter(level + 1, max, s + '(', result);
	generateNotFilter(level + 1, max, s + ')', result);
};

/**
 * 过滤不满足的情况
 * 1. 左括号要小于等于n
 * 2. 右括号也要小于等于n，加入右括号前加入左括号的数量必须多于右括号
 * @param {number} left
 * @param {number} right
 * @param {number} n
 * @param {string} s
 * @param {string[]} result
 */
var generateWithFilter = function (left, right, n, s, result) {
	if (left === n && right === n) {
		result.push(s);
		return;
	}

	if (left < n) {
		generateWithFilter(left + 1, right, n, s + '(', result);
	}
	if (right < left) {
		generateWithFilter(left, right + 1, n, s + ')', result);
	}
};

var res = generateParenthesis(3);
console.log(res);
