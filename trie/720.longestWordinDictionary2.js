const { Trie } = require('./Trie');

/**
 * 可通过，但是时间复杂度很高，不应该这样一个一个单词的字串判断
 * 应该在 Trie 类中加一个方法，遍历找出满足条件的最深的路径即可。
 * @param {string[]} words
 * @return {string}
 */
const longestWord2 = function (words) {
	let trie = new Trie();
	for (let word of words) {
		trie.insert(word);
	}

	words.sort((a, b) => a.length - b.length);
	let result = '';
	for (let word of words) {
		let isValid = true;
		for (let i = 0; i < word.length - 1; i++) {
			if (!trie.search(word.slice(0, i + 1))) {
				isValid = false;
				break;
			}
		}
		if (isValid && (word.length > result.length || (word.length === result.length && word < result))) {
			result = word;
		}
	}
	return result;
};

let words = ['w', 'wo', 'worl', 'wor', 'world'];
words = ['yo', 'ew', 'fc', 'zrc', 'yodn', 'fcm', 'qm', 'qmo', 'fcmz', 'z', 'ewq', 'yod', 'ewqz', 'y'];
console.log(`result = `, longestWord2(words));
