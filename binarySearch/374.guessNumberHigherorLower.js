/**
 * We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked.
 * Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
 * You call a pre-defined API int guess(int num), which returns 3 possible results:
 * -1: The number I picked is lower than your guess (i.e. pick < num).
 * 1: The number I picked is higher than your guess (i.e. pick > num).
 * 0: The number I picked is equal to your guess (i.e. pick == num).
 * Return the number that I picked.
 *
 * Constraints:1 <= n <= 2^31 - 1
 * 1 <= pick <= n
 * @author zheng
 * @date 2021/01/01 19:03:47
 */

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
	let low = 1;
	let high = n;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (guess(mid) > 0) {
			low = mid + 1;
		} else if (guess(mid) < 0) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return n;
};
