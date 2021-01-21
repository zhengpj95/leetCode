/**
 * Given an array of integers nums, sort the array in ascending order.
 * @author zheng
 * @date 2021/01/21 17:48:01
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
	return nums.sort((a, b) => a - b);
};

/**
 * Runtime: 104 ms, faster than 94.50% of JavaScript online submissions for Sort an Array.
 * Memory Usage: 44.4 MB, less than 51.89% of JavaScript online submissions for Sort an Array.
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayWithQuickSort = function (nums) {
	if (!nums) return [];
	if (nums.length < 2) return nums;
	return quickSort(nums, 0, nums.length - 1);
};

/**
 * @param {number[]} nums
 * @param {number} begin
 * @param {number} end
 */
var quickSort = (nums, begin, end) => {
	if (begin >= end) return;
	let midVal = nums[begin];
	let i = begin,
		j = end;

	while (i < j) {
		// 先从右交换
		while (i < j && nums[j] >= midVal) {
			j--;
		}
		if (i < j) {
			swap(nums, i, j);
			i++;
		}
		// 后从左交换
		while (i < j && nums[i] <= midVal) {
			i++;
		}
		if (i < j) {
			swap(nums, i, j);
			j--;
		}
	}

	quickSort(nums, begin, i - 1);
	quickSort(nums, i + 1, end);
	return nums;
};

/**
 * @param {number[]} nums
 * @param {number} i
 * @param {number} j
 */
var swap = (nums, i, j) => {
	[nums[i], nums[j]] = [nums[j], nums[i]];
};

let nums = [5, 9, 1, 9, 5, 3, 7, 6, 1];
console.log(sortArray(nums));
console.log(sortArrayWithQuickSort(nums));
