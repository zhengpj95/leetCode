/**
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2^x.
 *
 * Constraints:-2^31 <= n <= 2^31 - 1
 * @author zheng
 * @date 2020/12/09 22:02:56
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	let num = 1;
	while (num <= n) {
		if (num == n) return true;
		num = num * 2;
	}
	return false;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo2 = function (n) {
	if (n <= 0) return false;
	for (let i = 0; i <= 31; i++) {
		if (n == 1 << i) return true;
	}
	return false;
};

/**
 * 奇数，则二进制最低位一定是1
 * 若 n 为奇， n & (n - 1) 相与后一定不为0，否则为 0
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo3 = function (n) {
	if (n <= 0) return false;
	return !(n & (n - 1));
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	if (n <= 0) return false;
	let num = 1;
	while (num < n) {
		num *= 2;
	}
	return num == n;
};
