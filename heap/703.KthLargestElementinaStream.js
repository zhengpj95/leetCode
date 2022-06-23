/**
 * Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Implement KthLargest class:
 * 		KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
 * 		int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
 */
const { PriorityQueue } = require("./PriorityQueue");
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
	this.kth = k;
	this.queue = new PriorityQueue();
	nums.forEach((item) => this.queue.enqueue(item));
	// just keep k elements in queue
	while (this.queue.count > k) {
		this.queue.dequeue();
	}
	// console.log(this.queue);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
	this.queue.enqueue(val);
	while (this.queue.count > this.kth) {
		this.queue.dequeue();
	}
	return this.queue.getTop();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

let func = new KthLargest(3, [4, 5, 8, 2]);
// console.log(func);
// [2,3,4,5,8]
console.log(func.add(3)); //4
// [2,3,4,5,5,8]
console.log(func.add(5)); //5
// [2,3,4,5,5,8,10]
console.log(func.add(10)); //5
// [2,3,4,5,5,8,9,10]
console.log(func.add(9)); //8
// [2,3,4,4,5,5,8,9,10]
console.log(func.add(4)); //8
// [2,3,4,4,5,5,8,9,10,40]
console.log(func.add(40)); //9
