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
	let list = new Array(26);
	for (let i = 0; i < s.length; i++) {
		let char = s[i].charCodeAt(0) - 97;
		if (!list[char]) {
			list[char] = 0;
		}
		list[char]++;
	}
	list.sort((a, b) => b - a);

	let existed = new Array(26);
	let rst = 0;
	for (let item of list) {
		if (item == null) {
			continue;
		}
		if (existed[item] == null) {
			existed[item] = item;
		} else {
			while (existed[item] != null) {
				item--;
				rst++;
				if (item <= 0) {
					continue;
				}
			}
			item > 0 && (existed[item] = item);
		}
	}
	return rst;
};
let s = "aaabbbccdddz";
// s = "aab";
// s = "aaabbbcc";
// s = "ceabaacb";
console.log(minDeletions(s));
