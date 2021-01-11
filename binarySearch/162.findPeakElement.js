/**
 * A peak element is an element that is strictly greater than its neighbors.
 * Given an integer array nums, find a peak element, and return its index.
 * If the array contains multiple peaks, return the index to any of the peaks
 * You may imagine that nums[-1] = nums[n] = -∞.
 *
 * Follow up: Could you implement a solution with logarithmic complexity?
 * @author zheng
 * @date 2021/01/11 22:37:14
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	let idx = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[idx] < nums[i]) {
			idx = i;
		}
	}
	return idx;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement2 = function (nums) {
	let low = 0,
		high = nums.length - 1;
	while (low < high) {
		let mid = Math.floor((low + high) / 2);
		if (nums[mid + 1] > nums[mid]) {
			low = mid + 1;
		} else {
			high = mid;
		}
	}
	return low;
};
