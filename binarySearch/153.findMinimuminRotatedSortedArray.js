/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 * For example, the array nums = [0,1,2,4,5,6,7] might become:
 * [4,5,6,7,0,1,2] if it was rotated 4 times.
 * [0,1,2,4,5,6,7] if it was rotated 7 times.
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results
 * in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 * Given the sorted rotated array nums, return the minimum element of this array.
 * @author zheng
 * @date 2021/01/08 20:47:29
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	return Math.min(...nums);
};

/**
 * Runtime: 72 ms, faster than 95.14% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
 * Memory Usage: 38.7 MB, less than 40.14% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
 * @param {number[]} nums
 * @return {number}
 */
var findMin2 = function (nums) {
	if (!nums.length) return 0;
	let low = 0,
		high = nums.length - 1;
	if (nums[low] < nums[high]) return nums[low];

	while (low < high) {
		let mid = Math.floor((low + high) / 2);
		if (nums[mid] < nums[high]) {
			high = mid;
		} else {
			low = mid + 1;
		}
	}
	return nums[low];
};
