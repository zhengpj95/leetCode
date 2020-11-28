/**
 * On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
 *
 * Once you pay the cost, you can either climb one or two steps.
 * You need to find minimum cost to reach the top of the floor,
 * and you can either start from the step with index 0, or the step with index 1.
 *
 * Note:
 * cost will have a length in the range [2, 1000].
 * Every cost[i] will be an integer in the range [0, 999].
 * @author zheng
 * @date 2020/11/28 11:22:23
 */

/**
 * Time Limit Exceeded
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs1 = function (cost) {
	let helper = (cost, index) => {
		if (index < 0) return 0;
		return Math.min(helper(cost, index - 1) + cost[index], helper(cost, index - 2) + cost[index]);
	};
	cost.push(0);
	return helper(cost, cost.length - 1);
};

/**
 * Time complexity: O(T): O(n)
 * Space complexity: O(M): O(n)
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs2 = function (cost) {
	let memo = [];
	let helper = (cost, index) => {
		if (index < 0) return 0;
		if (memo[index]) return memo[index];
		memo[index] = Math.min(helper(cost, index - 1) + cost[index], helper(cost, index - 2) + cost[index]);
		return memo[index];
	};
	cost.push(0);
	return helper(cost, cost.length - 1);
};

/**
 * O(T):O(n)
 * O(M):O(n)
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairsWithDP1 = function (cost) {
	if (!cost || !cost.length) return 0;
	if (cost.length <= 2) return Math.min(...cost);
	let dp = [cost[0], cost[1]];
	for (let i = 2; i < cost.length; i++) {
		dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);
	}
	return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairsWithDP2 = function (cost) {
	if (!cost || !cost.length) return 0;
	if (cost.length <= 2) return Math.min(...cost);
	cost.push(0); //加多一个，表示这个点是顶点
	let dp = [cost[0], cost[1]];
	for (let i = 2; i < cost.length; i++) {
		dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);
	}
	return dp[dp.length - 1];
};

/**
 * O(T): O(n)
 * O(M): O(1)
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairsWithDP3 = function (cost) {
	let min1 = cost[0] ?? 0;
	let min2 = cost[1] ?? 0;
	for (let i = 2; i < cost.length; i++) {
		let min = Math.min(min1, min2) + cost[i];
		min1 = min2;
		min2 = min;
	}
	return Math.min(min1, min2);
};
