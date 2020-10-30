/**
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 *
 * Note:
 * The input array will only contain 0 and 1.
 * The length of input array is a positive integer and will not exceed 10,000
 * @author zheng
 * @date 2020/10/30 09:06:50
 */

/**
 * Sliding Window
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
	if (!nums || !nums.length) return 0;
	let left = 0,
		right = 0;
	let max = 0;

	while (right < nums.length) {
		let num = nums[right];
		if (num === 1) {
			let len = nums[left] === 1 ? right - left + 1 : right - left;
			max = Math.max(max, len);
		} else {
			left = right;
		}
		right++;
	}

	return max;
};

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes2 = function (nums) {
	if (!nums || !nums.length) return 0;
	let count = 0,
		max = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			count++;
			max = Math.max(max, count);
		} else {
			count = 0;
		}
	}
	return max;
};

console.log(findMaxConsecutiveOnes([0, 0, 1, 1, 0, 1, 1, 1, 0]));
console.log(findMaxConsecutiveOnes2([0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1]));
