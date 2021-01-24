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

/**
 * Approach 2: Recursion + Map
 * @param {string} s
 * @return {number}
 */
var countSubstrings2 = function (s) {
	let map = new Map();
	let isPalidrome = (s, low, high) => {
		let str = s.slice(low, high + 1);
		if (map.get(str)) {
			return true;
		}
		while (low < high) {
			if (s[low++] != s[high--]) {
				map.set(str, false);
				return false;
			}
		}
		map.set(str, true);
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

/**
 * Approach 3: DP
 * @param {string} s
 * @return {number}
 */
var countSubstrings3 = function (s) {
	if (s.length <= 0) return 0;
	let size = s.length;
	let count = size;
	let dp = [];
	// single letter substrings
	for (let i = 0; i < size; i++) {
		dp[i] = [];
		dp[i][i] = true;
	}
	// double letter substrings
	for (let i = 0; i < size - 1; i++) {
		dp[i][i + 1] = s[i] == s[i + 1];
		count += dp[i][i + 1] ? 1 : 0;
	}
	// substrings of length 3 to n
	for (let len = 3; len <= size; ++len) {
		for (let i = 0, j = i + len - 1; j < size; ++i, ++j) {
			dp[i][j] = dp[i + 1][j - 1] && s[i] == s[j];
			count += dp[i][j] ? 1 : 0;
		}
	}
	return count;
};
