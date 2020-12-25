/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete at most two transactions.
 * Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 *
 * Constraints:
 * 1 <= prices.length <= 10^5
 * 0 <= prices[i] <= 10^5
 * @author zheng
 * @date 2020/12/25 23:41:54
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	if (!prices || prices.length < 2) return 0;

	// 最多买卖两次，四个变量
	let buy_1 = [-prices[0]],
		sell_1 = [0]; //买卖一次
	let buy_2 = [-prices[0]],
		sell_2 = [0]; //买卖两次

	for (let i = 1; i <= prices.length; i++) {
		buy_1[i] = Math.max(buy_1[i - 1], -prices[i - 1]);
		sell_1[i] = Math.max(sell_1[i - 1], buy_1[i - 1] + prices[i - 1]);

		buy_2[i] = Math.max(buy_2[i - 1], sell_1[i - 1] - prices[i - 1]); //第二次买入，必须在第一次卖出后才能买入，所以是 sell_1[i - 1]
		sell_2[i] = Math.max(sell_2[i - 1], buy_2[i - 1] + prices[i - 1]);
	}

	return sell_2[sell_2.length - 1];
};
