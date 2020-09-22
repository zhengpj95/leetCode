
//  Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val);
	this.left = (left === undefined ? null : left);
	this.right = (right === undefined ? null : right);
}

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
	let preNode = null;
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

let node0 = new TreeNode(0);
let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

node3.left = node1;
node3.right = node5;
node1.left = node0;
node1.right = node2;
node5.left = node4;
node5.right = node6;

// node2.left = node1;
// node2.right = node3;

let res = isValidBST(node2);
console.log(res);
