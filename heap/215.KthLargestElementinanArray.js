/**
 * Find the kth largest element in an unsorted array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Note: You may assume k is always valid, 1 ≤ k ≤ array's length.
 * @author zheng
 * @date 2021/01/06 23:14:42
 */

const { PriorityQueue } = require("./PriorityQueue");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	// return nums.sort((a, b) => b - a)[k - 1];

	let queue = new PriorityQueue((a, b) => a < b);
	nums.forEach((item) => queue.enqueue(item));
	while (k-- > 1) {
		queue.dequeue();
	}
	return queue.getTop();
};

let nums = [3, 2, 1, 5, 6, 4],
	k = 2;
// (nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]), (k = 4);
console.log(findKthLargest(nums, k));
