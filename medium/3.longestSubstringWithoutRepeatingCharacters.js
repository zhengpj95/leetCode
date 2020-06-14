/**
 * Given a string, find the length of the longest substring without repeating characters.
 */

/**
 * Time complexity: O(n)
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
	for (let i = 1; i < len;) {
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

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("dvdf"));
