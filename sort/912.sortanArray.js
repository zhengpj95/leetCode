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
	return quickSort2(nums, 0, nums.length - 1);
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

/**
 * Runtime: 92 ms, faster than 99.89% of JavaScript online submissions for Sort an Array.
 * Memory Usage: 43.9 MB, less than 67.35% of JavaScript online submissions for Sort an Array.
 * @param {number[]} nums
 * @param {number} begin
 * @param {number} end
 */
var quickSort2 = (nums, begin, end) => {
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
			nums[i] = nums[j];
			i++;
		}
		// 后从左交换
		while (i < j && nums[i] <= midVal) {
			i++;
		}
		if (i < j) {
			nums[j] = nums[i];
			j--;
		}
	}

	nums[i] = midVal;
	quickSort2(nums, begin, i - 1);
	quickSort2(nums, i + 1, end);
	return nums;
};

var sortArray3 = function (nums) {
	if (!nums) return [];
	if (nums.length < 2) return nums;
	return quickSort(nums, 0, nums.length - 1);

	function quickSort(nums, low, high) {
		if (low >= high) return nums;
		let pos = parition(nums, low, high);
		quickSort(nums, low, pos - 1);
		quickSort(nums, pos + 1, high);
		return nums;
	}

	function parition(nums, low, high) {
		let pivot = nums[low]; //当前表的第一个元素这位基准值
		while (low < high) {
			while (low < high && nums[high] >= pivot) high--;
			nums[low] = nums[high]; //将比基准值小的移到左边
			while (low < high && nums[low] <= pivot) low++;
			nums[high] = nums[low]; //将比基准值大的移到右边
		}
		nums[low] = pivot; //基准值存放到最终位置
		return low; //返回最终位置，把待排序表划分左右两部分
	}
};

let nums = [5, 9, 1, 9, 5, 3, 7, 6, 1];
console.log(sortArray(nums));
console.log(sortArrayWithQuickSort(nums));
console.log(sortArray3(nums));
