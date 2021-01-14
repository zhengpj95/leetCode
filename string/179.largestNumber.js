/**
 * Given a list of non-negative integers nums, arrange them such that they form the largest number.
 * Note: The result may be very large, so you need to return a string instead of an integer.
 * @author zheng
 * @date 2021/01/14 21:29:42
 */

/**
 * O(T)=O(nlogn)
 * O(S)=1
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
	let compare = (a, b) => {
		return '' + b + a - ('' + a + b);
	};
	nums = nums.sort(compare);
	let res = nums.reduce((a, b) => a + b, '');
	return res == 0 ? '0' : res;
};
