/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1.
 * That is,
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), for N > 1.
 * Given N, calculate F(N).
 *
 * Note:0 ≤ N ≤ 30.
 * @author zheng
 * @date 2020/11/16 12:23:43
 */

/**
 * Recursion
 * Time complexity: O(2^N)
 * Space complexity: O(N)
 * @param {number} N
 * @return {number}
 */
const fib1 = function (N) {
	if (N === 0) return 0;
	if (N === 1) return 1;
	return fib1(N - 1) + fib1(N - 2);
};

/**
 * Top-Down Approach using Memoization
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {number} N
 * @return {number}
 */
const fib2 = function (N) {
	let memo = {
		0: 0,
		1: 1,
	};
	let getMemo = (n) => {
		if (memo[n] != undefined || memo[n] != null) return memo[n];
		memo[n] = getMemo(n - 1) + getMemo(n - 2);
		return memo[n];
	};

	return getMemo(N);
};

/**
 * Bottom-Up Approach using Memoization
 * @param {number} N
 * @returns {number}
 */
const fib3 = function (N) {
	let memo = [0, 1];
	for (let i = 2; i <= N; i++) {
		memo[i] = memo[i - 1] + memo[i - 2];
	}
	return memo[N];
};

/**
 * Iterative Top-Down Approach
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {number} N
 * @returns {number}
 */
const fib4 = function (N) {
	if (N <= 1) return N;
	else if (N === 2) return 1;

	let sum = 0;
	let prev = 1;
	let prev2 = 1;
	for (let i = 3; i <= N; i++) {
		sum = prev + prev2;
		prev2 = prev;
		prev = sum;
	}
	return sum;
};

// console.log(fib1(2));
// console.log(fib2(2));
// console.log(fib2(3));
// console.time('a');
// console.time('b');
// console.log(fib1(40));
// console.timeEnd('a');
// console.log(fib2(40));
// console.timeEnd('b');

console.log(fib3(40));
console.log(fib4(40));
