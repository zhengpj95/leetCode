/**
 * Related Topics: Hash Table, Tow pointers, Binary Search, Sort
 *
 * Given two arrays, write a function to compute their intersection.
 * Note:
 * Each element in the result should appear as many times as it shows in both arrays.
 * The result can be in any order.
 *
 * Follow up:
 * What if the given array is already sorted? How would you optimize your algorithm?
 * What if nums1's size is small compared to nums2's size? Which algorithm is better?
 * What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 * @author zheng
 * @date 2020/10/26 14:23:39
 */

/**
 * 常规解答，还没有考虑 Follow up 情况
 * Time complexity: O(m) m是最长数组长度
 * Space complexity: O(m)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
	if (nums1.length < nums2.length) {
		[nums1, nums2] = [nums2, nums1];
	}
	let map = new Map();
	for (let num of nums1) {
		map.set(num, map.has(num) ? map.get(num) + 1 : 1);
	}

	let res = [];
	for (let num of nums2) {
		if (map.get(num) > 0) {
			res.push(num);
			map.set(num, map.get(num) - 1);
		}
	}
	return res;
};

let nums1 = [4, 9, 5],
	nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));
