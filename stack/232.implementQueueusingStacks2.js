/**
 * @author zheng
 * @date 2020/11/25 18:32:14
 */

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
	this.stack = [];
	this.stack1 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	this.peek();
	return this.stack1.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	// 保留一个输出栈，反正出队只能从对头操作，此时stack为空，也没有影响
	// 这个思路太牛掰了
	if (!this.stack1.length) {
		while (this.stack.length) {
			this.stack1.push(this.stack.pop());
		}
	}
	return this.stack1[this.stack1.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	return this.stack.length === 0 && this.stack1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
