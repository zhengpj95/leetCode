/**
 * @author zheng
 * @date 2020/11/25 17:39:54
 */

/**
 * Initialize your data structure here.
 */
var MyStack = function () {
	this.queue = [];
};

/**
 * Time complexity: O(1)
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
	this.queue.push(x);
};

/**
 * Time complexity: O(n)
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
	let size = this.queue.length;
	for (let i = 0; i < size; i++) {
		if (i === size - 1) return this.queue.shift();
		this.queue.push(this.queue.shift());
	}
};

/**
 * Time complexity: O(n)
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
	let size = this.queue.length;
	let result = 0;
	for (let i = 0; i < size; i++) {
		let ele = this.queue.shift();
		if (i === size - 1) result = ele;
		this.queue.push(ele);
	}
	return result;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
	return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
