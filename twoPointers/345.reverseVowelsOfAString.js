/**
 * Write a function that takes a string as input and reverse only the vowels of a string.
 * @author zheng
 * @date 2020/11/03 11:24:00
 *
 * Note: The vowels does not include the letter "y".
 */

/**
 * Time complexity: O(n) n = s.length
 * Space complexity: O(n) or O(10)
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
	let vowels = 'aeiouAEIOU'; //['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let arr = s.split('');
	let left = 0,
		right = s.length - 1;

	// while (left < right) {
	// 	while (vowels.indexOf(arr[left]) < 0 && left < right) left++;
	// 	while (vowels.indexOf(arr[right]) < 0 && left < right) right--;
	// 	if (vowels.indexOf(arr[left]) > -1 && vowels.indexOf(arr[right]) > -1) {
	// 		[arr[left], arr[right]] = [arr[right], arr[left]];
	// 		left++;
	// 		right--;
	// 	}
	// }

	while (left < right) {
		while (!vowels.includes(arr[left]) && left < right) left++;
		while (!vowels.includes(arr[right]) && left < right) right--;
		if (vowels.includes(arr[left]) && vowels.includes(arr[right])) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			left++;
			right--;
		}
	}
	return arr.join('');
};

/**
 * Time complexity: O(n) n = s.length
 * Space complexity: O(n)
 * @param {string} s
 * @return {string}
 */
const reverseVowels2 = function (s) {
	let vowels = /[aeiou]/i;
	let sArr = s.split('');
	let left = 0,
		right = s.length - 1;
	while (left < right) {
		while (!vowels.test(sArr[left]) && left < right) left++;
		while (!vowels.test(sArr[right]) && left < right) right--;
		[sArr[left], sArr[right]] = [sArr[right], sArr[left]];
		left++;
		right--;
	}
	return sArr.join('');
};

console.log(reverseVowels('hello'));
console.log(reverseVowels('leetcode'));
console.log(reverseVowels('aA'));
