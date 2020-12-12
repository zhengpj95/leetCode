/**
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 *
 * Follow up: Could you do it without any loop/recursion in O(1) runtime?
 * @author zheng
 * @date 2020/12/12 23:01:29
 */

/**
 * O(T) = O(n^2) n是num的长度
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	while ((num + '').length > 1) {
		let str = num + '';
		let num1 = 0;
		for (let i = 0; i < str.length; i++) {
			num1 += parseInt(str[i]);
		}
		num = num1;
	}
	return num;
};

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	let helper = (num) => {
		let sum = 0;
		while (num > 0) {
			sum += num % 10;
			num = Math.floor(num / 10);
		}
		return sum;
	};

	while (num >= 10) {
		num = helper(num);
	}
	return num;
};
