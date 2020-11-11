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
 * 2. 在递归下一轮得时候，就判断是否会导致出现重复？这个方法可行，但是怎么判断呢？
 * 		在当前位置时，我们已经做了一个选择，假设选择了5，那么后面的选择列表中我就不能在这个位置选择5了，
 * 		所以在递归下一轮时候，就判断这个位置是否做了相同的选择，若是则过滤。
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

/**
 * 如果像 题目47.Permutation2 一样使用了hash表，得到的将是满足条件的组合的排列
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum22 = function (candidates, target) {
	let result = [];
	let map = new Map();
	for (let can of candidates) {
		map.set(can, map.has(can) ? map.get(can) + 1 : 1);
	}
	/**
	 * @param {number[]} candidates
	 * @param {number[]} track
	 * @param {Map} map
	 */
	let backtrack = (track, map) => {
		let sum = track.reduce((a, b) => a + b, 0);
		if (sum === target) {
			result.push([...track]);
			return;
		}
		if (sum > target) {
			return;
		}
		// 遍历map，在同一个位置就不会出现重复的数字了
		for (let entry of map.entries()) {
			let [key, value] = entry;
			if (value === 0) continue;
			track.push(key);
			map.set(key, value - 1);
			backtrack(track, map);
			track.pop();
			map.set(key, value);
		}
	};

	backtrack([], map);
	return result;
};

let candidates = [10, 1, 2, 7, 6, 1, 5],
	target = 8;
console.log(combinationSum2(candidates, target));
console.log(combinationSum22(candidates, target));
