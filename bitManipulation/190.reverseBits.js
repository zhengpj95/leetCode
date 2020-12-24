/**
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * Constraints: The input must be a binary string of length 32
 * @author zheng
 * @date 2020/12/23 23:24:37
 */

/**
 * 用 *2 替代 <<1，因为JavaScript中32位的有符号位移位操作会出现负数，特殊的bug
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
	let result = 0;
	for (let i = 0; i < 32; i++) {
		result = result * 2 + (n & 1);
		n = n >> 1;
	}
	return result;
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits2 = function (n) {
	let str = n.toString(2).split('').reverse().join('').padEnd(32, 0);
	return Number.parseInt(str, 2);
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits3 = function (n) {
	let result = 0;
	for (let i = 0; i < 32; i++) {
		result = (result << 1) + (n & 1);
		n = n >> 1;
	}
	return result >>> 0;
};
