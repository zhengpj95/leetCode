/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the i-th day.
 * Design an algorithm to find the maximum profit. You may complete at most k transactions.
 * Notice that you may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 *
 * Constraints:
 * 0 <= k <= 10^9
 * 0 <= prices.length <= 1000
 * 0 <= prices[i] <= 1000
 * @author zheng
 * @date 2020/12/26 23:07:50
 */

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
	// 一组股票，买入卖出一趟，至少需要两天时间（假设买入时价格低于卖出时价格）
	// 那么一组股票，最多有 prices.length / 2 次交易
	// 当 k >= 这个临界值时，就相当于交易无穷次了
	if (k >= prices.length >>> 1) {
		let buy = -prices[0],
			sell = 0;
		for (let i = 1; i <= prices.length; i++) {
			[buy, sell] = [Math.max(buy, sell - prices[i - 1]), Math.max(sell, buy + prices[i - 1])];
		}
		return sell;
	}

	let buy = new Array(k + 1).fill(Number.MIN_SAFE_INTEGER); //对应的i表示买入 i 次
	let sell = new Array(k + 1).fill(0);

	for (let price of prices) {
		for (let i = k; i > 0; i--) {
			buy[i] = Math.max(buy[i], sell[i - 1] - price);
			sell[i] = Math.max(sell[i], buy[i] + price);
		}
	}
	return sell[k];
};
