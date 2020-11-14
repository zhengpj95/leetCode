/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Note:
 * Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1].
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 *
 * Constraints:
 * -2^31 <= x <= 2^31 - 1
 * @author zheng
 * @date 2020/11/14 18:02:55
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
	let sign = Math.sign(x);
	let str = (Math.abs(x) + '').split('').reverse().join('');
	let result = str * sign;

	if (result >= Math.pow(2, 31) || result < Math.pow(2, 31) * -1) {
		return 0;
	}
	return result;
};

let x = 123;
console.log(reverse(x));
