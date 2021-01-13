/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 *
 * Follow up:
 * Try to come up as many solutions as you can,
 * there are at least 3 different ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 *
 * Constraints:
 * 1 <= nums.length <= 2 * 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * 0 <= k <= 10^5
 * @author zheng
 * @date 2021/01/13 19:35:39
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	k = k % nums.length;
	if (k == nums.length) {
		return;
	}
	while (k-- > 0) {
		nums.unshift(nums.pop());
	}
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function (nums, k) {
	let len = nums.length;
	if (k == len) {
		return;
	}
	let idx = len - (k % len);
	nums.push(...nums.slice(0, idx));
	nums.splice(0, idx);
};
