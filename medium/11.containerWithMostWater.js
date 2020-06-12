/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines 
 * are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, 
 * such that the container contains the most water.
 * Note: You may not slant the container and n is at least 2.
 */

/**
 * Approach 1: Brute Force
 * Time complexity: O(n^2)
 * Time complexity: O(1)
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (nums) {
	let max = 0;
	for (let i = 1; i <= nums.length; i++) {
		let temp = 0;
		let h1 = nums[i - 1];
		for (let j = 1; j <= i; j++) {
			let h2 = nums[j - 1];
			let num = Math.abs(j - i) * Math.min(h1, h2);
			temp = Math.max(num, temp);
		}
		max = Math.max(temp, max);
	}
	return max;
};

/**
 * Approach 2: Two Pointer Approach
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number} nums 
 */
const maxArea2 = function (nums) {
	let low = 0;
	let high = nums.length - 1;
	let max = 0;

	while (low <= high) {
		let left = nums[low];
		let right = nums[high];
		max = Math.max(Math.min(left, right) * (high - low), max);
		if (left < right) {
			low++;
		} else {
			high--;
		}
	}
	return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 3]));
console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 3]));