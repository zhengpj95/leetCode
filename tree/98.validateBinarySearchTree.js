const { TreeNode, createTree } = require('./TreeNode');

/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 *
 * Assume a BST is defined as follows:
 * 1. The left subtree of a node contains only nodes with keys less than the node's key.
 * 2. The right subtree of a node contains only nodes with keys greater than the node's key.
 * 3. Both the left and right subtrees must also be binary search trees.
 *
 * Time complexity: O(n) in the worst case when the tree is BST or the "bad" element is a rightmost leaf.
 * Space complexity: O(n) to keep stack.
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
	// inorder traversal
	let stack = [];
	let preNode = null; //中序遍历过程中的前驱结点
	while (root || stack.length) {
		while (root) {
			stack.push(root);
			root = root.left;
		}
		root = stack.pop();

		if (preNode && preNode.val >= root.val) {
			return false;
		}

		preNode = root;
		root = root.right;
	}

	return true;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST2 = function (root) {
	// inorder traversal
	let res = [];
	let stack = [];
	while (root || stack.length) {
		while (root) {
			stack.push(root);
			root = root.left;
		}
		root = stack.pop();
		res.push(root.val);
		root = root.right;
	}

	// console.log(res);
	for (let i = 0; i < res.length; i++) {
		for (let j = i + 1; j < res.length; j++) {
			if (res[i] >= res[j]) {
				return false;
			}
		}
	}

	return true;
};

let root = createTree([2, 1, 3]); //createTree([5, 1, 4, null, null, 3, 6]);
let res = isValidBST(root);
console.log(res);
