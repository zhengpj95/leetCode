/**
 * Given a binary tree, you need to compute the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 * Note: The length of path between two nodes is represented by the number of edges between them.
 * @author zheng
 * @date 2021/01/17 20:58:29
 */

const { TreeNode } = require('./TreeNode');

/**
 * Runtime: 80 ms, faster than 97.70% of JavaScript online submissions for Diameter of Binary Tree.
 * Memory Usage: 41.7 MB, less than 83.62% of JavaScript online submissions for Diameter of Binary Tree.
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
	let max = 0;
	let dfs = (root) => {
		if (!root) return 0;
		let left = dfs(root.left);
		let right = dfs(root.right);
		max = Math.max(max, left + right);
		return Math.max(left, right) + 1;
	};
	dfs(root);
	return max;
};
