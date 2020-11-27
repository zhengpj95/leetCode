/**
 * Given a string s and a string t, check if s is subsequence of t.
 * A subsequence of a string is a new string which is formed from the original string
 * by deleting some (can be none) of the characters
 * without disturbing the relative positions of the remaining characters.
 * (ie, "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * Follow up:
 * If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B,
 * and you want to check one by one to see if T has its subsequence.
 * In this scenario, how would you change your code?
 *
 * Constraints:
 * 0 <= s.length <= 100
 * 0 <= t.length <= 10^4
 * Both strings consists only of lowercase characters.
 * @author zheng
 * @date 2020/11/27 16:30:56
 */

/**
 * Two Pointers
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	if (!s && !t) return true;
	if (!s) return true;
	if (!t) return false;

	let fast = 0,
		slow = 0;
	while (fast < t.length && slow < s.length) {
		if (t[fast] == s[slow]) {
			slow++;
		}

		fast++;
	}
	if (slow >= s.length) return true;
	return false;
};
