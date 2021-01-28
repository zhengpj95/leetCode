/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
	constructor(val, left, right) {
		this.val = !val ? 0 : val;
		this.left = !left ? null : left;
		this.right = !right ? null : right;
	}
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
	let res = [];
	let traversal = (root) => {
		if (!root) {
			return;
		}
		traversal(root.left);
		traversal(root.right);
		res.push(root.val);
	};
	traversal(root);
	return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal2 = function (root) {
	let res = [];
	let stack = [];
	let curNode = root;

	while (curNode) {
		res.unshift(curNode.val);
		if (curNode.left) {
			stack.push(curNode.left);
		}
		if (curNode.right) {
			stack.push(curNode.right);
		}
		curNode = stack.pop();
	}
	return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal3 = function (root) {
	let res = [];
	let stack = [];
	let node = root;
	while (node) {
		if (node.left) {
			stack.push(node.left);
		}
		if (node.right) {
			stack.push(node.right);
		}
		res.push(node.val);
		node = stack.pop();
	}
	res = res.reverse();
	return res;
};

let node5 = new TreeNode(5);
let node4 = new TreeNode(4);
let node3 = new TreeNode(3, null, node5);
let node2 = new TreeNode(2, node3, node4);
let node1 = new TreeNode(1, null, node2);

console.log(postorderTraversal(node1));
console.log(postorderTraversal2(node1));
