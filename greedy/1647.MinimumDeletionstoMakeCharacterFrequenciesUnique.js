/**
 * A string s is called good if there are no two different characters in s that have the same frequency.
 * Given a string s, return the minimum number of characters you need to delete to make s good.
 * The frequency of a character in a string is the number of times it appears in the string.
 * For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
	let list = new Array(26).fill(0);
	for (let i = 0; i < s.length; i++) {
		let char = s[i].charCodeAt(0) - "a".charCodeAt(0);
		list[char]++;
	}
	list.sort((a, b) => b - a);

	let rst = 0;
	for (let i = 1; i < list.length; i++) {
		while (list[i] && list[i] >= list[i - 1]) {
			let diff = list[i] - list[i - 1];
			if (list[i - 1] > 0) {
				diff++;
			}
			list[i] -= diff;
			rst += diff;
		}
	}
	return rst;
};
let s = "aaabbbccdddz";
// s = "aab";
// s = "aaabbbcc";
// s = "ceabaacb";
console.log(minDeletions(s));
