/**
 * Given an array of integers nums sorted in ascending order,
 * find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * Follow up: Could you write an algorithm with O(log n) runtime complexity?
 *
 * Constraints:
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums is a non-decreasing array.
 * -10^9 <= target <= 10^9
 * @author zheng
 * @date 2020/11/20 10:31:10
 */

/**
 * indexOf, lastIndexOf 都是一个一个遍历找元素的，时间复杂度应该是nums的长度
 * 这里的数组是有序的，所以可以使用二分法，找到匹配位置，然后向两边扩，找到start和end位置
 * Time complexity: O(n) n=nums.length
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
	if (!nums || !nums.length) return [-1, -1];
	return [nums.indexOf(target), nums.lastIndexOf(target)];
};

/**
 * Time complexity: O(logn)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange2 = function (nums, target) {
	let left = 0,
		right = nums.length - 1;
	let found = false;
	let mid = 0;
	while (left <= right && !found) {
		mid = left + Math.floor((right - left + 1) / 2);
		if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			found = true;
			break;
		}
	}
	// found
	if (found) {
		left = right = mid;
		while (left >= 0 && nums[left] == nums[right]) {
			left--;
		}
		while (right < nums.length && nums[right] === nums[mid]) {
			right++;
		}
		return [left + 1, right - 1];
	}
	return [-1, -1];
};

/**
 * Time complexity: O(logn)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange3 = function (nums, target) {
	let left = 0,
		right = nums.length - 1;
	let mid = 0;
	while (left <= right) {
		mid = left + Math.floor((right - left + 1) / 2);
		if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			break;
		}
	}
	if (left > right) {
		return [-1, -1];
	}
	left = right = mid;
	while (left - 1 >= 0 && nums[left - 1] == nums[right]) {
		left--;
	}
	while (right + 1 < nums.length && nums[right + 1] === nums[mid]) {
		right++;
	}
	return [left, right];
};

let nums = [5, 7, 7, 8, 9, 10, 12],
	target = 8;
nums = [1];
console.log(searchRange3(nums, target));
