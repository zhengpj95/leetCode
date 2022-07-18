/**
 * Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).
 * A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].
 * If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.
 * Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
	let sum = nums.reduce((pre, cur) => {
		return pre + cur;
	}, 0);
	let preSum = [0];
	for (let i = 0; i < nums.length; i++) {
		preSum[i + 1] = preSum[i] + nums[i];
	}
	for (let i = 0; i < nums.length; i++) {
		if (sum - nums[i] - preSum[i] === preSum[i]) {
			return i;
		}
	}
	return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex2 = function (nums) {
	let sum = nums.reduce((pre, cur) => {
		return pre + cur;
	}, 0);

	let left = 0,
		right = 0,
		preSum = 0;

	for (let i = 0; i < nums.length; i++) {
		preSum += nums[i];
		left = preSum - nums[i];
		right = sum - preSum;
		if (left === right) {
			return i;
		}
	}
	return -1;
};
