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
