/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
 * The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).
 *
 * Notes:
 * Given a binary search tree (BST)
 * Its left children values is less than the root value
 * and its right children values is more than the root value.
 *
 * Constraints:
 * All of the nodes' values will be unique.
 * p and q are different and both values will exist in the BST.
 * @author zheng
 * @date 2020/09/28 12:21:15
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * Time complexity: O(H) where H is tree height.
 * Space complexity: O(H)
 * In the worst case, Time and Space complexity would be N since the height of skewed BST could be N.
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
	if (!root || !p || !q) return null;
	// 在左子树
	if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, q, p);
	// 在右子树
	if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
	// 在此根结点
	// if ((p.val <= root.val && root.val <= q.val) || (q.val <= root.val && root.val <= p.val)) return root;
	return root;
};

/**
 * Time complexity: O(H) where H is tree height. In the worst case we might be visiting all the nodes of the BST, its complexity is O(N).
 * Space complexity: O(1)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor2 = function (root, p, q) {
	if (!root || !p || !q) return null;

	while (root) {
		if (p.val < root.val && q.val < root.val) {
			root = root.left;
		} else if (p.val > root.val && q.val > root.val) {
			root = root.right;
		} else {
			return root;
		}
	}
	return null;
};

/**
 * Iterative
 * Time complexity: O(H) where H is tree height. In the worst case we might be visiting all the nodes of the BST, its complexity is O(N).
 * Space complexity: O(1)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor3 = function (root, p, q) {
	if (!root || !p || !q) return null;

	// >0 表示 p, q 在同一颗子树上
	while ((root.val - p.val) * (root.val - q.val) > 0) {
		root = p.val < root.val ? root.left : root.right;
	}
	return root;
};

/**
 * Recursive
 * Time complexity: O(H) where H is tree height. In the worst case we might be visiting all the nodes of the BST, its complexity is O(N).
 * Space complexity: O(1)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor4 = function (root, p, q) {
	if (!root || !p || !q) return null;

	return (root.val - p.val) * (root.val - q.val) < 1 ? root : lowestCommonAncestor4(p.val < root.val ? root.left : root.right, p, q);
	// return (root.val - p.val) * (root.val - q.val) > 0 ? lowestCommonAncestor4(p.val < root.val ? root.left : root.right, p, q) : root;
};

let arr = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
let root = createTree(arr);
let node1 = new TreeNode(3);
let node2 = new TreeNode(5);

console.log(lowestCommonAncestor(root, node1, node2).val);
console.log(lowestCommonAncestor2(root, node1, node2).val);
console.log(lowestCommonAncestor3(root, node1, node2).val);
console.log(lowestCommonAncestor4(root, node1, node2).val);
