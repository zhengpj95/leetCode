/**
 * Given two integers left and right that represent the range [left, right],
 * return the bitwise AND of all numbers in this range, inclusive.
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
	let move = 0;
	while (left < right) {
		left >>= 1;
		right >>= 1;
		move++;
	}
	return left << move;
};

console.log(rangeBitwiseAnd(1, 2147483647));
