/**
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 * Follow up: Do not use any built-in library function such as sqrt.
 *
 * Constraints: 1 <= num <= 2^31 - 1
 * @author zheng
 * @date 2020/12/31 20:24:49
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
	if (num == 1) return true;
	let low = 0;
	let high = Math.floor(num / 2);
	while (low < high) {
		let mid = Math.floor((low + high) / 2);
		if (mid * mid < num) {
			low = mid + 1;
		} else if (mid * mid > num) {
			high = mid - 1;
		} else {
			return true;
		}
	}
	return low * low == num;
};
