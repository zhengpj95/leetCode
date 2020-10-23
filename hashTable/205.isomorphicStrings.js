/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character but a character may map to itself.
 *
 * Note: You may assume both s and t have the same length.
 * @author zheng
 * @date 2020/10/23 10:43:52
 */

/**
 * Time complexity: O(s.length)
 * Space complexity: O(s.length * 2)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
	if (s.length !== t.length) return false;

	let len = s.length;
	let sArr = new Array(len);
	let tArr = new Array(len);
	for (let i = 0; i < len; i++) {
		sArr[i] = s.indexOf(s.charAt(i));
		tArr[i] = t.indexOf(t.charAt(i));
		if (sArr[i] !== tArr[i]) return false;
	}
	return true;
};

console.log(isIsomorphic('egggg', 'foooo'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('ab', 'aa'));
