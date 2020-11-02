/**
 * Given an array of n positive integers and a positive integer s,
 * find the minimal length of a contiguous subarray of which the sum ≥ s.
 * If there isn't one, return 0 instead.
 *
 * Follow up:
 * If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
 * @author zheng
 * @date 2020/11/02 10:10:40
 */

/**
 * Two Pointers: Sliding Window
 * Time complexity: O(n) n=s.length
 * Space complexity: O(1)
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (s, nums) {
	if (!nums || !nums.length) return 0;
	let min = Number.MAX_SAFE_INTEGER;
	let slow = 0,
		fast = 0;
	let sum = 0;
	while (fast < nums.length) {
		sum += nums[fast];
		while (sum >= s) {
			min = Math.min(min, fast - slow + 1); //在缩小窗口的时候更新
			sum -= nums[slow++];
		}
		fast++;
	}

	return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};

let s = 11,
	nums = [1, 2, 3, 4, 5];
(s = 7), (nums = [2, 3, 1, 2, 4, 3]);
(s = 3), (nums = [1, 1]);
console.log(minSubArrayLen(s, nums));
