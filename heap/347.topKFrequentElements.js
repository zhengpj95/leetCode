/**
 * Given a non-empty array of integers, return the k most frequent elements.
 * @author zheng
 * @date 2021/01/05 22:28:43
 */

const { PriorityQueue } = require("./PriorityQueue");

/**
 * 利用堆
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	if (k == nums.length) return nums;
	if (k == 0) return [];

	let map = new Map();
	for (let num of nums) {
		map.set(num, map.has(num) ? map.get(num) + 1 : 1);
	}

	let heap = new PriorityQueue((a, b) => a[1] < b[1]);
	for (let [k, v] of map.entries()) {
		heap.enqueue([k, v]);
	}

	let res = [];
	while (k-- > 0) {
		let top = heap.dequeue();
		if (top) {
			res.push(top[0]);
		}
	}
	return res;
};

/**
 * Bucket Sort
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentWithBucketSort = function (nums, k) {
	if (k == 0) return [];
	let map = new Map();
	for (let num of nums) {
		map.set(num, map.has(num) ? map.get(num) + 1 : 1);
	}
	// console.log(map);

	let bucket = [];
	for (let [k, v] of map.entries()) {
		if (!bucket[v]) {
			bucket[v] = [];
		}
		bucket[v].push(k);
	}
	// console.log(bucket);

	let res = [];
	for (let i = bucket.length - 1; i >= 0; i--) {
		if (bucket[i]) {
			res.push(...bucket[i]);
		}
		if (res.length === k) {
			break;
		}
	}
	return res;
};

let nums = [1, 1, 1, 2, 2, 3, 3, 3, 4],
	k = 2;
// (nums = [1]), (k = 1);
console.log(topKFrequentWithBucketSort(nums, k));
