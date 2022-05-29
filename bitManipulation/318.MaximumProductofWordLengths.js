/**
 * O(T): O(n^2)
 * O(S): O(n)
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
	if (!words || !words.length) {
		return 0;
	}
	let size = words.length;
	let ary = Array(size).fill(0);
	for (let i = 0; i < size; i++) {
		let word = words[i];
		let temp = 0;
		for (let j = 0; j < word.length; j++) {
			temp |= 1 << (word[j].charCodeAt(0) - "a".charCodeAt(0)); //设置单词的二进制
		}
		ary[i] = temp;
	}
	let result = 0;
	for (let i = 0; i < size; i++) {
		for (let j = i + 1; j < size; j++) {
			// 如果两个单词有相同的字符，那么其 & 操作就非0
			if ((ary[i] & ary[j]) == 0) {
				result = Math.max(result, words[i].length * words[j].length);
			}
		}
	}
	return result;
};

let words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));
