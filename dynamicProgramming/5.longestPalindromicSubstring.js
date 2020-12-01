/**
 * Given a string s, return the longest palindromic substring in s.
 * Constraints:
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters (lower-case and/or upper-case),
 * @author zheng
 * @date 2020/12/01 10:10:22
 */

/**
 * Time Limit Exceeded
 * 找出最长子串需要O(n^3)的时间复杂度，而且判断是否时palidrome时也需要O(n)的时间复杂度
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let s1 = s.split('').reverse().join('');
	let result = '';
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < s1.length; j++) {
			let m = i,
				n = j;
			let temp = '';
			while (m < s.length && n < s1.length) {
				if (s[m] != s1[n]) break;
				temp += s[m];
				m++;
				n++;
			}
			if (isPalindrome(temp) && temp.length > result.length) {
				result = temp;
			}
		}
	}
	return result;
};

/**
 * @param {string} s
 * @returns {boolean}
 */
let isPalindrome = (s) => {
	if (!s) return false;
	if (s.length < 2) return true;
	for (let i = 0, j = s.length - 1; i < j; i++, j--) {
		if (s[i] !== s[j]) {
			return false;
		}
	}
	return true;
};

/**
 * Time Limit Exceeded
 * 通过dp找出最长子串，然后再判断是否是palindrome
 * @param {string} s
 * @return {string}
 */
var longestPalindromeWithDP = function (s) {
	if (!s || !s.length) return '';
	if (s.length == 1) return s;
	if (s.length == 2) return s[0] == s[1] ? s : s[0];

	let s1 = s.split('').reverse().join('');
	let len1 = s.length;
	let len2 = s1.length;
	if (len1 == 0 || len2 == 0) return '';

	let dp = new Array(len2);
	for (let i = 0; i < dp.length; i++) {
		dp[i] = new Array(len1).fill(0);
	}
	let result = '';

	let max = 0; //长度
	for (let i = 0; i < len2; i++) {
		dp[i][0] = s[0] === s1[i] ? 1 : 0; //首列
		for (let j = 0; j < len1; j++) {
			if (i == 0) dp[0][j] = s[j] === s1[0] ? 1 : 0; //首行
			if (i == 0 || j == 0) continue;

			if (s1[i] === s[j]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			}
			if (dp[i][j] >= 1) {
				max = dp[i][j];
				let sub = s.substr(j - max + 1, max);
				if (isPalindrome(sub) && sub.length > result.length) {
					result = sub;
				}
			}
		}
	}
	return result;
};

/**
 * Runtime: 1360 ms, faster than 20.66% of JavaScript online submissions for Longest Palindromic Substring.
 * Memory Usage: 67 MB, less than 12.58% of JavaScript online submissions for Longest Palindromic Substring.
 * @param {string} s
 * @return {string}
 */
var longestPalindromeWithDP2 = function (s) {
	let len = s.length;
	let dp = new Array(len);
	for (let i = 0; i < dp.length; i++) {
		dp[i] = new Array(len).fill(false);
	}

	let result = '';
	for (let i = len - 1; i >= 0; i--) {
		for (let j = i; j < len; j++) {
			// 只有1,2,3长度的子串时候，很容易判断是否是palindrome
			// let isP = s[i] == s[j];
			// if (i == j) {
			// 	dp[i][j] = true; //one char
			// } else if (i + 1 == j) {
			// 	dp[i][j] = isP; // two chars
			// } else if (i + 2 == j) {
			// 	dp[i][j] = isP; // three chars
			// } else if (dp[i + 1][j - 1]) {
			// 	dp[i][j] = isP;
			// }

			// 简化上面内容
			//dp[i + 1][j - 1] means that substring (i + 1, j - 1) is a palindrome.
			dp[i][j] = s[i] == s[j] && (j - i < 3 || dp[i + 1][j - 1]);

			if (dp[i][j] && j - i + 1 > result.length) {
				result = s.substring(i, j + 1);
			}
		}
	}
	return result;
};
