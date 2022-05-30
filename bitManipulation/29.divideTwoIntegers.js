/**
 * Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
 * Return the quotient after dividing dividend by divisor.
 *
 * The integer division should truncate toward zero, which means losing its fractional part.
 * For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
 *
 * Note:
 * Assume we are dealing with an environment that could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For this problem,
 * assume that your function returns 231 − 1 when the division result overflows.
 *
 * Constraints:
 * -2^31 <= dividend, divisor <= 2^31 - 1
 * divisor != 0
 * @author zheng
 * @date 2020/10/12 11:56:47
 */

/**
 * 这道题主要考2进制移位操作，还要特别注意越界的情况，-2147483648 / -1 情况
 * 在其他语言中有long，long long等类型可以保证越界情况，但是js没有
 * 比如 2 << 29 是 1073741824，但是 2 << 30 就出现越界情况了
 *
 * 比如 divide(40, 3)
 * 40 = (24 + 12 + 3 + 1) = (3 * 8 + 3 * 4 + 3 * 1 + 1)
 * 所以 result = 8 + 4 + 1
 *
 * 思路相当于 40 循环减去 3，然后每次循环就结果+1
 */

/**
 * 不能使用乘除法，取余运算，只能使用位运算了(bit manipulation)
 * Time complexity: O(logN)
 * Space complexity: O(1)
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
	let dd = Math.abs(dividend);
	let ds = Math.abs(divisor);
	if (dividend === 0 || dd < ds) return 0;
	if (divisor === -1 && dividend === 1 << 31) return Math.pow(2, 31) - 1;
	if (ds === 1) return divisor > 0 ? dividend : -dividend;

	let sign = dividend * divisor < 0 ? -1 : 1;
	let result = 0;
	while (dd >= ds) {
		let temp = ds;
		let mul = 1;
		// temp << 1 可能存在溢出现象，改用 temp * 2 方式
		while (dd >= temp * 2) {
			temp *= 2;
			mul <<= 1;
		}
		dd -= temp;
		result += mul;
	}
	return result * sign;
};

/**
 * 网友解法
 * Time complexity: O(logN)
 * Space complexity: O(logN)
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide2 = function (dividend, divisor) {
	var did = Math.abs(dividend);
	var dis = Math.abs(divisor);
	var sign = (divisor > 0 && dividend > 0) || (divisor < 0 && dividend < 0);
	var res = 0;
	var arr = [dis];

	if (dividend === 0 || did < dis) return 0;
	if (divisor === -1 && dividend === 1 << 31) return Math.pow(2, 31) - 1;
	if (dis === 1) return divisor > 0 ? dividend : -dividend;

	// arr保留 dis 的倍数情况，也是移位情况，但是不存在溢出的数
	while (arr[arr.length - 1] < did) arr.push(arr[arr.length - 1] + arr[arr.length - 1]);
	for (var i = arr.length - 1; i >= 0; i--) {
		if (did >= arr[i]) {
			did -= arr[i];
			res += i === 0 ? 1 : 2 << (i - 1);
		}
	}

	return sign ? res : -res;
};

// console.log(divide(10, 3));
// console.log(divide(-2147483648, -1));
// console.log(divide(-2147483648, 1));
console.log(divide(2147483647, 10));
// console.log(divide(7, -3));
// console.log(divide(0, 1));
// console.log(divide(1, 1));
// console.log(divide(1, 10));
