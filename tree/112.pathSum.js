/**
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
 * such that adding up all the values along the path equals the given sum.
 * Note: A leaf is a node with no children.
 */

const { createTree } = require('./TreeNode');

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function (root, sum) {
	if (!root) return false;
	if (!root.left && !root.right) return root.val == sum;
	return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

let arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
let root = createTree(arr);
console.log(hasPathSum(root, 18));
