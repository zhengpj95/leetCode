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
