/**
 * Given an unsorted integer array nums, return the smallest missing positive integer.
 * You must implement an algorithm that runs in O(n) time and uses constant extra space.
 */

/**
 * O(T)=O(n)
 * O(S)=O(n)
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositiveWithMap = function (nums) {
	let map = {};
	let max = 0;
	for (let i of nums) {
		map[i] = i;
		max = Math.max(max, i);
	}
	if (max < 1) {
		return 1;
	}
	for (let i = 1; i <= max + 1; i++) {
		if (!map[i]) {
			return i;
		}
	}
	return 1;
};
