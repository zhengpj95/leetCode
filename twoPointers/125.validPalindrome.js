/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 * Constraints: s consists only of printable ASCII characters.
 * @author zheng
 * @date 2020/11/02 09:44:11
 */

/**
 * Time complexity: O(n) n=s.length
 * Space complexity: O(1)
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
	s = s.toLowerCase().replace(/[^0-9a-z]+/gi, '');
	let left = 0,
		right = s.length - 1;
	while (left < right) {
		if (s[left] !== s[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
