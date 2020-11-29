/**
 * Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
 * Note: You may assume the string contains only lowercase English letters.
 * @author zheng
 * @date 2020/11/29 21:23:15
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	let map = new Map();
	for (let i = 0; i < s.length; i++) {
		map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
	}
	for (let i = 0; i < s.length; i++) {
		if (map.get(s[i]) == 1) return i;
	}
	return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar2 = function (s) {
	for (let i = 0; i < s.length; i++) {
		let c = s[i];
		if (s.indexOf(c) === i && s.indexOf(c, i + 1) < 0) {
			return i;
		}
	}
	return -1;
};
console.log(firstUniqChar('leetcode'));
