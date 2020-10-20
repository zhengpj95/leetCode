/**
 * Related Topics: Hash Table, Two Pointers, String
 * You are given a string, s, and a list of words, that are all of the same length.
 * Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once
 * and without any intervening characters.
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
	if (!words || !words.length) {
		return [];
	}
	let obj = {};
	let arr = [];
	let wordLen = words[0].length;
	for (let word of words) {
		// 不包含其中一个单词就返回
		if (!s.includes(word)) {
			return [];
		}
		obj[word] = [];
		for (let i = 0; i <= s.length; ) {
			let index = s.indexOf(word, i);
			if (~index) {
				obj[word].push(index);
				i += index + wordLen;
				arr.push(index);
			} else {
				i += wordLen;
			}
		}
	}
	arr.sort((a, b) => a - b);
	console.log(obj, arr);

	// todo
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		let start = i;
		let end = i;
		let idx = -1;
		while (start < words.length + i && end < words.length + i) {
			// todo
		}
	}
	console.log(res);
};

findSubstring('barfoothefoobarman', ['foo', 'bar']);
