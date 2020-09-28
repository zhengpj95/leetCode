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

let arr = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
let root = createTree(arr);
let node1 = new TreeNode(3);
let node2 = new TreeNode(5);

let res = lowestCommonAncestor(root, node1, node2);
console.log(res.val);
