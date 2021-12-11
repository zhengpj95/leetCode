/**
 * Write a program to check whether a given number is an ugly number.
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 *
 * Note:
 * 1 is typically treated as an ugly number.
 * Input is within the 32-bit signed integer range: [−2^31,  2^31 − 1].
 * @author zheng
 * @date 2020/12/13 13:39:15
 */

/**
 * 2^m=num, 3^n=num, 5^k=num, O(T)=min(m,n,k) ??
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
	for (let item of [2, 3, 5]) {
		while (num && num % item == 0) {
			num /= item;
		}
	}
	return num == 1;
};

/**
 * O(T)=O(N)
 * O(S)=O(N)
 * @param {number} num
 * @return {boolean}
 */
var isUgly2 = function (num) {
	if (num == 1) return true;
	let dp = [1];
	let t2 = 0,
		t3 = 0,
		t5 = 0;
	let idx = 1;
	while (dp[dp.length - 1] < num) {
		dp[i] = Math.min(dp[t2] * 2, dp[t3] * 3, dp[t5] * 5);
		if (dp[i] == dp[t2] * 2) t2++;
		if (dp[i] == dp[t3] * 3) t3++;
		if (dp[i] == dp[t5] * 5) t5++;
		idx++;
	}
	return dp[dp.length - 1] == num;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly3 = function (n) {
	if (n <= 0) return false;
	if (n == 1) return true;
	while (n % 5 == 0) {
		n = Math.floor(n / 5);
	}
	while (n % 3 == 0) {
		n = Math.floor(n / 3);
	}
	while (n % 2 == 0) {
		n = Math.floor(n / 2);
	}
	return n == 1;
};
