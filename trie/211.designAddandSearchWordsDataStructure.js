/**
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 *
 * Implement the WordDictionary class:
 * - WordDictionary() Initializes the object.
 * - void addWord(word) Adds word to the data structure, it can be matched later.
 * - bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise.
 * 		word may contain dots '.' where dots can be matched with any letter.
 *
 * Constraints:
 * 1 <= word.length <= 500
 * word in addWord consists lower-case English letters.
 * word in search consist of  '.' or lower-case English letters.
 * At most 50000 calls will be made to addWord and search.
 * @author zheng
 * @date 2020/11/19 09:09:50
 */

/**
 * 方式一：Trie
 * 方式二：Map，以word长度为key，value是数组；insert时相同长度的word，插入到对应的value数组中；查找时，在对应单词长度的value数组中找即可
 */

/**
 * Initialize your data structure here.
 */
const WordDictionary = function () {
	this.root = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
	let root = this.root;
	for (let i = 0; i < word.length; i++) {
		if (!root[word[i]]) {
			root[word[i]] = {};
		}
		root = root[word[i]];
	}
	root.isEnd = true;
};

/**
 * DFS
 * Time complexity: O(n) n=node numbers
 * Space complexity: O(n)
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
	let stack = [[this.root, 0]];
	let found = false;
	while (stack.length) {
		//index is the letter of word to match
		let [root, index] = stack.pop();

		// found
		if (index === word.length && root.isEnd === true) {
			found = true;
			break;
		}

		let char = word[index];
		// if is dot, every path is a choice
		if (char === '.') {
			index++;
			for (let key in root) {
				stack.push([root[key], index]);
			}
		} else if (root[char]) {
			// match a character
			stack.push([root[char], ++index]);
		}
	}
	return found;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let dict = new WordDictionary();
dict.addWord('bad');
dict.addWord('dbd');
dict.addWord('mcd');
// console.log(dict.root);
console.log(dict.search('bad'));
console.log(dict.search('pad'));
console.log(dict.search('.ad'));
console.log(dict.search('...d'));
