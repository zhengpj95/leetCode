/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.
 */

/**
 * Time complexity: O(m+n)
 * Space complexity: O(m+n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	let arr = nums1.concat(nums2).sort((a, b) => a - b);
	let mid = Math.floor(arr.length / 2);
	// console.log(arr, mid);

	if (arr.length & 1) {
		return arr[mid] * 1.0;
	} else {
		return ((arr[mid] + arr[mid - 1]) / 2) * 1.0;
	}
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 3], [2, 4]));
