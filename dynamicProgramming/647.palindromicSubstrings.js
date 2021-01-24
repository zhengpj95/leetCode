/**
 * Given a string, your task is to count how many palindromic substrings in this string.
 * The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
 *
 * Note:The input string length won't exceed 1000.
 * @author zheng
 * @date 2021/01/24 20:36:35
 */

/**
 * Approach 1: Brute Force
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
	let isPalidrome = (s, low, high) => {
		while (low < high) {
			if (s[low++] != s[high--]) {
				return false;
			}
		}
		return true;
	};

	let count = 0;
	for (let i = 0; i < s.length; i++) {
		for (let j = i; j < s.length; j++) {
			count += isPalidrome(s, i, j);
		}
	}
	return count;
};
