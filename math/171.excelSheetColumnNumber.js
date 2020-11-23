/**
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 * Constraints:
 * 1 <= s.length <= 7
 * s consists only of uppercase English letters.
 * s is between "A" and "FXSHRXW".
 * @author zheng
 * @date 2020/11/23 10:59:01
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
	let result = 0;
	let temp = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		let code = s[i].charCodeAt() + 1 - 65;
		result += code * 26 ** temp;
		temp++;
	}
	return result;
};

console.log(titleToNumber('AZ'));
