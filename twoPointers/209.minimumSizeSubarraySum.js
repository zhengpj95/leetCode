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

/**
 * Binary Search
 * Time complexity: O(nlogn) n=s.length
 * Space complexity: O(n)
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen2 = function (s, nums) {
	if (!nums || !nums.length) return 0;
	let min = Number.MAX_SAFE_INTEGER;
	let sums = [0];
	for (let i = 1; i <= nums.length; i++) {
		sums[i] = sums[i - 1] + nums[i - 1];
	}

	for (let i = 0; i < nums.length; i++) {
		// 此处传递的 target 是 sums[i] + s，因为 sums 都是前 i-1 项和
		// 找到的right与i之间的距离就是大于等于s的子数组长度
		let right = binarySearch(i + 1, nums.length, sums[i] + s, sums);
		if (right === sums.length) break;
		if (min > right - i) min = right - i;
	}
	return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};

const binarySearch = (left, right, target, nums) => {
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] >= target) right = mid - 1;
		else left = mid + 1;
	}
	return left;
};

let s = 11,
	nums = [1, 2, 3, 4, 5];
(s = 7), (nums = [2, 3, 1, 2, 4, 3]);
// (s = 3), (nums = [1, 1]);
console.log(minSubArrayLen2(s, nums));
