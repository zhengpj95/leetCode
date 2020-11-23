/**
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 * @author zheng
 * @date 2020/11/23 09:59:11
 */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
	if (n < 0) return '';
	let arr = [];
	while (n > 0) {
		n--;
		arr.push(String.fromCharCode(65 + (n % 26)));
		n = Math.floor(n / 26);
	}
	return arr.reverse().join('');
};

console.log(convertToTitle(52));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(730));
