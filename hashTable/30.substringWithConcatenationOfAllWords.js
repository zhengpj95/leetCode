/**
 * Related Topics: Hash Table, Two Pointers, String
 *
 * You are given a string, s, and a list of words, that are all of the same length.
 * Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once
 * and without any intervening characters.
 */

/**
 * 找出每个单词的下标，再来判断，思路有问题
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
	// let res = [];
	// for (let i = 0; i < arr.length; i++) {
	// 	let start = i;
	// 	let end = i;
	// 	let idx = -1;
	// 	while (start < words.length + i && end < words.length + i) {
	// 		// todo
	// 	}
	// }
	// console.log(res);
};

/**
 * 有bug，如果 words 中有重复的单词，就会判断不全
 * Time complexity: O(s.length * words.length)
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring2 = function (s, words) {
	if (!words || !words.length) {
		return [];
	}
	let res = [];
	// let map = new Map();
	// for (let word of words) {
	// 	if (map.has(word)) {
	// 		map.set(word, map.get(word) + 1);
	// 	} else {
	// 		map.set(word, 1);
	// 	}
	// }

	let wordLen = words[0].length;
	let totalLen = wordLen * words.length;
	let start = 0,
		end = totalLen - 1;
	while (end < s.length) {
		let str = s.slice(start, end + 1);
		let set = new Set();
		for (let word of words) {
			if (str.indexOf(word) < 0) continue;
			set.add(str.indexOf(word));
		}
		if (set.size === words.length) res.push(start);
		start++;
		end++;
	}
	return res;
};

/**
 * Time complexity: O(s.length * words.length)
 * Space complexity: O(words.length * 2)
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring3 = function (s, words) {
	if (!s || !s.length || !words || !words.length) return [];
	let countMap = new Map();
	for (let word of words) {
		countMap.set(word, countMap.has(word) ? countMap.get(word) + 1 : 1);
	}

	let res = [];
	let wordLen = words[0].length;
	let wordsLen = wordLen * words.length;
	let start = 0;
	let end = wordsLen - 1;
	while (end < s.length) {
		let str = s.slice(start, end + 1);
		let map = new Map();
		for (let i = 0; i < wordsLen; i += wordLen) {
			let newStr = str.substr(i, wordLen);
			map.set(newStr, map.has(newStr) ? map.get(newStr) + 1 : 1);
		}
		let isSame = true;
		for (let word of words) {
			if (!map.has(word)) {
				isSame = false;
				break;
			}
			if (map.get(word) !== countMap.get(word)) {
				isSame = false;
				break;
			}
		}
		if (isSame) {
			res.push(start);
		}
		start++;
		end++;
	}
	return res;
};

let s = '';
let words = [];
let controlFlag = 3;
if (controlFlag === 1) {
	s = 'barfoofoobarthefoobarman';
	words = ['foo', 'bar', 'the'];
} else if (controlFlag === 2) {
	s = 'bestgoodgoodgoodbestword';
	words = ['word', 'good', 'best', 'good'];
} else if (controlFlag === 3) {
	s = 'lingmindraboofooowingdingbarrwingmonkeypoundcake';
	words = ['fooo', 'barr', 'wing', 'ding', 'wing'];
}
console.log(findSubstring3(s, words));
