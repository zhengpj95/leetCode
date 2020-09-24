/**
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * Note: A leaf is a node with no children.
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function (root) {
	if (!root) return 0;
	if (!root.left) return minDepth(root.right) + 1;
	if (!root.right) return minDepth(root.left) + 1;
	return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth2 = function (root) {
	if (!root) return 0;
	let leftH = minDepth2(root.left);
	let rightH = minDepth2(root.right);

	if (leftH == 0 || rightH == 0) {
		return Math.max(leftH, rightH) + 1;
	} else {
		return Math.min(leftH, rightH) + 1;
	}
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth3 = function (root) {
	if (!root) return 0;
	let list = [root];
	let minDepth = 0;
	while (list.length > 0) {
		minDepth++;
		let count = list.length;
		while (count-- > 0) {
			let node = list.shift();
			if (!node.left && !node.right) return minDepth;
			if (node.left) list.push(node.left);
			if (node.right) list.push(node.right);
		}
	}
	return minDepth;
};

let arr = [3, 9, 20, null, null, 15, 7, 11];
let root = createTree(arr);

console.log(minDepth(root));
console.log(minDepth2(root));
console.log(minDepth3(root));
