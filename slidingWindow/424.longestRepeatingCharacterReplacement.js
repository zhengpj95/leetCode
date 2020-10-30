/**
 * Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.
 * In one operation, you can choose any character of the string and change it to any other uppercase English character.
 * Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.
 *
 * Note: Both the string's length and k will not exceed 10^4.
 * @author zheng
 * @date 2020/10/28 17:03:27
 */

/**
 * Approach: Sliding Window
 * 窗口扩展以及移动过程中，找出区间内同字母数量最多的，其他的字母就可以替换 k 次，如果其他字母数量大于 k 次，就是窗口缩小的时候
 * Time complexity: O(n) (n = s.length)
 * Space complexity: O(n)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
	if (s.length <= 1) return s.length;
	let max = 0;
	let mostLetter = 0;
	let left = 0;
	let chars = new Array(26).fill(0); //字符ASCII码数组

	for (let right = 0; right < s.length; right++) {
		let charIdx = s[right].charCodeAt() - 'A'.charCodeAt(); //字母ASCII码的数组下标
		mostLetter = Math.max(mostLetter, ++chars[charIdx]); //区间内最多数量的字母

		// 可填充的字母数量超过 k 个，缩小窗口
		if (right - left + 1 - mostLetter > k) {
			chars[s[left].charCodeAt() - 'A'.charCodeAt()]--;
			left++;
		}

		max = Math.max(max, right - left + 1);
	}

	return max;
};

let s = 'ABAB',
	k = 2;

s = s.toUpperCase();
console.log(characterReplacement(s, k));
