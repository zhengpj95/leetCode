/**
 * Your are given an array of positive integers nums.
 * Count and print the number of (contiguous) subarrays
 * where the product of all the elements in the subarray is less than k.
 * Note:
 * 0 < nums.length <= 50000.
 * 0 < nums[i] < 1000.
 * 0 <= k < 10^6.
 * @author zheng
 * @date 2020/11/06 11:26:34
 */

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = function (nums, k) {
	if (k <= 1) return 0;
	let left = 0,
		right = 0;

	let result = 0;
	let product = 1;
	while (right < nums.length) {
		product *= nums[right];
		while (product >= k) {
			product /= nums[left];
			left++;
		}
		result += right - left + 1;
		right++;
	}
	return result;
};

let nums = [10, 5, 2, 6],
	k = 100;
// (nums = [1, 2, 3]), (k = 1);
console.log(numSubarrayProductLessThanK(nums, k));
