/**
 * Definition for a binary tree node.
 */
module.exports = function TreeNode(val, left, right) {
	this.val = val ? val : 0;
	this.left = left ? left : null;
	this.right = right ? right : null;
};
