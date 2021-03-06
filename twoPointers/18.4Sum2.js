/**
 * Time complexity: O(n^3)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
	nums.sort((a, b) => a - b);
	let res = [];
	for (let i = 0; i < nums.length; i++) {
		let threeSumRes = threeSum(nums, i + 1, target - nums[i]);
		for (let item of threeSumRes) {
			res.push([nums[i], ...item]);
		}
		while (i < nums.length - 1 && nums[i] == nums[i + 1]) i++;
	}
	return res;
};

/**
 * Time complexity: O(n^2)
 * @param {number[]} nums
 * @param {number} start
 * @param {number} target
 * @returns {number[]}
 */
const threeSum = function (nums, start, target) {
	let res = [];

	for (let i = start; i < nums.length; i++) {
		let twoSumRes = twoSum(nums, i + 1, target - nums[i]);
		for (let item of twoSumRes) {
			res.push([nums[i], ...item]);
		}
		while (i < nums.length - 1 && nums[i] == nums[i + 1]) i++;
	}
	return res;
};

/**
 * Time complexity: O(n)
 * @param {number[]} nums
 * @param {number} start
 * @param {number} target
 * @returns {number[]}
 */
const twoSum = function (nums, start, target) {
	let res = [];
	let low = start;
	let high = nums.length - 1;

	while (low < high) {
		let left = nums[low];
		let right = nums[high];
		let sum = left + right;
		if (sum < target) {
			while (low < high && nums[low] === left) low++;
		} else if (sum > target) {
			while (low < high && nums[high] === right) high--;
		} else {
			res.push([left, right]);
			while (low < high && nums[low] === left) low++;
			while (low < high && nums[high] === right) high--;
		}
	}
	return res;
};
