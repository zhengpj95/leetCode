/**
 * There are n people and 40 types of hats labeled from 1 to 40.
 * Given a list of list of integers hats, where hats[i] is a list of all hats preferred by the i-th person.
 * Return the number of ways that the n people wear different hats to each other.
 * Since the answer may be too large, return it modulo 10^9 + 7.
 *
 * Constraints:
 * n == hats.length
 * 1 <= n <= 10
 * 1 <= hats[i].length <= 40
 * 1 <= hats[i][j] <= 40
 * hats[i] contains a list of unique integers.
 * @author zheng
 * @date 2020/12/06 22:52:03
 */

/**
 * Time Limit Exceeded
 * 思路是对的
 * @param {number[][]} hats
 * @return {number}
 */
var numberWaysWithBacktracking = function (hats) {
	let total = 0;
	let size = hats.length;

	/**
	 * @param {number[]} track 路径
	 * @param {number} personIdx 第几个人
	 */
	let backtrack = (track, personIdx) => {
		if (track.length === size) {
			total++;
			return;
		}
		if (personIdx >= size) {
			return;
		}

		let hat = hats[personIdx];
		for (let item of hat) {
			if (track.includes(item)) {
				continue;
			}
			track.push(item);
			backtrack(track, personIdx + 1);
			track.pop();
		}
	};

	backtrack([], 0);
	return total % (10 ** 9 + 7);
};
