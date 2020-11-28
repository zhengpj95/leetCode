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
