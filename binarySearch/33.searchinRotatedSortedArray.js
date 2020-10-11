/**
 * You are given an integer array nums sorted in ascending order, and an integer target.
 * Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * If target is found in the array return its index, otherwise, return -1.
 *
 * Related Topics: Array, Binary Search
 *
 * @author zheng
 * @date 2020/10/11 17:03:41
 */

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const bruteSearch = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) {
			return i;
		}
	}
	return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = function (nums, target) {};
