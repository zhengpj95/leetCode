/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * Constraints:1 <= num <= 3999
 * @author zheng
 * @date 2020/12/14 22:58:26
 */

// const roman = {
// 	I: 1,
// 	V: 5,
// 	X: 10,
// 	L: 50,
// 	C: 100,
// 	D: 500,
// 	M: 1000,
// };

/**
 * Runtime: 160 ms, faster than 73.40% of JavaScript online submissions for Integer to Roman.
 * Memory Usage: 45.3 MB, less than 61.66% of JavaScript online submissions for Integer to Roman.
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	let result = '';
	let a = 0;
	while (num > 0) {
		a = Math.floor(num / 1000);
		result += 'M'.repeat(a);
		num %= 1000;

		a = Math.floor(num / 900);
		result += 'CM'.repeat(a);
		num %= 900;

		a = Math.floor(num / 500);
		result += 'D'.repeat(a);
		num %= 500;

		a = Math.floor(num / 400);
		result += 'CD'.repeat(a);
		num %= 400;

		a = Math.floor(num / 100);
		result += 'C'.repeat(a);
		num %= 100;

		a = Math.floor(num / 90);
		result += 'XC'.repeat(a);
		num %= 90;

		a = Math.floor(num / 50);
		result += 'L'.repeat(a);
		num %= 50;

		a = Math.floor(num / 40);
		result += 'XL'.repeat(a);
		num %= 40;

		a = Math.floor(num / 10);
		result += 'X'.repeat(a);
		num %= 10;

		a = Math.floor(num / 9);
		result += 'IX'.repeat(a);
		num %= 9;

		a = Math.floor(num / 5);
		result += 'V'.repeat(a);
		num %= 5;

		a = Math.floor(num / 4);
		result += 'IV'.repeat(a);
		num %= 4;

		a = Math.floor(num / 1);
		result += 'I'.repeat(a);
		num %= 1;
	}
	return result;
};

/**
 * Runtime: 152 ms, faster than 88.75% of JavaScript online submissions for Integer to Roman.
 * Memory Usage: 45.2 MB, less than 61.66% of JavaScript online submissions for Integer to Roman.
 * @param {number} num
 * @return {string}
 */
var intToRoman2 = function (num) {
	if (num < 0) return '';
	let result = '';
	let val = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
	let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

	for (let i = val.length - 1; i >= 0; i--) {
		let count = Math.floor(num / val[i]);
		result += roman[i].repeat(count);
		num %= val[i];
	}
	return result;
};

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(5));
console.log(intToRoman(8));
console.log(intToRoman(9));
console.log(intToRoman(10));
console.log(intToRoman(14));
console.log(intToRoman(15));
console.log(intToRoman(19));
