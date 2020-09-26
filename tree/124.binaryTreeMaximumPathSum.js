/**
 * Given a non-empty binary tree, find the maximum path sum.
 * For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections.
 * The path must contain at least one node and does not need to go through the root.
 * @author zheng
 * @date 2020/09/26 12:17:58
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = function (root) {
	let maxValue = Number.MIN_SAFE_INTEGER;

	let findMax = function (root) {
		if (!root) return 0;
		let maxLeft = Math.max(0, findMax(root.left)); //find the max value in the left children, if the value is less than 0, set to 0
		let maxRight = Math.max(0, findMax(root.right)); // same as left children
		maxValue = Math.max(maxValue, maxLeft + maxRight + root.val); //the path must contain at least one node
		return Math.max(maxLeft, maxRight) + root.val;
	};

	findMax(root);
	return maxValue;
};

let arr = [-10, 9, 20, null, null, 15, 7];
let root = createTree(arr);

console.log(maxPathSum(root));
