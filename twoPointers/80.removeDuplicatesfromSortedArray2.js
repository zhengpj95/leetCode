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
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
	if (!nums) return 0;
	if (nums.length <= 2) return nums.length;
};
let nums = [1, 1, 1, 2, 2, 3];
