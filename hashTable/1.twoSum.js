/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 假设只有一组结果，找出结果值的坐标
 * Time complexity: O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		let remain = target - nums[i];
		if (map.has(remain)) {
			return [map.get(remain), i];
		}
		map.set(nums[i], i);
	}
	return [];
};

/**
 * 找出所有的不重复的结果
 * Time complexity: O(nlogn)
 * @param {number[]} nums
 * @param {number} target
 * @returns {numberp[]}
 */
const twoSum2 = function (nums, target) {
	nums.sort((a, b) => a - b); //Time complexity: O(nlogn)
	let res = [];
	let low = 0;
	let high = nums.length - 1;
	// Time complexity: O(n)
	while (low < high) {
		let left = nums[low];
		let right = nums[high];
		let sum = left + right;
		if (sum < target) {
			while (low < high && nums[low] == left) low++;
		} else if (sum > target) {
			while (low < high && nums[high] == right) high--;
		} else {
			res.push([left, right]);
			while (low < high && nums[low] == left) low++;
			while (low < high && nums[high] == right) high--;
		}
	}
	return res;
};

/**
 * 得到满足要求的索引数组
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number}
 */
const twoSum3 = function (numbers, target) {
	let res = [];
	for (let i = 0; i < numbers.length; i++) {
		let remain = target - numbers[i];
		let lastIndex = numbers.indexOf(remain, i + 1);
		if (lastIndex > -1) {
			res.push([i, lastIndex]);
			// res.push([numbers[i], numbers[lastIndex]]);
		}
	}
	return res;
};

console.log(twoSum([2, 7, 11, 15], 13));
console.log(twoSum2([2, 7, 11, 15], 13));
console.log(twoSum3([2, 7, 11, 15], 13));
