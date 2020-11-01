/**
 * Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
 * Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Clarification:
 * Confused why the returned value is an integer, but your answer is an array?
 * Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller.
 *
 * Internally you can think of this:
 * // nums is passed in by reference. (i.e., without making a copy)
 * int len = removeDuplicates(nums);
 * // any modification to nums in your function would be known by the caller.
 * // using the length returned by your function, it prints the first len elements.
 * for (int i = 0; i < len; i++) {
 * 		print(nums[i]);
 * }
 * @author zheng
 * @date 2020/11/01 11:01:46
 */

/**
 * 使用了 O(n) 的额外空间，确实不该，如果是未排序的数组，使用这种方式是可以的。
 * 但是题目所给已经是有序的了，O(1) 的空间复杂度即可完成
 * Time complexity: O(n) n = nums.length
 * Space complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
	if (!nums) return 0;
	if (nums.length <= 2) return nums.length;

	let idx = 0;
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
		if (map.get(nums[i]) <= 2) {
			nums[idx] = nums[i];
			idx++;
		}
	}
	return idx;
};
let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]; //[1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
console.log(nums);
