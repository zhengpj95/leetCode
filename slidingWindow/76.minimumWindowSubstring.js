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

/**
 * Sliding Window
 * 不断移动过程中就要同步的判断，如果像上面的方式，截取字符串过来判断，很耗时
 * Time complexity: O(m^2) m is length of s
 * Space complexity: O(2n)	n is length of t
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow3 = function (s, t) {
	if (!t || !t.length || !s || !s.length || s.length < t.length) return '';

	let needMap = new Map();
	let windowMap = new Map();
	for (let i = 0; i < t.length; i++) {
		needMap.set(t[i], needMap.has(t[i]) ? needMap.get(t[i]) + 1 : 1);
		windowMap.set(t[i], 0);
	}

	let res = null;
	let valid = 0; //t的字母数量
	let left = 0,
		right = 0;

	// 右指针未到末尾
	while (right < s.length) {
		// 扩张窗口
		let addChar = s[right];
		right++;
		if (needMap.has(addChar)) {
			windowMap.set(addChar, windowMap.get(addChar) + 1);
			if (needMap.get(addChar) === windowMap.get(addChar)) valid++;
		}

		// 有满足条件的子字符串，开始收缩窗口，寻找最小字符串
		while (valid === needMap.size) {
			let str = s.slice(left, right);
			if (res === null || str.length < res.length) res = str;

			let removeChar = s[left];
			left++;

			// 这一步刚好和扩张窗口对称
			if (needMap.has(removeChar)) {
				if (needMap.get(removeChar) === windowMap.get(removeChar)) valid--;
				windowMap.set(removeChar, windowMap.get(removeChar) - 1);
			}
		}
	}
	return res === null ? '' : res;
};

let S = 'aaabcde',
	T = 'ab';
S =
	'jwsdrkqzrthzysvqqazpfnulprulwmwhiqlbcdduxktxepnurpmxegktzegxscfbusexvhruumrydhvvyjucpeyrkeodjvgdnkalutfoizoliliguckmikdtpryanedcqgpkzxahwrvgcdoxiylqjolahjawpfbilqunnvwlmtrqxfphgaxroltyuvumavuomodblbnzvequmfbuganwliwidrudoqtcgyeuattxxlrlruhzuwxieuqhnmndciikhoehhaeglxuerbfnafvebnmozbtdjdo';
T = 'qruzywfhkcbovewle';
console.time();
console.log(11111111, minWindow3(S, T));
console.timeEnd();
