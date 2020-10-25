/**
 * Related Topics: Hash Table, Tow pointers, Binary Search, Sort
 * Given two arrays, write a function to compute their intersection.
 * Note:
 * Each element in the result must be unique.
 * The result can be in any order.
 * @author zheng
 * @date 2020/10/25 22:13:07
 */

/**
 * Time complexity: O(n) n 为 nums1 长度
 * Space complexity: O(n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
	if (!nums1 || !nums1.length || !nums2 || !nums2.length) return [];
	let res = [];
	let set = new Set();
	for (let i = 0; i < nums1.length; i++) {
		set.add(nums1[i]);
	}
	for (let i = 0; i < nums2.length; i++) {
		if (set.has(nums2[i]) && !res.includes(nums2[i])) res.push(nums2[i]);
	}
	return res;
};

/**
 * Time complexity: O(n) n为最长数组的长度
 * Space complexity: O(n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection2 = function (nums1, nums2) {
	if (!nums1 || !nums1.length || !nums2 || !nums2.length) return [];
	let map = new Map();
	if (nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1];
	for (let i = 0; i < nums1.length; i++) {
		map.set(nums1[i], map.has(nums1[i]) ? map.get(nums1[i]) : 1);
		if (map.has(nums2[i])) {
			map.set(nums2[i], map.get(nums2[i]) + 1);
		}
	}
	let res = [];
	map.forEach((val, index) => {
		if (val > 1) {
			res.push(index);
		}
	});
	return res;
};

let nums1 = [1, 2, 2, 1],
	nums2 = [2, 2, 1, 3, 4];
console.log(intersection2(nums1, nums2));
