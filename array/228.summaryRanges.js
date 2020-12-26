/**
 * You are given a sorted unique integer array nums.
 *
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
 * That is, each element of nums is covered by exactly one of the ranges,
 * and there is no integer x such that x is in one of the ranges but not in nums.
 *
 * Each range [a,b] in the list should be output as:
 * "a->b" if a != b
 * "a" if a == b
 *
 * Constraints:
 * 0 <= nums.length <= 20
 * -2^31 <= nums[i] <= 2^31 - 1
 * All the values of nums are unique.
 * nums is sorted in ascending order.
 * @author zheng
 * @date 2020/12/26 20:53:13
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	if (!nums || !nums.length) return [];

	let res = [];
	for (let i = 0; i < nums.length; ) {
		let j = i;
		do {
			j++;
		} while (j < nums.length && nums[j - 1] + 1 == nums[j]);

		if (i == j - 1) {
			res.push(`${nums[i]}`);
		} else {
			res.push(`${nums[i]}->${nums[j - 1]}`);
		}
		i = j;
	}
	return res;
};

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges2 = function (nums) {
	if (!nums || !nums.length) return [];

	let res = [];
	for (let i = 0; i < nums.length; ) {
		let j = i + 1;
		while (j < nums.length && nums[j - 1] + 1 == nums[j]) {
			j++;
		}

		if (i == j - 1) {
			res.push(`${nums[i]}`);
		} else {
			res.push(`${nums[i]}->${nums[j - 1]}`);
		}
		i = j;
	}
	return res;
};
