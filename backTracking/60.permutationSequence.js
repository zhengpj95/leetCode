/**
 * The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
 * By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
 * 1. "123"
 * 2. "132"
 * 3. "213"
 * 4. "231"
 * 5. "312"
 * 6. "321"
 * Given n and k, return the kth permutation sequence.
 *
 * Constraints:
 * 1 <= n <= 9
 * 1 <= k <= n!
 * @author zheng
 * @date 2020/11/14 09:05:29
 */

/**
 * Time Limit Exceeded
 * 找到就该退出，不需要找出全部
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function (n, k) {
	let result = [];

	/**
	 * @param {number} n
	 * @param {number[]} track
	 */
	let backtrack = (n, track) => {
		if (track.length === n) {
			result.push([...track].join(''));
			return;
		}

		for (let i = 1; i <= n; i++) {
			if (track.includes(i)) continue;
			backtrack(n, [...track, i], i + 1);
		}
	};

	backtrack(n, []);
	return result[k - 1];
};

/**
 * 耗时太多了，击败5%，下一步怎么优化呢？？？？
 * Runtime: 7072 ms, faster than 5.51% of JavaScript online submissions for Permutation Sequence.
 * Memory Usage: 44.6 MB, less than 23.85% of JavaScript online submissions for Permutation Sequence.
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation2 = function (n, k) {
	let result;
	/**
	 * @param {number} n
	 * @param {string} track
	 */
	let backtrack = (n, track) => {
		if (track.length === n) {
			if (--k < 1) return track;
		}

		for (let i = 1; i <= n; i++) {
			if (track.includes(i)) continue;
			if (result) return;
			let res = backtrack(n, track + i, i + 1);
			if (res && res.length === n && !result) {
				result = res;
			}
		}
	};
	backtrack(n, '');
	return result;
};

let n = 3,
	k = 3;

(n = 9), (k = 25996);
// (n = 4), (k = 9);
// (n = 3), (k = 1);
console.log(getPermutation2(n, k));
