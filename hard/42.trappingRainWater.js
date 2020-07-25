/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 * compute how much water it is able to trap after raining.
 */

/**
 * Approach 1: Brute force
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * @param {number[]} height
 * @return {number}
 */
const trap1 = function (height) {
	let res = 0;
	for (let i = 0; i < height.length; i++) {
		let leftMax = 0;
		let rightMax = 0;
		// 左边最大值
		for (let j = i; j >= 0; j--) {
			leftMax = Math.max(leftMax, height[j]);
		}
		// 右边最大值
		for (let j = i; j < height.length; j++) {
			rightMax = Math.max(rightMax, height[j]);
		}
		// 左右两边最小的最大值与当前的差值
		res += (Math.min(leftMax, rightMax) - height[i]);
	}
	return res;
};

/**
 * Approach 2: Dynamic Programming
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {number[]} height
 * @return {number}
 */
const trap2 = function (height) {
	if (height.length <= 1) {
		return 0;
	}

	let leftMax = [];
	let rightMax = [];
	let res = 0;
	leftMax[0] = height[0];
	for (let i = 1; i < height.length; i++) {
		leftMax[i] = Math.max(leftMax[i - 1], height[i]);
	}
	rightMax[height.length - 1] = height[height.length - 1];
	for (let i = height.length - 2; i >= 0; i--) {
		rightMax[i] = Math.max(rightMax[i + 1], height[i]);
	}
	// 去除两边元素，因为两边元素Math.min都是其自身
	for (let i = 1; i < height.length - 1; i++) {
		res += (Math.min(leftMax[i], rightMax[i]) - height[i]);
	}
	return res;
};

/**
 * Approach 3: Using stacks
 * Time complexity: O()
 * Space complexity: O()
 * @param {number[]} height 
 * @returns {number}
 */
const trap3 = function (height) {

};

/**
 * Approach 4: Using 2 pointers
 * Time complexity: O()
 * Space complexity: O()
 * @param {number[]} height 
 * @returns {number}
 */
const trap4 = function (height) {

};

let res = trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(res);