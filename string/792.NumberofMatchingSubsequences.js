/**
 * Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.
 * A subsequence of a string is a new string generated from the original string
 * with some characters (can be none) deleted without changing the relative order of the remaining characters.
 *
 * For example, "ace" is a subsequence of "abcde".
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
	let count = 0;
	for (let word of words) {
		let idx = -1;
		let isExist = true;
		for (let i = 0; i < word.length; i++) {
			let char = word[i];
			idx = s.indexOf(char, idx + 1);
			if (idx < 0) {
				isExist = false;
				break;
			}
		}
		if (isExist) {
			count++;
		}
	}
	return count;
};
