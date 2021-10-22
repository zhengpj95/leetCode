/**
 * Given a string s, sort it in decreasing order based on the frequency of the characters.
 * The frequency of a character is the number of times it appears in the string.
 * Return the sorted string. If there are multiple answers, return any of them.
 */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
	let map = new Map();
	for (let i = 0; i < s.length; i++) {
		map.set(s[i], map.get(s[i]) ? map.get(s[i]) + 1 : 1);
	}

	let bucket = [];
	map.forEach((val, key) => {
		if (bucket[val] == null) {
			bucket[val] = [];
		}
		bucket[val].push(key);
	});

	let result = '';
	for (let i = bucket.length - 1; i >= 0; i--) {
		let arr = bucket[i];
		if (!arr) continue;
		arr.forEach((item) => (result += item.repeat(i)));
	}

	return result;
};

frequencySort('abeaabffzzzz');
