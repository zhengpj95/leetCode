/**
 * Find the kth largest element in an unsorted array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Note: You may assume k is always valid, 1 ≤ k ≤ array's length.
 * @author zheng
 * @date 2021/01/06 23:14:42
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	return nums.sort((a, b) => b - a)[k - 1];
};
