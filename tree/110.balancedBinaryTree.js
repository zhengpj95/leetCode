/**
 * Given a binary tree, determine if it is height-balanced.
 *
 * For this problem, a height-balanced binary tree is defined as:
 * a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
	let depth = function (root) {
		if (!root) return 0;
		return 1 + Math.max(depth(root.left), depth(root.right));
	};

	if (!root) return true;
	let leftH = depth(root.left);
	let rightH = depth(root.right);
	return Math.abs(leftH - rightH) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

let arr = [3, 9, 20, null, null, 15, 7];
let root = createTree(arr);

console.log(isBalanced(root));
