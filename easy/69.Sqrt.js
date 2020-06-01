/**
 * Implement int sqrt(int x).
 *
 * Compute and return the square root of x,
 * where x is guaranteed to be a non-negative integer.
 *
 * Since the return type is an integer, the decimal digits are truncated
 * and only the integer part of the result is returned.
 *
 * Runtime: 100 ms, faster than 27.77% of JavaScript online submissions for Sqrt(x).
 * Memory Usage: 38.4 MB, less than 5.55% of JavaScript online submissions for Sqrt(x).
 *
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	// return Math.sqrt(x) >> 0;

	let low = 0;
	let high = x;

	while (low < high) {
		let mid = parseInt((low + high) / 2);
		let tmp = mid * mid;
		if (tmp == x) {
			return mid;
		}
		if (x < tmp) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return x < high * high ? high - 1 : high;
};
