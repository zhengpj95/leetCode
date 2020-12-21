/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit.
 * You may complete as many transactions as you like
 * (ie, buy one and sell one share of the stock multiple times) with the following restrictions:
 * You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 * After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
 * @author zheng
 * @date 2020/12/20 22:32:24
 */

/**
 * O(T)=O(n)
 * O(S)=O(3n)=O(n)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	if (!prices) return 0;
	let size = prices.length;
	let hold = new Array(size + 1); //持有
	let sold = new Array(size + 1); //卖出
	let rest = new Array(size + 1); //cooldown

	sold[0] = rest[0] = 0;
	hold[0] = Number.MIN_SAFE_INTEGER;

	for (let i = 1; i <= size; i++) {
		hold[i] = Math.max(hold[i - 1], rest[i - 1] - prices[i - 1]);
		sold[i] = hold[i - 1] + prices[i - 1];
		rest[i] = Math.max(rest[i - 1], sold[i - 1]);
	}

	return Math.max(sold[size], rest[size]);
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
	if (!prices || prices.length <= 1) return 0;
	let size = prices.length;
	let hold = new Array(size); //持有
	let sold = new Array(size); //卖出
	let rest = new Array(size); //cooldown

	sold[0] = Number.MIN_SAFE_INTEGER;
	rest[0] = 0; //开始时，未有买卖
	hold[0] = -prices[0]; //买入后，持有-prices[0]

	for (let i = 1; i < size; i++) {
		sold[i] = hold[i - 1] + prices[i];
		rest[i] = Math.max(rest[i - 1], sold[i - 1]);
		hold[i] = Math.max(hold[i - 1], rest[i - 1] - prices[i]);
	}

	return Math.max(sold[size - 1], rest[size - 1]);
};

/**
 * Runtime: 76 ms, faster than 93.53% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
 * Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit3 = function (prices) {
	if (!prices || prices.length <= 1) return 0;

	let hold = -prices[0];
	let sold = Number.MIN_SAFE_INTEGER;
	let rest = 0;

	for (let i = 1; i < prices.length; i++) {
		let preSold = sold,
			preRest = rest;
		sold = hold + prices[i];
		rest = Math.max(rest, preSold);
		hold = Math.max(hold, preRest - prices[i]);
	}

	return Math.max(sold, rest);
};

/**
 * Runtime: 72 ms, faster than 97.65% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
 * Memory Usage: 41.2 MB, less than 7.65% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit4 = function (prices) {
	if (!prices || prices.length <= 1) return 0;

	let hold = -prices[0];
	let sold = Number.MIN_SAFE_INTEGER;
	let rest = 0;

	for (let i = 1; i < prices.length; i++) {
		[sold, rest, hold] = [hold + prices[i], Math.max(rest, sold), Math.max(hold, rest - prices[i])];
	}

	return Math.max(sold, rest);
};
