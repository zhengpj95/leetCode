/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
	let xy = x ^ y; //异或，相同为0，相异为1
	let result = 0;
	while (xy > 0) {
		result += xy & 1;
		xy >>= 1;
	}
	return result;
};
