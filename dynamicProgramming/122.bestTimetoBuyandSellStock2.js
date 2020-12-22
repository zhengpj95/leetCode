/**
 * Say you have an array prices for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like
 * (i.e., buy one and sell one share of the stock multiple times).
 *
 * Note: You may not engage in multiple transactions at the same time
 * (i.e., you must sell the stock before you buy again).
 *
 * Constraints:
 * 1 <= prices.length <= 3 * 10 ^ 4
 * 0 <= prices[i] <= 10 ^ 4
 * @author zheng
 * @date 2020/12/22 17:18:42
 */

/**
 * Runtime: 84 ms, faster than 56.70% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
 * Memory Usage: 41.7 MB, less than 5.31% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	if (!prices || !prices.length) return 0;

	let buy = [-prices[0]];
	let sell = [0];

	for (let i = 1; i <= prices.length; i++) {
		buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i - 1]);
		sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i - 1]);
	}
	return sell[sell.length - 1];
};

/**
 * Runtime: 76 ms, faster than 92.21% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
 * Memory Usage: 39.2 MB, less than 70.45% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
	if (!prices || !prices.length) return 0;

	let buy = -prices[0];
	let sell = 0;

	for (let i = 1; i <= prices.length; i++) {
		let tmpBuy = buy;
		buy = Math.max(buy, sell - prices[i - 1]);
		sell = Math.max(sell, tmpBuy + prices[i - 1]);
	}
	return sell;
};
