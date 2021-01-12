/**
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * Find all the elements that appear twice in this array.
 * Could you do it without extra space and in O(n) runtime?
 * @author zheng
 * @date 2021/01/12 22:18:00
 */

/**
 * Runtime: 100 ms, faster than 98.39% of JavaScript online submissions for Find All Duplicates in an Array.
 * Memory Usage: 46.2 MB, less than 87.13% of JavaScript online submissions for Find All Duplicates in an Array.
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		let newNum = Math.abs(nums[i]);
		let idx = newNum - 1;
		if (nums[idx] < 0) {
			result.push(newNum);
		}
		nums[idx] = Math.abs(nums[idx]) * -1;
	}
	return result;
};

var findDuplicates2 = function (nums) {
	let result = [];
	for (let num of nums) {
		let newNum = Math.abs(num);
		if (nums[newNum - 1] < 0) result.push(newNum);
		nums[newNum - 1] *= -1;
	}
	return result;
};
