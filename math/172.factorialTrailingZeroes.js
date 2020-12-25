/**
 * Given an integer n, return the number of trailing zeroes in n!.
 * Follow up: Could you write a solution that works in logarithmic time complexity?
 *
 * Constraints: 0 <= n <= 10^4
 * @author zheng
 * @date 2020/12/25 20:05:58
 */

/*
 * 不是很理解？？？
 */

/**
 * 一个阶乘的数，末尾有0的，只能是 2 或者 5 的倍数
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
	let count = 0;
	while (n > 0) {
		count += Math.floor(n / 5);
		n = Math.floor(n / 5);
	}
	return count;
};

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes2 = function (n) {
	let count = 0;
	for (let i = n; i > 0; i = Math.floor(i / 5)) {
		count += Math.floor(i / 5);
	}
	return count;
};
