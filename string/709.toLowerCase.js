/**
 * Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
 * @author zheng
 * @date 2020/12/19 23:20:19
 */

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
	return str.toLowerCase();
};

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase2 = function (str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		let idx = str[i].charCodeAt();
		if (65 <= idx && idx <= 90) {
			result += String.fromCharCode(idx + 32);
		} else {
			result += str[i];
		}
	}
	return result;
};
