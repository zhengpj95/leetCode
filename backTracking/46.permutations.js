/**
 * Given a collection of distinct integers, return all possible permutations.
 * @author zheng
 * @date 2020/11/10 11:36:01
 */

/**
 * Time complexity: O(n!) n = nums.length 不是很确定回溯的时空复杂度
 * Space complexity: O(n!) ??
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
	if (!nums || !nums.length) return [];
	let result = [];

	let backtrack = (nums, track) => {
		if (track.length === nums.length) {
			result.push([...track]);
			return;
		}

		for (let num of nums) {
			// if (track.indexOf(num) >= 0) continue;
			if (track.includes(num)) continue;
			track.push(num);
			backtrack(nums, track);
			track.pop();
		}
	};
	backtrack(nums, []);
	return result;
};

console.log(permute([1, 2, 3]));
