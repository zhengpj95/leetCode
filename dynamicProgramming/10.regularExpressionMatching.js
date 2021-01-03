/**
 * Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 * @author zheng
 * @date 2021/01/03 15:57:29
 */

/**
 * Runtime: 92 ms, faster than 94.52% of JavaScript online submissions for Regular Expression Matching.
 * Memory Usage: 40.5 MB, less than 79.45% of JavaScript online submissions for Regular Expression Matching.
 * O(T)=O(m*n)
 * O(S)=O(m*n)
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
	let dp = [];
	for (let i = 0; i <= s.length; i++) {
		dp[i] = new Array(p.length + 1).fill(false);
	}
	dp[0][0] = true; // '' match ''

	// deals with patterns like a* or a*b* or a*b*c*
	for (let i = 1; i < dp[0].length; i++) {
		if (p[i - 1] == '*') {
			dp[0][i] = dp[0][i - 2];
		}
	}

	for (let i = 1; i <= s.length; i++) {
		for (let j = 1; j <= p.length; j++) {
			if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
				dp[i][j] = dp[i - 1][j - 1];
			} else if (p[j - 1] == '*') {
				dp[i][j] = dp[i][j - 2];
				if (s[i - 1] == p[j - 2] || p[j - 2] == '.') {
					dp[i][j] = dp[i][j] || dp[i - 1][j];
				}
			}
		}
	}
	return dp[s.length][p.length];
};
