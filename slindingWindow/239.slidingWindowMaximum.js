/**
 * You are given an array of integers nums, there is a sliding window of size k
 * which is moving from the very left of the array to the very right.
 * You can only see the k numbers in the window.
 * Each time the sliding window moves right by one position.
 *
 * Return the max sliding window.
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 * @author zheng
 * @date 2020/10/28 10:51:32
 */

/**
 * Brute Force --- Time Limit Exceeded
 * Time complexity: O(nk) 或 O(n * nlogn) n is the length of nums, Math.max need time, but how much does it cost
 * Space complexity: O(n-k+1) = O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
	if (k >= nums.length) return [Math.max(...nums)];

	let res = [];
	let left = 0;
	while (left < nums.length - k + 1) {
		let arr = [];
		for (let i = left; i < left + k; i++) {
			arr.push(nums[i]);
		}
		res.push(Math.max(...arr));
		left++;
	}
	return res;
};

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
	k = 3;
console.log(maxSlidingWindow(nums, k));
