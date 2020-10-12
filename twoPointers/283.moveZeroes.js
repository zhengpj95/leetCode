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
 * 和27题移除元素相同思路，只是这里会把最后的几个元素置0
 * 使用双指针，fast指针只要不为0，就把其换到slow指针处，然后slow后的都置0
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

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes2 = function (nums) {
	if (!nums || !nums.length) return;

	for (let slow = 0, fast = 0; fast < nums.length; fast++) {
		if (nums[fast] !== 0) {
			let temp = nums[slow];
			nums[slow++] = nums[fast];
			nums[fast] = temp;
		}
	}
};

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes3 = function (nums) {
	// let count = 0;
	// for (let i = 0; i < nums.length; i++) {
	// 	if (nums[i] === 0) {
	// 		nums.splice(i--, 1);
	// 		count++;
	// 	}
	// }
	// for (let i = 0; i < count; i++) {
	// 	nums.push(0);
	// }

	let slow = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[slow] = nums[i];
			nums[i] = 0; // nums[i] = slow === i ? nums[i] : 0;
			slow++;
		}
	}
	console.log(nums);
};

let arr = [0, 1, 0, 3, 12];
console.time();
moveZeroes2([0, 1, 0, 3, 12]);
console.timeEnd();
console.time();
moveZeroes3([0, 1, 0, 3, 12]);
console.timeEnd();
