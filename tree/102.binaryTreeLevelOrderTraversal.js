/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {TreeNode} root
 * @returns {any[]}
 */
var normalLevelOrder = function (root) {
	if (!root) return null;
	let list = [];
	list.push(root);

	let res = [];
	while (list.length > 0) {
		let node = list.shift();
		res.push(node.val);
		if (node.left) {
			list.push(node.left);
		}
		if (node.right) {
			list.push(node.right);
		}
	}
	return res;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) {
		return [];
	}
	let result = [];
	let list = [root];

	while (list.length > 0) {
		let arr = [];
		let len = list.length;
		for (let i = 0; i < len; i++) {
			let node = list.shift();
			arr.push(node.val);
			if (node.left) {
				list.push(node.left);
			}
			if (node.right) {
				list.push(node.right);
			}
		}
		result.push(arr);
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

// console.log(normalLevelOrder(node1));
console.log(levelOrder(node1));
