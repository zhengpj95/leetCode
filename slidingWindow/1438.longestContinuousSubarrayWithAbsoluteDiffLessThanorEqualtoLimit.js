/**
 * Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray
 * such that the absolute difference between any two elements of this subarray is less than or equal to limit.
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^9
 * 0 <= limit <= 10^9
 * @author zheng
 * @date 2020/10/30 16:18:05
 */

/**
 * 和 239.Sliding Window Maximum 类似
 * 保存一个递增、递减的数组或队列，操作时就找出窗口内的最大值、最小值即可
 */

/**
 * Time complexity: O(n) n = nums.length
 * Space complexity: O(n) 最坏情况下，limit 极大，maxQueue 或 minQueue 需要保存 nums 的全部元素
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = function (nums, limit) {
	let result = 0;
	let maxQueue = []; //单调递减
	let minQueue = []; //单调递增

	let left = 0,
		right = 0;
	while (right < nums.length) {
		// 比当前 nums[right] 小的都可不要，因为窗口内小于 nums[right] 的部分不会是最大值了
		while (maxQueue.length > 0 && maxQueue[maxQueue.length - 1] < nums[right]) {
			maxQueue.pop();
		}
		maxQueue.push(nums[right]);
		// 同理
		while (minQueue.length > 0 && minQueue[minQueue.length - 1] > nums[right]) {
			minQueue.pop();
		}
		minQueue.push(nums[right]);

		// 缩小窗口，移除 nums[left] 时需判断是否最大值或最小值，若是需移除
		if (maxQueue[0] - minQueue[0] > limit) {
			if (minQueue[0] === nums[left]) minQueue.shift();
			if (maxQueue[0] === nums[left]) maxQueue.shift();
			left++;
		}
		result = Math.max(result, right - left + 1);
		right++;
	}

	return result;
};

let nums = [10, 1, 2, 4, 7, 2],
	limit = 5;
(nums = [8, 2, 4, 7]), (limit = 4);
(nums = [4, 2, 2, 2, 4, 4, 2, 2]), (limit = 0);
(nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), (limit = 1000);
console.log(longestSubarray(nums, limit));
