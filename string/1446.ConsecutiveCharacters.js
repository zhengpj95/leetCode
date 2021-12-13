/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
	if (!s || s.length <= 1) {
		return s.length;
	}
	let arr = new Array(s.length).fill(1);
	for (let i = 1; i < s.length; i++) {
		if (s[i] == s[i - 1]) {
			arr[i] = arr[i - 1] + 1;
		}
	}
	return Math.max(...arr);
};

/**
 * @param {string} s
 * @return {number}
 */
var maxPower2 = function (s) {
	if (!s || s.length <= 1) {
		return s.length;
	}
	let result = 1;
	let count = 1;
	for (let i = 1; i < s.length; i++) {
		if (s[i] == s[i - 1]) {
			count++;
			result = Math.max(result, count);
		} else {
			count = 1;
		}
	}
	return result;
};
