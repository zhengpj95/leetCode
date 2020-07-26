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
	if (height.length <= 2) {
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
	let res = 0;
	let current = 0;
	let stack = [];//模拟栈

	while (current < height.length) {
		// 栈非空，且右边柱子高度大于栈顶柱子的高度，表示栈里的元素可以接水
		while (stack.length && height[current] > height[stack[stack.length - 1]]) {
			let top = stack.pop();
			// 表示top左边没有柱子了，自然无法接水
			if (!stack.length) {
				break;
			}
			let newTop = stack[stack.length - 1];//左边柱子索引
			let distance = current - newTop - 1;//左右柱子的间距
			let bound = Math.min(height[current], height[newTop]) - height[top];//左右柱子可接水的高度，存在为0情况
			res += distance * bound;//接水的容量
		}
		stack.push(current);
		current++;
	}
	return res;
};

/**
 * Approach 4: Using 2 pointers
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} height 
 * @returns {number}
 */
const trap4 = function (height) {
	let res = 0;
	let low = 0;
	let high = height.length - 1;
	let leftMax = height[low];
	let rightMax = height[high];
	while (low < high) {
		if (height[low] < height[high]) {
			if (height[low] > leftMax) leftMax = height[low];
			else res += (leftMax - height[low]);
			low++;
		} else {
			if (height[high] > rightMax) rightMax = height[high];
			else res += (rightMax - height[high]);
			high--;
		}
	}
	return res;
};


/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} height 
 * @returns {number}
 */
const trap5 = function (height) {
	let left = 0;
	let right = height.length - 1;
	let leftMax = height[0];
	let rightMax = height[height.length - 1];
	let res = 0;

	while (left <= right) {
		if (height[left] <= height[right]) {
			leftMax = Math.max(leftMax, height[left]);
			res += leftMax - height[left];
			left++;
		} else {
			rightMax = Math.max(rightMax, height[right]);
			res += rightMax - height[right];
			right--;
		}
	}
	return res;
};

let res = trap3([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(res);