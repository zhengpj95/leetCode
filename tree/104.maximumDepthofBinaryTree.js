/**
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Note: A leaf is a node with no children.
 */
const TreeNode = require('./TreeNode');

/**
 * Approach 1: 层次遍历
 * Time complexity: O(n)
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
	if (!root) return 0;
	let depth = 0;
	let list = [root];
	while (list.length > 0) {
		depth++;
		let len = list.length;
		for (let i = 0; i < len; i++) {
			let node = list.shift();
			if (node.left) {
				list.push(node.left);
			}
			if (node.right) {
				list.push(node.right);
			}
		}
	}

	return depth;
};

/**
 * Approach 2: 递归
 * Time complexity: O(n)
 * @param {TreeNode} root
 * @returns {number}
 */
const maxDepth2 = function (root) {
	if (!root) return 0;
	return 1 + Math.max(maxDepth2(root.left), maxDepth2(root.right));
};

let node9 = new TreeNode(9);
let node15 = new TreeNode(15);
let node7 = new TreeNode(7);
let node20 = new TreeNode(20, node15, node7);
let node3 = new TreeNode(3, node9, node20);

console.log(maxDepth(node3));
console.log(maxDepth2(node3));
