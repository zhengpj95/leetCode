/**
 * Given an array nums of integers, return how many of them contain an even number of digits.
 * Constraints:
 * 1 <= nums.length <= 500
 * 1 <= nums[i] <= 10^5
 * @author zheng
 * @date 2020/11/04 18:44:53
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
	let result = 0;
	for (let num of nums) {
		let size = num.toString().length;
		if (!(size & 1)) {
			result++;
		}
	}
	return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers2 = function (nums) {
	return nums.filter((num) => !(num.toString().length & 1)).length;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers2([555, 901, 482, 1771]));
