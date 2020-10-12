/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.
 */

/**
 * Time complexity: 取决于sort方法
 * Space complexity: O(m+n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
	let arr = nums1.concat(nums2).sort((a, b) => a - b);
	let mid = Math.floor(arr.length / 2);
	// console.log(arr, mid);

	if (arr.length & 1) {
		return arr[mid] * 1.0;
	} else {
		return ((arr[mid] + arr[mid - 1]) / 2) * 1.0;
	}
};

/**
 * Time complexity: O((m+n)/2)
 * Space complexity: O((m+n)/2)
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
const findMedianSortedArrays2 = function (nums1, nums2) {
	let res = [];
	let total = -1;
	let totalLen = nums1.length + nums2.length;
	let midLen = (totalLen / 2) >> 0;
	for (let i = 0, j = 0; i < nums1.length || j < nums2.length; ) {
		if (nums1[i] < nums2[j]) {
			res.push(nums1[i]);
			i++;
		} else {
			if (nums2[j] != undefined) {
				//先处理nums2，避免nums1重复push
				res.push(nums2[j]);
				j++;
			} else if (nums1[i] != undefined) {
				res.push(nums1[i]);
				i++;
			}
		}
		total++;

		if (totalLen & 1 && midLen === total) {
			return res[midLen];
		} else if (midLen === total) {
			return (res[midLen] + res[midLen - 1]) / 2;
		}
	}
};

/**
 * Time complexity: O(log(min(m,n)))
 * Space complexity: O(1)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays3 = function (nums1, nums2) {
	if (nums1.length > nums2.length) {
		[nums1, nums2] = [nums2, nums1]; //nums1为最小长度数组
	}
	let len1 = nums1.length;
	let len2 = nums2.length;
	let low = 0;
	let high = len1;
	while (low <= high) {
		let i = low + Math.floor((high - low) / 2);
		let j = Math.floor((len1 + len2 + 1) / 2) - i;

		let leftA = i === 0 ? Number.NEGATIVE_INFINITY : nums1[i - 1];
		let rightA = i === len1 ? Number.POSITIVE_INFINITY : nums1[i];
		let leftB = j === 0 ? Number.NEGATIVE_INFINITY : nums2[j - 1];
		let rightB = j === len2 ? Number.POSITIVE_INFINITY : nums2[j];

		if (leftA <= rightB && leftB <= rightA) {
			if ((len1 + len2) & 1) {
				return Math.max(leftA, leftB);
			} else {
				return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
			}
		} else if (leftA > rightB) {
			high = i - 1;
		} else {
			low = low + 1;
		}
	}
};

console.log(findMedianSortedArrays3([1, 3], [2]));
console.log(findMedianSortedArrays3([1, 3], [2, 4]));
