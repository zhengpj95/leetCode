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

/**
 * O(T)=O(n)
 * O(S)=O(1)
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
	let size = nums.length;
	for (let i = 0; i < size; i++) {
		while (nums[i] > 0 && nums[i] <= size && nums[nums[i] - 1] != nums[i]) {
			let pos = nums[i] - 1; //注意这一步，一定要记录这个下标
			let temp = nums[i];
			nums[i] = nums[pos];
			nums[pos] = temp;
		}
	}
	for (let i = 0; i < size; i++) {
		if (nums[i] != i + 1) {
			return i + 1;
		}
	}
	return size + 1;
};
