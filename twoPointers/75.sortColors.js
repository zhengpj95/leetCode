/**
 * Given an array nums with n objects colored red, white, or blue,
 * sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 *
 * Follow up:
 * Could you solve this problem without using the library's sort function?
 * Could you come up with a one-pass algorithm using only O(1) constant space?
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] is 0, 1, or 2.
 * @author zheng
 * @date 2020/11/01 22:30:49
 */

/**
 * 因为只有三种颜色，先统计三种颜色的数量，再重新覆盖原数组
 * Time complexity: O(n)
 * Space complexity: O(3) = O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
	let colors = new Array(3).fill(0);
	for (let i = 0; i < nums.length; i++) {
		colors[nums[i]]++;
	}

	let idx = 0;
	for (let i = 0; i < colors.length; i++) {
		for (let j = 0; j < colors[i]; j++) {
			nums[idx++] = i;
		}
	}
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors2 = function (nums) {
	let swap = (nums, a, b) => {
		let temp = nums[a];
		nums[a] = nums[b];
		nums[b] = temp;
	};

	let low = 0,
		high = nums.length - 1;
	for (let i = 0; i <= high; i++) {
		while (nums[i] == 2 && i < high) {
			swap(nums, i, high);
			high--;
		}
		while (nums[i] == 0 && i > low) {
			swap(nums, i, low);
			low++;
		}
	}
};

let nums = [2, 0, 2, 1, 1, 0, 2, 2, 2];
console.log(sortColors(nums));
console.log(nums);
