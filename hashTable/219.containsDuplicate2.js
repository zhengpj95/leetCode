/**
 * Given an array of integers and an integer k, find out
 * whether there are two distinct indices i and j in the array such that nums[i] = nums[j]
 * and the absolute difference between i and j is at most k.
 * @author zheng
 * @date 2020/10/24 19:32:33
 */

/**
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j <= i + k; j++) {
			if (nums[i] === nums[j]) return true;
		}
	}
	return false;
};

/**
 * 类似窗口滑动，窗口大小从 0 到 k+1，然后一直保持 k+1 的窗口大小滑动
 * 只要在这个窗口内有满足条件的即可
 * Time complexity: O(N)
 * Space complexity: O(k+1)
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate2 = function (nums, k) {
	let set = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (i > k) {
			set.delete(nums[i - k - 1]);
		}
		if (set.has(nums[i])) return true;
		set.add(nums[i]);
	}
	return false;
};

let nums = [2, 14, 1, 8, 3, 4, 5, 6],
	k = 3;
console.log(containsNearbyDuplicate2(nums, k));
