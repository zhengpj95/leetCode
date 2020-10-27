/**
 * Related Topics: Hash Table, Two Pointers, String, Sliding Window
 *
 * Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
 *
 * Note:
 * If there is no such window in S that covers all characters in T, return the empty string "".
 * If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
 * @author zheng
 * @date 2020/10/27 14:08:33
 */

/**
 * Brute Force
 * 直接就是三重for循环了，效率低下
 * LeetCode不通过，Time Limit Exceeded
 * Time complexity: O(m*m*n) m is length of s, n is length of t
 * Space complexity: O(m+n)
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
	if (!t || !t.length || !s || !s.length || s.length < t.length) return '';

	let res = null;
	let originMap = getMap(t);
	for (let i = 0; i < s.length; i++) {
		for (let j = i + t.length; j <= s.length; j++) {
			if (j - t.length < i) continue; //长度不足
			let str = s.slice(i, j);
			let map = getMap(str);
			if (checkContain(originMap, map)) {
				if (res === null || str.length < res.length) {
					res = str;
				}
				break;
			}
		}
	}
	return res === null ? '' : res;
};

/**
 * @param {string} str
 */
let getMap = (str) => {
	let map = new Map();
	for (let i = 0; i < str.length; i++) {
		map.set(str[i], map.has(str[i]) ? map.get(str[i]) + 1 : 1);
	}
	return map;
};

/**
 * @param {Map} originMap
 * @param {Map} map
 */
let checkContain = (originMap, map) => {
	let keys = originMap.keys();
	for (let key of keys) {
		if (!map.has(key) || map.get(key) < originMap.get(key)) {
			return false;
		}
	}
	return true;
};

/**
 * Sliding Window
 * Time Limit Exceeded，依然超时，这里首先得到了两个map，然后再判断是否包含，这样的判断for循环太多
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow2 = function (s, t) {
	if (!t || !t.length || !s || !s.length || s.length < t.length) return '';
	let res = null;
	let originMap = getMap(t);

	let left = 0,
		right = t.length;
	while (right <= s.length) {
		let str = s.slice(left, right);
		let map = getMap(str);
		if (checkContain(originMap, map)) {
			if (res === null || str.length < res.length) {
				res = str;
			}
			left++;
		} else {
			right++;
		}
	}
	return res === null ? '' : res;
};

let S = 'aaabcde',
	T = 'ab';
// S =
// 	'jwsdrkqzrthzysvqqazpfnulprulwmwhiqlbcdduxktxepnurpmxegktzegxscfbusexvhruumrydhvvyjucpeyrkeodjvgdnkalutfoizoliliguckmikdtpryanedcqgpkzxahwrvgcdoxiylqjolahjawpfbilqunnvwlmtrqxfphgaxroltyuvumavuomodblbnzvequmfbuganwliwidrudoqtcgyeuattxxlrlruhzuwxieuqhnmndciikhoehhaeglxuerbfnafvebnmozbtdjdo';
// T = 'qruzywfhkcbovewle';
console.time();
console.log(11111111, minWindow2(S, T));
console.timeEnd();
