class Trie {
	constructor() {
		this.root = {};
	}

	insert(word) {
		let obj = this.root;
		for (let i = 0; i < word.length; i++) {
			let c = word[i];
			if (!obj[c]) {
				obj[c] = {};
			}
			obj = obj[c];
		}
		obj.isEnd = true;
	}

	search(word) {
		let obj = this.commonSearch(word);
		return obj && obj.isEnd ? true : false;
	}

	startsWith(prefix) {
		let obj = this.commonSearch(prefix);
		return !!obj;
	}

	commonSearch(word) {
		let obj = this.root;
		for (let char of word.split('')) {
			if (!obj[char]) {
				return null;
			} else {
				obj = obj[char];
			}
		}
		return obj;
	}
}

module.exports.Trie = Trie;
