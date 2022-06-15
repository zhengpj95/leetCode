/**
 * Solution 1: Increase Word Length using DP
 * 使用dp，从头开始计算，形成链的word[i]就+1，返回最后max(dp)，或者最后那部分最大word长度的最大dp[i]
 * 解法有点点问题
 * 存在 word[i].length = k （这部分假定为X）的数量很多，
 * 那么 word[n].length = k + 1 （这部分假定为Y）就要遍历前面 X 的来统计 dp[n]
 * 添加单词长度的判断，没那么方便，不如减少单词长度的判断方便。
 */

/**
 * 又一道逆向思维的题目，和 583，1658 一样的，逆向思考。
 */

/**
 * Decrease Word Length using DP
 * https://leetcode.com/problems/longest-string-chain/discuss/2153004/Explaining-Three-Approaches-or-JAVA
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
	let map = new Map();
	let memo = new Map();
	for (let word of words) {
		if (!map.has(word.length)) {
			map.set(word.length, []);
		}
		map.get(word.length).push(word);
	}

	/* 判断两字符串只有一个字符不同 */
	let isOneDiffer = (word, newWord) => {
		let cnt = 0;
		for (let i = 0, j = 0; i < newWord.length && j < word.length && cnt <= 1; i++) {
			if (word[j] != newWord[i]) {
				cnt++;
			} else {
				j++;
			}
		}
		return cnt <= 1;
	};

	let dfs = (word) => {
		if (!map.has(word.length + 1)) {
			return 1;
		}
		if (memo.has(word)) {
			return memo.get(word);
		}

		let maxPath = 0;
		let nextWords = map.get(word.length + 1);
		for (let w of nextWords) {
			if (isOneDiffer(word, w)) {
				maxPath = Math.max(maxPath, dfs(w));
			}
		}
		memo.set(word, maxPath + 1);
		return memo.get(word);
	};

	let rst = 1;
	for (let w of words) {
		rst = Math.max(rst, dfs(w));
	}

	return rst;
};

console.log(longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]));
console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
console.log(longestStrChain(["abcd", "dbqca"]));
