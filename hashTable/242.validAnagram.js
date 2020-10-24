/**
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 * Note: You may assume the string contains only lowercase alphabets.
 * Follow up: What if the inputs contain unicode characters? How would you adapt your solution to such case?
 * @author zheng
 * @date 2020/10/24 20:12:06
 */

/**
 * Time complexity: O(nlogn) n = s.length  排序至少要消耗 O(nlogn) 的时间
 * Space complexity: O(1)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
	if (s.length !== t.length) return false;
	s = s.toLowerCase().split('').sort().join('');
	t = t.toLowerCase().split('').sort().join('');
	for (let i = 0; i < s.length; i++) {
		if (s[i] !== t[i]) return false;
	}
	return true;
};

/**
 * Time complexity: O(n) n = s.length
 * Space complexity: O(1)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram2 = function (s, t) {
	if (s.length !== t.length) return false;
	let map = new Map();
	for (let i = 0; i < s.length; i++) {
		map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1); //++
		map.set(t[i], map.has(t[i]) ? map.get(t[i]) - 1 : -1); //--
	}
	let flag = true;
	map.forEach((val) => {
		if (val !== 0) flag = false;
	});
	return flag;
};

let s = 'rat',
	t = 'art';
console.log(isAnagram2(s, t));
