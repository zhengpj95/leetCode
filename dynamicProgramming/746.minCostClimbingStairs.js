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
var minCostClimbingStairs = function (cost) {
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
var minCostClimbingStairs = function (cost) {
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
