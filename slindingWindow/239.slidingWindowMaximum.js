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
 * 在窗口移动过程中，不断的增减元素，
 * 如何在 O(1) 时间内找出 k 区域内的最大值才是难点。
 *
 * 维持一个单调队列或者单调数组，其实这个单调队列或单调数组就是窗口大小，
 * right 指针向右移动时，单调队列或单调数组中加入新元素，比其小的都可删除；
 * 当 left 指针向右移动时，如果移除的元素刚好是单调队列或单调数组的最大值，则单调队列或单调数组就要相应的缩小，
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

/**
 * 单调队列，队列中的数据递增或递减
 */
class MonotonicQueue {
	constructor() {
		this.queue = [];
	}

	isEmpty() {
		return this.queue.length === 0;
	}

	getSize() {
		return this.queue.length;
	}

	getHead() {
		return this.isEmpty() ? null : this.queue[0];
	}

	getTail() {
		return this.isEmpty() ? null : this.queue[this.getSize() - 1];
	}

	addData(ele) {
		while (!this.isEmpty() && this.getTail() < ele) {
			this.queue.pop();
		}
		this.queue.push(ele);
		return true;
	}

	removeData(ele) {
		if (!this.isEmpty() && this.getHead() === ele) {
			this.queue.shift();
		}
		return true;
	}
}

/**
 * Time complexity: O(n) n is the length of nums
 * Space complexity: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow2 = function (nums, k) {
	let window = new MonotonicQueue();
	let res = [];
	let left = 0,
		right = 0;

	while (right < nums.length) {
		left = right - k + 1;
		window.addData(nums[right]);
		if (left >= 0) {
			res.push(window.getHead());
			window.removeData(nums[left]);
		}
		right++;
	}
	return res;
};

/**
 * Time complexity: O(n) n is the length of nums
 * Space complexity: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow3 = function (nums, k) {
	let result = [];
	let sortedArr = []; //单调数组

	for (let i = 0; i < nums.length; i++) {
		while (sortedArr.length > 0 && sortedArr[sortedArr.length - 1] < nums[i]) {
			sortedArr.pop();
		}
		sortedArr.push(nums[i]);
		let idx = i - k + 1;
		if (idx >= 0) {
			result.push(sortedArr[0]);
			if (sortedArr[0] == nums[idx]) sortedArr.shift();
		}
	}
	return result;
};

let nums = [-7, -8, 7, 5, 7, 1, 6, 0],
	k = 4;
// nums = [1, 3, 1, 2, 0, 5];
// k = 3;
console.log(maxSlidingWindow3(nums, k));
