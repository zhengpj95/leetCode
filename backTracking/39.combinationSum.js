/**
 * Given an array of distinct integers candidates and a target integer target,
 * return a list of all unique combinations of candidates where the chosen numbers sum to target.
 * You may return the combinations in any order.
 *
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 *
 * It is guaranteed that the number of unique combinations
 * that sum up to target is less than 150 combinations for the given input.
 *
 * Constraints:
 * 1 <= candidates.length <= 30
 * 1 <= candidates[i] <= 200
 * All elements of candidates are distinct.
 * 1 <= target <= 500
 * @author zheng
 * @date 2020/11/09 14:27:56
 */

/**
 * 回溯，递归+DFS
 * 时间、空间复杂度是多少？不懂得如何分析
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
	let result = [];

	/**
	 * @param {number[]} candidates
	 * @param {number[]} track
	 */
	let backtrace = (candidates, track, idx) => {
		let sum = track.reduce((a, b) => a + b, 0);
		if (sum === target) {
			result.push([...track]);
			return;
		}
		if (sum > target) {
			return;
		}

		for (let i = idx; i < candidates.length; i++) {
			track.push(candidates[i]);
			backtrace(candidates, track, i);
			track.pop();
		}
	};

	backtrace(candidates, [], 0);
	return result;
};

let candidates = [2, 3, 6, 7],
	target = 7;
(candidates = [2, 3, 5]), (target = 8);
(candidates = [2]), (target = 1);
(candidates = [1]), (target = 1);
(candidates = [1]), (target = 2);
console.log(combinationSum(candidates, target));
