/**
 * Given a string s which consists of lowercase or uppercase letters,
 * return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 */

/**
 * Hashmap
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	let map = {};
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		let c = s[i];
		if (map[c]) {
			count++;
			delete map[c];
		} else {
			map[c] = c;
		}
	}
	return Object.keys(map).length ? count * 2 + 1 : count * 2;
};

console.log(longestPalindrome('abccccdd'));
