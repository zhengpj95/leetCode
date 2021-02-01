/**
 * @author zheng
 * @date 2021/02/01 21:54:32
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	if (!nums || !nums.length) return -1;
	let low = 0,
		high = nums.length - 1;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (nums[mid] == target) {
			return mid;
		} else if (nums[mid] < target) {
			low = mid + 1;
		} else if (nums[mid] > target) {
			high = mid - 1;
		}
	}
	return -1;
};
