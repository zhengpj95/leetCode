/**
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
 * some elements appear twice and others appear once.
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 *
 * Could you do it without extra space and in O(n) runtime?
 * You may assume the returned list does not count as extra space.
 * @author zheng
 * @date 2020/12/24 21:32:16
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	let arr = new Array(nums.length + 1).fill(0);
	for (let num of nums) {
		arr[num] = num;
	}

	let res = [];
	for (let i = 1; i <= arr.length; i++) {
		if (arr[i] == 0) {
			res.push(i);
		}
	}
	return res;
};

/**
 * Runtime: 96 ms, faster than 99.71% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
 * Memory Usage: 46.4 MB, less than 74.80% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers2 = function (nums) {
	// 让每一个元素对应的下标的元素变成负数，剩下的正数就是所求了
	for (let i = 0; i < nums.length; i++) {
		let idx = Math.abs(nums[i]) - 1;
		nums[idx] = Math.abs(nums[idx]) * -1;
	}

	let res = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			res.push(i + 1);
		}
	}
	return res;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers2(nums));
