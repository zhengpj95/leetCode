/**
 * Given an array nums, write a function to move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 *
 * Note:
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 * @author zheng
 * @date 2020/10/12 20:04:24
 */

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
	if (!nums || !nums.length) return;
	let slow = 0,
		fast = 0;

	while (fast < nums.length) {
		if (nums[fast] !== 0) {
			nums[slow++] = nums[fast];
		}
		fast++;
	}
	for (; slow < nums.length; slow++) {
		nums[slow] = 0;
	}
};

let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
