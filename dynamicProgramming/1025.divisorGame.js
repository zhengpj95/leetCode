/**
 * Alice and Bob take turns playing a game, with Alice starting first.
 * Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:
 * 		1. Choosing any x with 0 < x < N and N % x == 0.
 * 		2. Replacing the number N on the chalkboard with N - x.
 * Also, if a player cannot make a move, they lose the game.
 * Return True if and only if Alice wins the game, assuming both players play optimally.
 * Note: 1 <= N <= 1000
 * @author zheng
 * @date 2020/11/28 22:20:45
 */

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
	return N % 2 == 0;
};

/**
 * LeetCode他人解法：https://leetcode.com/problems/divisor-game/discuss/323884/c%2B%2B-dp-100-time-complexity
 *
 * Let's consider dynomic approach to solve this problem.
 * Let dp[i] be true if Alice wins and false for the opposite case.
 * Each i such that 1 <= i <= N is either winning or losing position for Alice.
 * It's easy to see that if 0 < x < i such that i % x == 0
 * and if position i - x is winning position for Alice i.e. dp[i - x] == true,
 * then she can just subtract x from i and move to winning position,
 * therefore for her i is also winning position.
 * Now it's only left to consider all possible cases where Alice can win and return dp[N].
 * @param {number} N
 * @return {boolean}
 */
var divisorGame2 = function (N) {
	let dp = new Array(N + 1).fill(false);
	for (let i = 2; i <= N; i++) {
		for (let j = 1; j * j <= i; j++) {
			if (i % j === 0 && !dp[i - j]) {
				dp[i] = true;
			}
		}
	}
	return dp[N];
};
