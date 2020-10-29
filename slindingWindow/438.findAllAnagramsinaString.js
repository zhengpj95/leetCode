/**
 * Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
 * Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
 * The order of output does not matter.
 * @author zheng
 * @date 2020/10/29 11:43:33
 */

/**
 * 同 567.Permutation In String 题的解法2一样
 * Time complexity: O(s.length)
 * Space complexity: O(2n) n=26个字母
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
	if (p.length > s.length) return [];

	let checkSame = (list1, list2) => {
		for (let i = 0; i < list1.length; i++) {
			if (list1[i] !== list2[i]) return false;
		}
		return true;
	};

	let arr1 = new Array(26).fill(0);
	let arr2 = new Array(26).fill(0);
	for (let i = 0; i < p.length; i++) {
		arr1[p.charCodeAt(i) - 'a'.charCodeAt()]++;
		arr2[s.charCodeAt(i) - 'a'.charCodeAt()]++;
	}

	let result = [];
	if (checkSame(arr1, arr2)) result.push(0);

	let left = 0,
		right = p.length;

	while (right < s.length) {
		arr2[s.charCodeAt(right) - 'a'.charCodeAt()]++;
		arr2[s.charCodeAt(left) - 'a'.charCodeAt()]--;
		right++;
		left++;
		if (checkSame(arr1, arr2)) {
			result.push(left);
		}
	}

	return result;
};

/**
 * Sliding Window
 * Time complexity: O(s.length)
 * Space complexity: O(2n) n=26个字母
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams2 = function (s, p) {
	if (p.length > s.length) return [];
	let need = new Map();
	let window = new Map();
	for (let i = 0; i < p.length; i++) {
		need.set(p[i], need.has(p[i]) ? need.get(p[i]) + 1 : 1);
		window.set(p[i], 0);
	}

	let left = 0,
		right = 0;
	let valid = 0;
	let result = [];

	while (right < s.length) {
		let char = s[right++];
		if (need.has(char)) {
			window.set(char, window.get(char) + 1);
			if (window.get(char) === need.get(char)) {
				valid++;
			}
		}

		// 缩小窗口
		while (right - left >= p.length) {
			if (valid === need.size) {
				result.push(left);
			}

			let lChar = s[left++];
			if (need.has(lChar)) {
				if (window.get(lChar) === need.get(lChar)) {
					valid--;
				}
				window.set(lChar, window.get(lChar) - 1);
			}
		}
	}

	return result;
};

let s = 'abaabab',
	p = 'ab';
console.log(findAnagrams(s, p));
console.log(findAnagrams2(s, p));
