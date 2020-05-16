/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (!needle || haystack == needle) {
		return 0;
	}

	let len = needle.length;
	if (haystack.length < len) {
		return -1;
	}

	for (let i = 0, j = haystack.length - len; i <= j; i++) {
		let item = haystack.slice(i, i + len);
		if (item == needle) {
			return i;
		}
	}
	return -1;
};
let point = strStr("aaa", "aaaa");
console.log(point);