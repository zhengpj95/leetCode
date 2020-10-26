/**
 * Given a pattern and a string s, find if s follows the same pattern.
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 *
 * Constraints:
 * 1 <= pattern.length <= 300
 * pattern contains only lower-case English letters.
 * 1 <= s.length <= 3000
 * s contains only lower-case English letters and spaces ' '.
 * s does not contain any leading or trailing spaces.
 * All the words in s are separated by a single space.
 * @author zheng
 * @date 2020/10/26 19:31:01
 */

/**
 * Time complexity: O(m) m is pattern's length
 * Space complexity: O(m)
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
	let idx = [];
	for (let i = 0; i < pattern.length; i++) {
		idx[i] = pattern.indexOf(pattern[i]);
	}
	let sArr = s.split(' ');
	if (pattern.length !== sArr.length) return false;
	for (let i = 0; i < sArr.length; i++) {
		if (sArr.indexOf(sArr[i]) !== idx[i]) return false;
	}
	return true;
};

let pattern = 'abba',
	s = 'dog dog dog dog';
console.log(wordPattern(pattern, s));
