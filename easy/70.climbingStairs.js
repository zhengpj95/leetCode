/**
 * dp
 * Time complexity : O(n)
 * Space complexity : O(n)
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * Note: Given n will be a positive integer.
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
	if (n === 1) {
		return 1;
	}

	let dp = new Array(n).fill(1 + 1);
	dp[0] = 0;
	dp[1] = 1;
	dp[2] = 2;
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return Math.max(...dp);
};

/**
 * Brute Force
 * Time complexity : O(2^n)
 * Space complexity : O(n)
 * @param {number} n 
 * @returns {number}
 */
const climbStairs2 = function (n) {
	return climb_stairs2(0, n);
};

const climb_stairs2 = function (i, n) {
	if (i > n) {
		return 0;
	}
	if (i === n) {
		return 1;
	}
	return climb_stairs2(i + 1, n) + climb_stairs2(i + 2, n);
};

/**
 * Recursion with Memoization
 * Time complexity : O(n)
 * Space complexity : O(n)
 * @param {number} n 
 * @returns {number}
 */
const climbStairs3 = function (n) {
	let memo = {};
	return climb_stairs3(0, n, memo);
};

const climb_stairs3 = function (i, n, memo) {
	if (i > n) {
		return 0;
	}
	if (i === n) {
		return 1;
	}
	if (memo[i] > 0) {
		return memo[i];
	}

	memo[i] = climb_stairs3(i + 1, n, memo) + climb_stairs3(i + 2, n, memo);
	return memo[i];
};

/**
 * Approach 4: Fibonacci Number
 * Approach 5: Binets Method
 * Approach 6: Fibonacci Formula
 */

console.log(climbStairs(4));
console.log(climbStairs2(4));
console.log(climbStairs3(4));