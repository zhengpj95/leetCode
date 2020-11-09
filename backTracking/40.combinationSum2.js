/**
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 *
 * Constraints:
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30
 * @author zheng
 * @date 2020/11/09 14:59:55
 */

/**
 * 问题在于怎么过滤重复得组合？？
 * 1. 得到一个组合后，再去跟其他组合判断吗？这是一个方法，但是时间复杂度太高了，不好。
 * 2. 在递归下一层得时候，就判断是否会导致出现重复？这个方法可行，但是怎么判断呢？
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
	let result = [];
	candidates.sort((a, b) => a - b);
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
			// 过滤同一个位置可能出现相同的元素
			if (i > idx && candidates[i] === candidates[i - 1]) continue;
			track.push(candidates[i]);
			backtrace(candidates, track, i + 1);
			track.pop();
		}
	};

	backtrace(candidates, [], 0);
	return result;
};

let candidates = [10, 1, 2, 7, 6, 1, 5],
	target = 8;
console.log(combinationSum2(candidates, target));
