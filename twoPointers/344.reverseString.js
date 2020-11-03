/**
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * You may assume all the characters consist of printable ascii characters.
 * @author zheng
 * @date 2020/11/03 11:12:36
 */

/**
 * Two Pointers
 * Time complexity: O(n) n=s.length
 * Space complexity: O(1)
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
	let left = 0,
		right = s.length - 1;

	while (left < right) {
		[s[left], s[right]] = [s[right], s[left]];
		left++;
		right--;
	}

	// s.reverse();
};

/**
 * Recursion
 * Time complexity: O(n) n=s.length
 * Space complexity: O(n)
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString2 = function (s) {
	let reverse = (s, left, right) => {
		if (left >= right) return;
		[s[left], s[right]] = [s[right], s[left]];
		left++;
		right--;
		reverse(s, left, right);
	};
	reverse(s, 0, s.length - 1);
};

let s = ['h', 'e', 'l', 'l', 'o'];
s = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString2(s);
console.log(s);
