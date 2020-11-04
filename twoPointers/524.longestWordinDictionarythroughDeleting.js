/**
 * Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string.
 * If there are more than one possible results, return the longest word with the smallest lexicographical order.
 * If there is no possible result, return the empty string.
 *
 * Note:
 * All the strings in the input will only contain lower-case letters.
 * The size of the dictionary won't exceed 1,000.
 * The length of all the strings in the input won't exceed 1,000.
 * @author zheng
 * @date 2020/11/04 09:13:36
 */

/**
 * 有Bug，不是任意组合的，而是通过删除某些元素得到的，那就是数组中的元素的顺序也是其在 s 中的排序的。
 * 通过比较两个 Map 的方式也不好，算法复杂度太高
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
const findLongestWord = function (s, d) {
	if (!s || !d) return '';

	/**
	 * @param {string} s
	 */
	const getMap = (s) => {
		let map = new Map();
		for (let i = 0; i < s.length; i++) {
			map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
		}
		return map;
	};

	/**
	 * @param {Map} map
	 * @param {Map} map1
	 */
	const checkMapSame = (map, map1) => {
		let keys = map1.keys();
		for (let key of keys) {
			if (!map.has(key) || map.get(key) < map1.get(key)) {
				return false;
			}
		}
		return true;
	};

	let map = getMap(s);
	d.sort();
	let result = '';
	for (let item of d) {
		let map1 = getMap(item);
		if (checkMapSame(map, map1) && item.length > result.length) {
			result = item;
		}
	}
	return result;
};

/**
 * 对于数组的每个元素都和 s 比较
 * Time complexity: O(n*x) Here n refers to the number of strings in list dd and x refers to average string length.
 * Space complexity : O(x)
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
const findLongestWord2 = function (s, d) {
	let result = '';
	for (let item of d) {
		if (isSubsequence(s, item)) {
			if (item.length > result.length || (item.length === result.length && item < result)) result = item;
		}
	}
	return result;
};

const isSubsequence = (source, pattern) => {
	let idx = 0;
	for (let i = 0; i < source.length && idx < pattern.length; i++) {
		if (source[i] === pattern[idx]) {
			idx++;
		}
	}
	return idx === pattern.length;
};

let s = 'abpcplea',
	d = ['ale', 'apple', 'monkey', 'plea'];
// (s = 'abpcplea'), (d = ['a', 'b', 'c']);
// (s = 'bab'), (d = ['ba', 'ab', 'a', 'b']);
// (s = 'aewfafwafjlwajflwajflwafj'), (d = ['apple', 'ewaf', 'awefawfwaf', 'awef', 'awefe', 'ewafeffewafewf']);
console.log(`RESULT = `, findLongestWord2(s, d));
