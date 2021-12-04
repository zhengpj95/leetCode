/**
 * 因为查询是suffix，所以构造trie时，倒序插入构造
 * @param {string[]} words
 */
var StreamChecker = function (words) {
	this.trie = {};
	this.letters = [];
	for (let word of words) {
		word = word.split('').reverse().join('');
		let node = this.trie;
		for (let c of word) {
			if (!node[c]) node[c] = {};
			node = node[c];
		}
		node['isWord'] = true;
	}
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function (letter) {
	this.letters.push(letter);
	let node = this.trie;
	for (let i = this.letters.length - 1; i >= 0; i--) {
		if (node[this.letters[i]]) {
			node = node[this.letters[i]];
			if (node['isWord']) {
				return true;
			}
		} else {
			return false;
		}
	}
	return false;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

let o = new StreamChecker(['cd', 'f', 'kl']);
// console.log(o.trie);
console.log(o.query('b')); //false
console.log(o.query('d')); //false
console.log(o.query('m')); //false
console.log(o.query('f')); //true f can build with 'f'
console.log(o.query('k')); //false
console.log(o.query('l')); //true  kl can build with 'kl'
console.log(o.query('c')); //false
console.log(o.query('d')); //true cd can build with 'cd'
