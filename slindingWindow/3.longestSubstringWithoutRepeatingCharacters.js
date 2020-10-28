/**
 * Related Topics: Hash Table, Two Pointers, String, Sliding Window
 * Given a string, find the length of the longest substring without repeating characters.
 */

/**
 * Time complexity: O(2n)
 * Space complexity: O(k)
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
	let len = s.length;
	if (len <= 1) {
		return len;
	}

	let max = 1;
	let tempMax = 1;
	let star = 0;
	for (let i = 1; i < len; ) {
		let idx = s.substring(star, i).indexOf(s.charAt(i));
		if (idx === -1) {
			tempMax++;
		}
		max = Math.max(max, tempMax);
		if (idx !== -1) {
			tempMax = 1;
			star += 1;
			i = star + 1;
		} else {
			i++;
		}
	}
	return max;
};

/**
 * Approach 2: Sliding Window
 * Time complexity : O(2n) = O(n)
 * Space complexity : O(min(m, n))
 * @param {string} s
 * @returns {number}
 */
const lengthOfLongestSubstring2 = function (s) {
	let set = new Set();
	let len = s.length;
	let left = 0;
	let right = 0;
	let max = 0;

	while (left < len && right < len) {
		if (!set.has(s.charAt(right))) {
			set.add(s.charAt(right++));
			max = Math.max(max, right - left);
		} else {
			set.delete(s.charAt(left++));
		}
	}
	return max;
};

/**
 * [left, right)
 * Time complexity : O(2n) = O(n)
 * Space complexity : O(min(m, n))
 * @param {string} s
 * @returns {number}
 */
const lengthOfLongestSubstring3 = function (s) {
	let size = s.length;
	if (size <= 1) return size;

	let left = 0,
		right = 0;
	let window = new Map();
	let max = 0;

	while (right < size) {
		let char = s[right];
		window.set(char, window.has(char) ? window.get(char) + 1 : 1);
		right++;

		// 保证无重复
		while (window.get(char) > 1) {
			let lChar = s[left];
			window.set(lChar, window.get(lChar) - 1);
			left++;
		}

		// [left, right) 左闭右开，此时 right 已经加多 1 了，不需包含 right 处字符
		max = Math.max(max, right - left);
	}
	return max;
};

console.log(lengthOfLongestSubstring3('abcabcbb'));
console.log(lengthOfLongestSubstring3('bbbbb'));
console.log(lengthOfLongestSubstring3('pwwkew'));
console.log(lengthOfLongestSubstring3(' '));
console.log(lengthOfLongestSubstring3(''));
console.log(lengthOfLongestSubstring3('au'));
console.log(lengthOfLongestSubstring3('dvdf'));
