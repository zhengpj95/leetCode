/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia:
 * “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants
 * (where we allow a node to be a descendant of itself).”
 * @author zheng
 * @date 2020/09/29 12:01:32
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * 递归调用，只要找到等于 p 或 q 的，返回true；然后相加大于等于2，就表明两个都找到了
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
	if (!root || !p || !q) return null;

	let parentNode = null;

	let findAncestor = function (root, p, q) {
		if (!root) return false;

		let left = findAncestor(root.left, p, q) ? 1 : 0;
		let right = findAncestor(root.right, p, q) ? 1 : 0;
		let mid = root.val === p.val || root.val === q.val ? 1 : 0;

		if (left + right + mid >= 2) parentNode = root;

		return left + right + mid > 0;
	};

	findAncestor(root, p, q);

	return parentNode;
};

let root = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
let node1 = new TreeNode(5);
let node2 = new TreeNode(4);
console.log(lowestCommonAncestor(root, node1, node2));
