/**
 * Given a binary tree, determine if it is height-balanced.
 *
 * For this problem, a height-balanced binary tree is defined as:
 * a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * Time complexity: O(nlogn) 遍历n个结点，遍历每个结点时都要遍历其子树
 * Space complexity: O(n)
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

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced2 = function (root) {
	let checkHeight = function (root) {
		if (!root) return 0;

		let leftH = checkHeight(root.left);
		if (leftH == -1) return -1;
		let rightH = checkHeight(root.right);
		if (rightH == -1) return -1;
		if (Math.abs(leftH - rightH) > 1) return -1;
		return Math.max(leftH, rightH) + 1;
	};

	return checkHeight(root) != -1;
};

let arr = [3, 9, 20, null, null, 15, 7];
let root = createTree(arr);

console.log(isBalanced(root));
console.log(isBalanced2(root));
