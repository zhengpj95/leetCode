/**
 * Your are given an array of integers prices,
 * for which the i-th element is the price of a given stock on day i;
 * and a non-negative integer fee representing a transaction fee.
 *
 * You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
 * You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)
 *
 * Return the maximum profit you can make.
 *
 * Note:
 * 0 < prices.length <= 50000.
 * 0 < prices[i] < 50000.
 * 0 <= fee < 50000.
 * @author zheng
 * @date 2020/12/26 23:20:09
 */

/**
 * 买入时缴费
 * 特别注意一点，buy=[Number.MIN_SAFE_INTEGER]，buy=[-prices[0]]则会有问题
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
	if (!prices || !prices.length) return 0;
	let buy = [Number.MIN_SAFE_INTEGER];
	let sell = [0];
	for (let i = 1; i <= prices.length; i++) {
		buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i - 1] - fee);
		sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i - 1]);
	}
	return sell[sell.length - 1];
};

/**
 * 卖出时缴费
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit2 = function (prices, fee) {
	if (!prices || !prices.length) return 0;
	let buy = [-prices[0]]; //[Number.MIN_SAFE_INTEGER];
	let sell = [0];
	for (let i = 1; i <= prices.length; i++) {
		buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i - 1]);
		sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i - 1] - fee);
	}
	return sell[sell.length - 1];
};
