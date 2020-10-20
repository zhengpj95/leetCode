/**
 * Given a sorted array and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	if (!nums.length) {
		return 0;
	}
	let low = 0;
	let height = nums.length - 1;

	while (low <= height) {
		let mid = Math.floor((low + height) / 2);
		if (target == nums[mid]) {
			return mid;
		}
		if (target < nums[mid]) {
			height = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return low;
};