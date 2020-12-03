/**
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 * determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note:
 * The same word in the dictionary may be reused multiple times in the segmentation.
 * You may assume the dictionary does not contain duplicate words.
 * @author zheng
 * @date 2020/12/03 22:22:25
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	if (!s || !s.length || !wordDict.length) return false;
	let size = s.length;
	// dp[i] means s[0...i] can be formed by wordDict
	let dp = new Array(size).fill(0);
	for (let i = 0; i < size; i++) {
		for (let j = 0; j <= i; j++) {
			// 从0开始的一个，或者从上一个已组成的开始
			if (j === 0 || dp[j - 1]) {
				if (wordDict.includes(s.substring(j, i + 1))) {
					dp[i] = 1;
					break;
				}
			}
		}
	}
	return !!dp[size - 1];
};

let s = 'leetcode',
	wordDict = ['leet', 'code'];
console.log(wordBreak(s, wordDict));
