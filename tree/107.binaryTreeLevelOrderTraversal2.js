/**
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values.
 * (ie, from left to right, level by level from leaf to root).
 */
const TreeNode = require('./TreeNode');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
	if (!root) return [];
	let result = [];
	let list = [root];

	while (list.length > 0) {
		let arr = [];
		let len = list.length;

		while (len-- > 0) {
			let node = list.shift();
			arr.push(node.val);
			if (node.left) {
				list.push(node.left);
			}
			if (node.right) {
				list.push(node.right);
			}
		}
		result.unshift(arr);
	}

	return result;
};

let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node2 = new TreeNode(2, node3, node4);
let newNode3 = new TreeNode(3);
let newNode4 = new TreeNode(4);
let newNode2 = new TreeNode(2, newNode4, newNode3);
let node1 = new TreeNode(1, node2, newNode2);

console.log(levelOrderBottom(node1));
