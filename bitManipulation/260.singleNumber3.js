/**
 * Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice.
 * Find the two elements that appear only once. You can return the answer in any order.
 * Follow up: Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
 * @author zheng
 * @date 2021/01/09 22:50:58
 */

/**
 * O(T)=O(n)
 * O(S)=O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
	let obj = {};
	for (let num of nums) {
		obj[num] = (obj[num] || 0) + 1;
	}
	let res = [];
	for (let i in obj) {
		if (obj[i] == 1) {
			res.push(i);
		}
	}
	return res;
};
