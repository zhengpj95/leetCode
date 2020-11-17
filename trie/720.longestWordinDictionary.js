/**
 * Given a list of strings words representing an English Dictionary,
 * find the longest word in words that can be built one character at a time by other words in words.
 * If there is more than one possible answer, return the longest word with the smallest lexicographical order.
 * If there is no answer, return the empty string.
 *
 * Note:
 * All the strings in the input will only contain lowercase letters.
 * The length of words will be in the range [1, 1000].
 * The length of words[i] will be in the range [1, 30].
 * @author zheng
 * @date 2020/11/17 14:37:46
 */

/**
 * Time complexity: O(n) n=words.length		话说Set的操作函数的时间复杂度是多少呢？？？
 * Space complexity: O(n)
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
	words.sort((a, b) => a.length - b.length);
	let result = '';
	let set = new Set();
	for (let word of words) {
		let str = '';
		if (word.length === 1 || set.has(word.slice(0, -1))) {
			set.add(word);
			str = word;
		}
		result = str.length > result.length ? str : str.length === result.length && str < result ? str : result;
	}
	return result;
};

/**
 * 这个时间复杂度是多少呢？？
 * 两个 for 循环，第一个遍历 words 长度，第二个遍历每个单词的长度，所以时间复杂度：O(n*(每个单词长度之和)) n=words.length ？？
 *
 * LeetCode 的官方解析：
 * Time complexity : O(∑(w_i)^2)where w_i is the length of words[i]. Checking whether all prefixes of words[i] are in the set is O(∑(w_i)^2).
 * Space complexity : O(∑(w_i)^2) to create the substrings.  O(sum(w_i)^2)
 * @param {string[]} words
 * @return {string}
 */
const longestWord2 = function (words) {
	words.sort((a, b) => a.length - b.length);

	let result = '';
	let set = new Set(words);
	for (let word of words) {
		let str = '';
		let isValid = true;

		// 单词的每个前缀都需要判断
		for (let i = 0; i < word.length - 1; i++) {
			str += word[i];
			if (!set.has(str)) {
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

let words = ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'];
words = ['w', 'wo', 'wor', 'world', 'worl'];
words = ['yo', 'ew', 'fc', 'zrc', 'yodn', 'fcm', 'qm', 'qmo', 'fcmz', 'z', 'ewq', 'yod', 'ewqz', 'y'];
console.time('a');
console.log(`result = `, longestWord(words));
console.timeEnd('a');
console.time('b');
console.log(`result = `, longestWord2(words));
console.timeEnd('b');
