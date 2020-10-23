/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array,
 * and it should return false if every element is distinct.
 * @author zheng
 * @date 2020/10/23 11:17:53
 */

/**
 * Time complexity: O(n^2) includes应该还需 O(n) 或 o(logn) 的时间
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums.includes(nums[i], i + 1)) return true;
	}
	return false;
};

/**
 * Time complexity: O(nlogn) 取决于排序算法
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate2 = function (nums) {
	nums.sort();
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] === nums[i + 1]) return true;
	}
	return false;
};

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate3 = function (nums) {
	let map = new Map();
	for (let num of nums) {
		if (map.has(num)) return true;
		map.set(num, 1);
	}
	return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate2([1, 2, 3, 4]));
console.log(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
