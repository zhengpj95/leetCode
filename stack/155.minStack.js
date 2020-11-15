/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 *
 * Constraints:
 * Methods pop, top and getMin operations will always be called on non-empty stacks.
 * @author zheng
 * @date 2020/11/15 21:40:24
 */

/**
 * 有BUG
 * 这里使用多一个栈来维持单调栈，但是这个单调栈后面入的元素如果比栈顶元素小，则前面的元素要出栈，此元素再入栈
 * 所以如果此额外栈空了，但是原本的栈没空，则获取最小元素时得到结果不对
 *
 * ==================================================
 * 没有BUG
 * 入栈的时候，改变一下方式，如果入栈的元素比维持的一个单调栈的元素小才入栈，不像上面方式一样先出栈bi当前元素大的
 */

/**
 * initialize your data structure here.
 */
const MinStack = function () {
	this.stack = [];
	this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	this.stack.push(x);

	// 这种方式是minStack的栈顶元素小于当前元素的，则需要其出栈
	// while (this.minStack.length && this.minStack[this.minStack.length - 1] > x) {
	// 	this.minStack.pop();
	// }
	// this.minStack.push(x);

	// 改变方式，比minStack的栈顶元素小才入栈，此处的minStack不应该有出栈的操作
	if (!this.minStack.length || x <= this.minStack[this.minStack.length - 1]) {
		this.minStack.push(x);
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	let top = this.stack.pop();
	if (top === this.minStack[this.minStack.length - 1]) this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	if (this.minStack.length) {
		return this.minStack[this.minStack.length - 1];
	}
	return this.stack[this.stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let min = new MinStack();
min.push(-2);
min.push(0);
min.push(-3);
console.log(min); //stack: [-2, 0, -3], minStack: [-3]
console.log(min.getMin()); //-3
min.pop();
console.log(min.top()); //0
console.log(min); //stack: [-2, 0], minStack: []
// console.log(min.getMin()); //0，错误！此时minStack已空，得到的是stack的栈顶元素
console.log(min.getMin()); // 改后，此处输出-2
