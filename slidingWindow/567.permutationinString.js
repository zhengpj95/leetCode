/**
 * Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1.
 * In other words, one of the first string's permutations is the substring of the second string.
 *
 * Constraints:
 * The input strings only contain lower case letters.
 * The length of both given strings is in range [1, 10,000].
 * @author zheng
 * @date 2020/10/29 10:31:14
 */

/**
 * Time complexity: O(n) n = s2.length
 * Space complexity: O(2*s1.length) = O(s1.length)
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
	if (s1.length > s2.length) return false;

	let needMap = new Map();
	let windowMap = new Map();
	for (let i = 0; i < s1.length; i++) {
		needMap.set(s1[i], needMap.has(s1[i]) ? needMap.get(s1[i]) + 1 : 1);
		windowMap.set(s1[i], 0);
	}

	let valid = 0; //控制字母匹配的数量
	let left = 0,
		right = 0;
	while (right < s2.length) {
		let char = s2[right];
		right++;

		// 存在 s1 的字母
		if (needMap.has(char)) {
			windowMap.set(char, windowMap.get(char) + 1);
			if (windowMap.get(char) === needMap.get(char)) {
				valid++;
			}
		}

		// 缩小窗口，以控制长度小于等于 s1.length
		while (right - left >= s1.length) {
			if (valid === needMap.size) return true;
			let lChar = s2[left];
			left++;

			if (needMap.has(lChar)) {
				if (needMap.get(lChar) === windowMap.get(lChar)) {
					valid--;
				}
				windowMap.set(lChar, windowMap.get(lChar) - 1);
			}
		}
	}

	return false;
};

/**
 * LeetCode 已提交的最快运行时间的解法
 * Time complexity: O(n) n = s2.length
 * Space complexity: O(2*s1.length) = O(s1.length)
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion2 = function (s1, s2) {
	if (s1.length > s2.length) return false;

	let checkSame = (list1, list2) => {
		for (let i = 0; i < list1.length; i++) {
			if (list1[i] !== list2[i]) return false;
		}
		return true;
	};

	let arr1 = new Array(26).fill(0);
	let arr2 = new Array(26).fill(0);
	for (let i = 0; i < s1.length; i++) {
		arr1[s1.charCodeAt(i) - 'a'.charCodeAt()]++;
		arr2[s2.charCodeAt(i) - 'a'.charCodeAt()]++;
	}
	if (checkSame(arr1, arr2)) {
		return true;
	}

	let left = 0,
		right = s1.length;
	while (right < s2.length) {
		arr2[s2.charCodeAt(left) - 'a'.charCodeAt()]--;
		arr2[s2.charCodeAt(right) - 'a'.charCodeAt()]++;
		if (checkSame(arr1, arr2)) {
			return true;
		}
		right++;
		left++;
	}
	return false;
};

let s1 = 'ab';
let s2 = 'adesbcdbbea';
console.log(checkInclusion2(s1, s2));
