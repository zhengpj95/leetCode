/**
 * 最长公共子串问题的基本表述为：给定两个字符串，求出它们之间最长的相同子字符串的长度
 * 或者最长的相同子串的开始位置
 * 或者直接返回最长的子串。
 */

/**
 * Approach 1: Brute Force
 * 返回最长相同子串或长度
 * O(T) = O(n^3)
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */
const longestCommonSubstring = (s1, s2) => {
	let len1 = s1.length;
	let len2 = s2.length;
	if (len1 == 0 || len2 == 0) return '';

	let result = '';
	for (let i = 0; i < len1; i++) {
		for (let j = 0; j < len2; j++) {
			let m = i,
				n = j;
			let temp = '';
			// 这里需要O(n)的时间
			while (m < len1 && n < len2) {
				if (s1[m] !== s2[n]) break;
				temp += s1[m];
				m++;
				n++;
			}
			if (temp.length > result.length) {
				result = temp;
			}
		}
	}
	return result; // result.length;
};

/**
 * Approach 2: DP
 * 返回最长相同子串或长度
 * O(T) = O(n^2)
 * O(S) = O(n^2)
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */
const longestCommonSubstringWithDP = (s1, s2) => {
	let len1 = s1.length;
	let len2 = s2.length;
	if (len1 == 0 || len2 == 0) return '';

	let dp = new Array(len2);
	for (let i = 0; i < dp.length; i++) {
		dp[i] = new Array(len1).fill(0);
	}

	let max = 0; //长度
	let endIndex = -1; //最长子串的尾字符在s1的索引
	for (let i = 0; i < len2; i++) {
		dp[i][0] = s1[0] === s2[i] ? 1 : 0; //首列
		for (let j = 0; j < len1; j++) {
			if (i == 0) dp[0][j] = s1[j] === s2[0] ? 1 : 0; //首行
			if (i == 0 || j == 0) continue;

			if (s2[i] === s1[j]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			}
			if (dp[i][j] > max) {
				max = dp[i][j];
				endIndex = j;
			}
		}
	}
	return s1.substr(endIndex - max + 1, max); //max
};

let s1 = 'aacabdkacaa',
	s2 = 'aacakdbacaa';
console.log(longestCommonSubstringWithDP(s1, s2));
