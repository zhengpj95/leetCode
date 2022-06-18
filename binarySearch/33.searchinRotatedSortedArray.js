/**
 * You are given an integer array nums sorted in ascending order, and an integer target.
 * Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * If target is found in the array return its index, otherwise, return -1.
 *
 * Related Topics: Array, Binary Search
 *
 * @author zheng
 * @date 2020/10/11 17:03:41
 */

/**
 * 做题总结：
 * 这是一个 “有序” 的数组，所以要联想到二分查找法
 * 如果暴力解法，从头到尾遍历，虽然可解答，但是肯定不是好方法，而且面试也肯定不吃香，故要从其他想法入手
 *
 * binarySearch还不是很理解
 *
 * binarySearch2主要是总有一半是有序的，nums[mid] < nums[high] 则是右边是有序的
 */

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const bruteSearch = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) {
			return i;
		}
	}
	return -1;
};

/**
 * 找出pivot，这就是偏移量。
 * binary search 中 (pivot+mid)%nums.length 就是真实的中点
 * Time complexity: O(logN)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = function (nums, target) {
	let low = 0;
	let high = nums.length - 1;
	// 找出数组中最小数索引
	while (low < high) {
		let mid = Math.floor((low + high) / 2);
		if (nums[mid] > nums[high]) low = mid + 1;
		else high = mid;
	}

	let rotate = low; //旋转点
	low = 0;
	high = nums.length - 1;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let realMid = (mid + rotate) % nums.length;
		if (nums[realMid] === target) return realMid;
		if (nums[realMid] < target) low = mid + 1;
		else high = mid - 1;
	}
	return -1;
};

/**
 * Time complexity: O(logN)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch2 = function (nums, target) {
	let low = 0,
		high = nums.length - 1;

	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		if (nums[mid] === target) return mid;
		// 右边有序
		if (nums[mid] < nums[high]) {
			if (nums[mid] < target && target <= nums[high]) low = mid + 1;
			else high = mid - 1;
		} else {
			if (nums[low] <= target && target < nums[mid]) high = mid - 1;
			else low = mid + 1;
		}
	}
	return -1;
};

let arr = [3, 4, 1, 2]; // [4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3];
console.log(binarySearch(arr, 3));
console.log(binarySearch2(arr, 3));
