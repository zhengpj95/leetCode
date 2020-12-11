/**
 * You are given coins of different denominations and a total amount of money amount.
 * Write a function to compute the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 *
 * Constraints:
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 2^31 - 1
 * 0 <= amount <= 10^4
 * @author zheng
 * @date 2020/12/11 19:55:49
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	let dp = new Array(amount + 1);
	dp[0] = 0;
	for (let i = 1; i <= amount; i++) {
		let res = Number.MAX_SAFE_INTEGER;
		for (let j = 0; j < coins.length; j++) {
			if (dp[i - coins[j]] != null && coins[j] <= i) {
				res = Math.min(dp[i - coins[j]] + 1, res);
			}
		}
		dp[i] = res;
	}
	return dp[dp.length - 1] == Number.MAX_SAFE_INTEGER ? -1 : dp[dp.length - 1];
};

/**
 * O(T) = O(coins.length * amount)
 * O(S) = O(amount) = O(1)
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange2 = function (coins, amount) {
	let dp = new Array(amount + 1).fill(amount + 1);
	dp[0] = 0;
	for (let i = 1; i <= amount; i++) {
		for (let j = 0; j < coins.length; j++) {
			if (coins[j] <= i) {
				dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
			}
		}
	}
	return dp[dp.length - 1] == amount + 1 ? -1 : dp[dp.length - 1];
};
