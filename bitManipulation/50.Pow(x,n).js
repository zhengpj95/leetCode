/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	let newN = Math.abs(n);
	let sum = 1;
	let i = 0;
	while (i < newN) {
		sum *= x;
		i++;

		// without this if, status will be Time Limit Exceeded
		if (i * 2 < newN) {
			sum *= sum;
			i *= 2;
		}
	}
	return n < 0 ? 1 / sum : sum;
};
