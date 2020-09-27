/**
 * Given a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 *
 * Example:
 * Input: [1,2,3,null,5,null,4]
 * Output: [1, 3, 4]
 * @author zheng
 * @date 2020/09/27 09:36:06
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function (root) {
	if (!root) return [];
	let list = [root];
	let result = [];

	while (list.length) {
		let size = list.length;
		for (let i = 0; i < size; i++) {
			let node = list.shift();
			if (i == size - 1) {
				result.push(node.val);
			}
			if (node.left) {
				list.push(node.left);
			}
			if (node.right) {
				list.push(node.right);
			}
		}
	}
	return result;
};

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView2 = function (root) {
	let result = [];

	let findRight = function (root, depth) {
		if (!root) return;
		// 树的层数从0开始算，前n层（0-n）的都添加了，到n+1层时，result必有n个值
		if (depth == result.length) {
			result.push(root.val);
		}
		findRight(root.right, depth + 1);
		findRight(root.left, depth + 1);
	};
	findRight(root, 0);
	return result;
};

let arr = [1, 2, 3, 5, 6];
let root = createTree(arr);
console.log(rightSideView(root));
console.log(rightSideView2(root));
