/**
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 * You may return the answer in any order.
 *
 * Constraints:
 * 1 <= n <= 20
 * 1 <= k <= n
 * @author zheng
 * @date 2020/11/11 10:40:48
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
	let nums = [];
	for (let i = 1; i <= n; i++) {
		nums.push(i);
	}

	let result = [];
	let backtrack = (nums, track, index) => {
		if (track.length === k) {
			result.push([...track]);
			return;
		}

		for (let i = index; i < nums.length; i++) {
			track.push(nums[i]);
			backtrack(nums, track, i + 1);
			track.pop();
		}
	};
	backtrack(nums, [], 0);
	return result;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine2 = function (n, k) {
	let result = [];
	let backtrack = (track, index, n, k) => {
		if (track.length === k) {
			result.push([...track]);
			return;
		}

		for (let i = index; i <= n; i++) {
			track.push(i);
			backtrack(track, i + 1, n, k);
			track.pop();
		}
	};
	backtrack([], 1, n, k);
	return result;
};
let n = 4,
	k = 2;
console.log(combine(n, k));
console.log(combine2(n, k));
