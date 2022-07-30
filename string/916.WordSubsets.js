/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
	let count = (str) => {
		let map = new Map();
		if (!str) {
			return map;
		}
		for (let i = 0; i < str.length; i++) {
			map.set(str[i], (map.get(str[i]) || 0) + 1);
		}
		return map;
	};

	let map = new Map();
	for (let w of words2) {
		let tmpMap = count(w);
		for (let [k, v] of tmpMap.entries()) {
			map.set(k, Math.max(map.get(k) || 0, tmpMap.get(k))); //这里用words2的每个字符串的最大值
		}
	}
	console.log(map);

	let rst = [];
	next: for (let word of words1) {
		let tempMap = count(word);
		for (let [k, v] of map.entries()) {
			if (!tempMap.has(k) || tempMap.get(k) < v) {
				continue next;
			}
		}
		rst.push(word);
	}
	return rst;
};

let words1 = ["amazon", "apple", "facebook", "google", "leetcode"],
	words2 = ["e", "oo"];

words1 = ["amazon", "apple", "facebook", "google", "leetcode"];
words2 = ["ec", "oc", "ceo"];
console.log(wordSubsets(words1, words2));
