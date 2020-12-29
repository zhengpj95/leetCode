/**
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 * An integer n is a power of three, if there exists an integer x such that n == 3^x.
 *
 * Constraints: -2^31 <= n <= 2^31 - 1
 *
 * Follow up: Could you do it without using any loop / recursion?
 * @author zheng
 * @date 2020/12/29 22:26:19
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
	if (n < 1) return false;
	if (n == 1) return true;
	let product = 1;
	while (product < n) {
		product = product * 3;
	}
	return product === n;
};
