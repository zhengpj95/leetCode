/**
 * Given an array nums of n integers where n > 1,
 * return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
 */

/**
 * 分别记录了nums[i]的前后元素的乘积
 * 时间复杂度为O(n)
 * 空间复杂度应该为O(3n) //不确定此空间复杂度
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let preMap = {};
	let postMap = {};
	let len = nums.length;

	for (let i = 0, j = len - 1; i < len; i++, j--) {
		if (i == 0) {
			preMap[i] = 1;
		} else {
			preMap[i] = preMap[i - 1] * nums[i - 1];
		}

		if (j == len - 1) {
			postMap[j] = 1;
		} else {
			postMap[j] = postMap[j + 1] * nums[j + 1];
		}
	}

	let result = [];
	for (let i = 0; i < len; i++) {
		result[i] = preMap[i] * postMap[i];
	}
	return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf2 = function (nums) {
	let result = [1];
	for (let i = 1; i < nums.length; i++) {
		result[i] = result[i - 1] * nums[i - 1];
	}

	let count = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		result[i] = result[i] * count;
		count *= nums[i];
	}
	return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf2([1, 2, 3, 4]));
