/**
 * Given a set of distinct integers, nums, return all possible subsets (the power set).
 * Note: The solution set must not contain duplicate subsets.
 * @author zheng
 * @date 2020/11/12 09:35:54
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
	if (!nums || !nums.length) return [[]];
	let result = [];

	let backtrack = (nums, track, index) => {
		result.push([...track]);
		if (track.length >= nums.length) {
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
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets2 = function (nums) {
	let result = [];

	let backtrack = (track, index) => {
		result.push([...track]);
		if (track.length >= nums.length) return;
		for (let i = index; i < nums.length; i++) {
			backtrack([...track, nums[i]], i + 1);
		}
	};

	backtrack([], 0);
	return result;
};

let nums = [1, 2, 3];
console.log(subsets(nums));
nums = [];
console.log(subsets2([]));
