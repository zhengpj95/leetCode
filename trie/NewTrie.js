class TrieNode {
	constructor(val = null) {
		this.val = val;
		this.children = {};
		this.isEnd = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}

	insert(word) {
		let root = this.root;
		for (let char of word.split("")) {
			if (!root.children[char]) {
				root.children[char] = new TrieNode(char);
			}
			root = root.children[char];
		}
		root.isEnd = true;
	}

	search(word) {
		let root = this.find(word);
		return root && root.isEnd ? true : false;
	}

	startWith(prefix) {
		let root = this.find(prefix);
		return !!root;
	}

	find(word) {
		let root = this.root;
		for (let char of word.split("")) {
			if (!root.children[char]) {
				return null;
			}
			root = root.children[char];
		}
		return root;
	}
}

module.exports.Trie = Trie;

// =======test=======
// let trie = new Trie();
// trie.insert('bad');
// trie.insert('javascript');
// trie.insert('js');
// console.log(trie.search('3ad'));
// console.log(trie.startWith('bad'));
// console.log(trie);
// console.log(trie.find('j'));
