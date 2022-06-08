/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
	let re = s.split("").reverse().join("");
	if (re == s) {
		return 1;
	}
	return 2;
};
