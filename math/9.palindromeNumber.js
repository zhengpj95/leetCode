/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 * Follow up: Could you solve it without converting the integer to a string?
 * Constraints:
 * -2^31 <= x <= 2^31 - 1
 * @author zheng
 * @date 2020/11/14 18:04:24
 */

/**
 * solve by converting the integer to a string.
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
	let arr = (x + '').split('');

	let len = arr.length / 2 + 1;
	for (let i = 0, j = arr.length - 1; i < len; i++, j--) {
		if (arr[i] != arr[j]) {
			return false;
		}
	}
	return true;
};

/**
 * solve without converting the integer to a string.
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome2 = function (x) {
	if (x < 0 || (x % 10 == 0 && x != 0)) {
		return false;
	}

	let reverse = 0;
	while (x > reverse) {
		reverse = parseInt(reverse * 10 + (x % 10));
		x = parseInt(x / 10);
	}
	return x == reverse || x == parseInt(reverse / 10);
};

let x = 121;
console.log(isPalindrome(x));
console.log(isPalindrome2(x));
