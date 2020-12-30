/**
 * Given an integer n, return true if it is a power of four. Otherwise, return false.
 * An integer n is a power of four, if there exists an integer x such that n == 4^x.
 *
 * Constraints: -2^31 <= n <= 2^31 - 1
 *
 * Follow up: Could you solve it without loops/recursion?
 * @author zheng
 * @date 2020/12/30 22:02:51
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
	let num = 1;
	while (num < n) {
		num = num * 4;
	}
	return n == num;
};

/**
 * 4的二进制是0100，如果是4的倍数，相当于4的二进制左移2位
 * 所以只要以1开始，多个(00)的二进制就是4的倍数
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour2 = function (n) {
	return /^1(00)*$/.test(n.toString(2));
};
