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

	/**
	 * 720.LongestWordinDictionary的找满足条件的最长单词
	 * 不一定使用其他方法
	 */
	findWord() {
		let result = '';
		let backtrack = (root, track, level) => {
			if (root.isEnd) {
				let path = track.join('');
				if (path.length > result.length || (path.length === result.length && path < result)) {
					result = path;
				}
			}

			for (let key in root) {
				if (key === 'isEnd') continue;
				if (!root.isEnd && level > 0) continue;
				track.push(key);
				backtrack(root[key], track, level + 1);
				track.pop();
			}
		};

		backtrack(this.root, [], 0);
		return result;
	}

	/**
	 * 648.replaceWords 的方法
	 * @param {string} word
	 */
	findWordForReplace(word) {
		let root = this.root;
		let result = '';
		for (let i = 0; i < word.length; i++) {
			let part = word[i];
			if (root.isEnd) {
				return result;
			}
			if (!root[part]) {
				return '';
			}
			result += part;
			root = root[part];
		}
		return result;
	}
}

module.exports.Trie = Trie;
