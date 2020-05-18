// The count-and-say sequence is the sequence of integers with the first five terms as following:
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. 
// You can do so recursively, in other words from the previous member read off the digits, 
// counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
	if (n == 1) {
		return '1';
	}

	let str = '1';
	for (let i = 1; i < n; i++) {
		str = countStr(str);
	}
	return str;
};

var countStr = function (str) {
	let result = '';
	let idx = 0;

	while (idx < str.length) {
		let count = 0;
		let char = str[idx];
		while (str[idx] == char) {
			count++;
			idx++;
		}
		result += count + char + '';
		count = 0;
	}
	return result;
}