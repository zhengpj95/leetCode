/**
 * Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
 * Calling next() will return the next smallest number in the BST.
 *
 * Note:
 * 1. next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
 * 2. You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.
 *
 * For example:
 * [7, 3, 15, null, null, 9, 20]
 *
 * BSTIterator iterator = new BSTIterator(root);
 * iterator.next();    // return 3
 * iterator.next();    // return 7
 * iterator.hasNext(); // return true
 * iterator.next();    // return 9
 * iterator.hasNext(); // return true
 * iterator.next();    // return 15
 * iterator.hasNext(); // return true
 * iterator.next();    // return 20
 * iterator.hasNext(); // return false
 * @author zheng
 * @date 2020/09/26 15:06:51
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * 使用栈或者队列操作
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {TreeNode} root
 */
const BSTIterator = function (root) {
	this.stack = [];
	this.index = -1;

	let traversal = (root) => {
		if (!root) {
			return;
		}
		traversal(root.left);
		this.stack.push(root.val);
		traversal(root.right);
	};
	traversal(root);
};

/**
 * Time complexity: O(1)
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
	return this.stack[++this.index];
};

/**
 * Time complexity: O(1)
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
	return this.index + 1 < this.stack.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

let arr = [7, 3, 15, null, null, 9, 20];
let root = createTree(arr);

let ins = new BSTIterator(root);
console.log(ins.next());
console.log(ins.hasNext());
console.log(ins.next());
console.log(ins.hasNext());
console.log(ins.next());
console.log(ins.hasNext());
console.log(ins.next());
console.log(ins.hasNext());
console.log(ins.next());
console.log(ins.hasNext());
console.log(ins);
