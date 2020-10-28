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
	let map = new Set();
	let len = s.length;
	let star = 0;
	let end = 0;
	let max = 0;

	while (star < len && end < len) {
		if (!map.has(s.charAt(end))) {
			map.add(s.charAt(end++));
			max = Math.max(max, end - star);
		} else {
			map.delete(s.charAt(star++));
		}
	}
	return max;
};

console.log(lengthOfLongestSubstring2('abcabcbb'));
console.log(lengthOfLongestSubstring2('bbbbb'));
console.log(lengthOfLongestSubstring2('pwwkew'));
console.log(lengthOfLongestSubstring2(' '));
console.log(lengthOfLongestSubstring2(''));
console.log(lengthOfLongestSubstring2('au'));
console.log(lengthOfLongestSubstring2('dvdf'));
