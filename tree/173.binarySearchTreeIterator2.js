/**
 * @author zheng
 * @date 2020/09/26 15:35:32
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * use stack to store directed left children from root
 * when next() be called, pop the top node and process its right children,
 * Time complexity: O(n)
 * Space complexity: O(h) h is the height of the tree
 * @param {TreeNode} root
 */
const BSTIterator = function (root) {
	this.stack = [];

	this.pushStack(root);
};

/**
 * Time complexity: O(n)
 * @param {TreeNode} root
 */
BSTIterator.prototype.pushStack = function (root) {
	while (root) {
		this.stack.push(root);
		root = root.left;
	}
};

/**
 * Time complexity: O(1)
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
	let node = this.stack.pop();
	if (node && node.right) {
		this.pushStack(node.right);
	}
	return node ? node.val : undefined;
};

/**
 * Time complexity: O(1)
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
	return this.stack.length > 0;
};

let arr = [7, 3, 15, null, null, 9, 20];
let root = createTree(arr);

let ins = new BSTIterator(root);
console.log(ins);
console.log(ins.next(), ins.hasNext());
console.log(ins.next(), ins.hasNext());
console.log(ins.next(), ins.hasNext());
console.log(ins.next(), ins.hasNext());
console.log(ins.next(), ins.hasNext());
console.log(ins);
