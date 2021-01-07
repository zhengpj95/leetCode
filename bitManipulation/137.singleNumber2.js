/**
 * Given an integer array nums where every element appears three times except for one,
 * which appears exactly once. Find the single element and return it.
 *
 * Constraints:
 * 1 <= nums.length <= 3 * 10^4
 * -2^31 <= nums[i] <= 2^x31 - 1
 * Each element in nums appears exactly three times except for one element which appears once.
 *
 * Follow up: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * @author zheng
 * @date 2021/01/07 22:12:38
 */

/**
 * O(T)=O(n)
 * O(S)=O(n)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let obj = {};
	for (let num of nums) {
		obj[num] = (obj[num] || 0) + 1;
	}
	for (let num of nums) {
		if (obj[num] == 1) {
			return num;
		}
	}
	return -1;
};
