/**
 * In English, we have a concept called root,
 * which can be followed by some other word to form another longer word - let's call this word successor.
 * For example, when the root "an" is followed by the successor word "other", we can form a new word "another".
 *
 * Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces,
 * replace all the successors in the sentence with the root forming it.
 * If a successor can be replaced by more than one root, replace it with the root that has the shortest length.
 *
 * Return the sentence after the replacement.
 *
 * Constraints:
 * 1 <= dictionary.length <= 1000
 * 1 <= dictionary[i].length <= 100
 * dictionary[i] consists of only lower-case letters.
 * 1 <= sentence.length <= 10^6
 * sentence consists of only lower-case letters and spaces.
 * The number of words in sentence is in the range [1, 1000]
 * The length of each word in sentence is in the range [1, 1000]
 * Each two consecutive words in sentence will be separated by exactly one space.
 * sentence does not have leading or trailing spaces.
 * @author zheng
 * @date 2020/11/18 14:19:41
 */

/**
 * 方式一：每个单词片段都需要遍历，使用hashtable或者直接使用数组的indexOf即可
 * 方式二：把dictionary插入到trie中，再遍历sentence的每一个单词，一旦匹配到就返回，这样就能保证是最短词根；一旦有一个字母不匹配到就直接返回空
 */

/**
 * Time complexity: O(Sum(w_i)^2) 每个单词长度的平方之和
 * Space complexity: O(n) 单词
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function (dictionary, sentence) {
	let result = '';
	for (let word of sentence.split(' ')) {
		let replace = true;
		for (let i = 0; i < word.length; i++) {
			let index = dictionary.indexOf(word.slice(0, i + 1));
			if (index > -1) {
				result = result + (result.length ? ` ${dictionary[index]}` : dictionary[index]);
				replace = false;
				break;
			}
		}
		if (replace) {
			result = result + (result.length ? ` ${word}` : word);
		}
	}
	return result;
};

/**
 * Time complexity: O(Sum(w_i)^2) 每个单词长度的平方之和
 * Space complexity: O(1)
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords2 = function (dictionary, sentence) {
	let set = new Set(dictionary);
	let result = '';
	for (let word of sentence.split(' ')) {
		let replace = true;
		for (let i = 1; i <= word.length; i++) {
			let part = word.slice(0, i);
			if (set.has(part)) {
				result = result + (result.length ? ` ${part}` : part);
				replace = false;
				break;
			}
		}
		if (replace) {
			result = result + (result.length ? ` ${word}` : word);
		}
	}
	return result;
};

const { Trie } = require('./Trie');

/**
 * Time complexity: O(n) n为sentence的单词个数
 * Space complexity: O(n)
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords3 = function (dictionary, sentence) {
	let trie = new Trie();
	dictionary.forEach((item) => trie.insert(item));

	let result = [];
	for (let word of sentence.split(' ')) {
		let part = trie.findWordForReplace(word);
		if (part) {
			result.push(part);
		} else {
			result.push(word);
		}
	}
	return result.join(' ');
};

let dictionary = ['cat', 'bat', 'rat'],
	sentence = 'the cattle was rattled by the battery';
// console.log(replaceWords(dictionary, sentence));
// console.log(replaceWords2(dictionary, sentence));

(dictionary = ['a', 'aa', 'aaa', 'aaaa']), (sentence = 'a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa');
console.log(replaceWords3(dictionary, sentence));
