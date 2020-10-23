/**
 * Count the number of prime numbers less than a non-negative number, n.
 * @author zheng
 * @date 2020/10/23 09:24:46
 */

/**
 * Approach 1
 * Time complexity: O(n^1.5)
 * Space complexity: O(1)
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
	if (n <= 1) return 0;
	let count = 0;
	for (let i = 2; i < n; i++) {
		if (isPrime(i)) {
			count++;
		}
	}
	return count;
};

/**
 * Time complexity: O(sqrt(n))
 * @param {number} num
 * @returns {boolean}
 */
const isPrime = (num) => {
	if (num <= 1) return false;

	// Loop's ending condition is i * i <= num instead of i <= sqrt(num)
	// to avoid repeatedly calling an expensive function sqrt().
	for (let i = 2; i * i <= num; i++) {
		if (num % i === 0) return false;
	}
	return true;
};

console.log(countPrimes(2));
