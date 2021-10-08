/**
 * Implement a trie with insert, search, and startsWith methods.
 *
 * Example:
 * Trie trie = new Trie();
 * trie.insert("apple");
 * trie.search("apple");   // returns true
 * trie.search("app");     // returns false
 * trie.startsWith("app"); // returns true
 * trie.insert("app");
 * trie.search("app");     // returns true
 *
 * Note:
 * You may assume that all inputs are consist of lowercase letters a-z.
 * All inputs are guaranteed to be non-empty strings.
 * @author zheng
 * @date 2020/11/17 00:29:17
 */

/**
 * Initialize your data structure here.
 */
const Trie = function () {
	this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
	let obj = this.root;
	for (let i = 0; i < word.length; i++) {
		let c = word[i];
		if (!obj[c]) {
			obj[c] = {};
		}
		obj = obj[c];
	}
	obj.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
	let obj = this.commonSearch(word);
	return obj && obj.isEnd ? true : false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
	let obj = this.commonSearch(prefix);
	return !!obj;
};

/**
 * @param {string} word
 * @returns {boolean}
 */
Trie.prototype.commonSearch = function (word) {
	let obj = this.root;
	for (let char of word.split('')) {
		if (!obj[char]) {
			return null;
		} else {
			obj = obj[char];
		}
	}
	return obj;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let trie = new Trie();
trie.insert('bed');
trie.insert('beded');
trie.insert('today');
trie.insert('tomorrow');
console.log(trie);
console.log(trie.startsWith('bed'));
console.log(trie.startsWith('to'));
console.log(trie.startsWith('y'));
