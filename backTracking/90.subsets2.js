/**
 * Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
 * Note: The solution set must not contain duplicate subsets.
 * @author zheng
 * @date 2020/11/12 10:01:58
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
	nums.sort((a, b) => a - b);
	let result = [];

	/**
	 * @param {number[]} nums
	 * @param {number[]} track
	 * @param {number} index
	 */
	let backtrack = (nums, track, index) => {
		if (track.length > nums.length || index > nums.length) return;
		result.push([...track]);
		for (let i = index; i < nums.length; i++) {
			if (i > index && nums[i] === nums[i - 1]) continue;
			backtrack(nums, [...track, nums[i]], i + 1);
		}
	};

	backtrack(nums, [], 0);
	return result;
};

let nums = [1, 2, 2];
console.log(subsetsWithDup(nums));
nums = [4, 4, 4, 1, 4];
console.log(subsetsWithDup(nums));
