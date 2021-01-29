/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {TreeNode} root
 * @returns {any[]}
 */
var normalLevelOrder = function (root) {
	if (!root) return [];
	let res = [];
	let list = [root];

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

let root = createTree([1, 2, 2, 3, 4, 4, 3]);
// console.log(normalLevelOrder(root));
console.log(levelOrder(root));
