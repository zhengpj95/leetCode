/**
 * Write a program that outputs the string representation of numbers from 1 to n.
 * But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
 * For numbers which are multiples of both three and five output “FizzBuzz”.
 * @author zheng
 * @date 2021/01/10 23:18:02
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	let res = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			res.push('FizzBuzz');
		} else if (i % 3 == 0) {
			res.push('Fizz');
		} else if (i % 5 == 0) {
			res.push('Buzz');
		} else {
			res.push(i + '');
		}
	}
	return res;
};
