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

/**
 * 4的二进制就是0b0100，n是4的倍数，则其二进制中就只能有一个1
 * 所以 n & (n - 1) == 0 能判断一个数是否是偶数
 * 0xaaaaaaaa & n 能判断其是否是4的倍数。0xaaaaaaaa 对应的二进制就是 0b1010101010101010，其0所处的位置刚刚好是4的倍数位
 *
 * Runtime: 84 ms, faster than 97.40% of JavaScript online submissions for Power of Four.
 * Memory Usage: 39.9 MB, less than 71.10% of JavaScript online submissions for Power of Four.
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour3 = function (n) {
	return n > 0 && (n & (n - 1)) == 0 && (0xaaaaaaaa & n) == 0;
};
