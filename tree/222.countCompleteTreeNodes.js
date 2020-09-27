/**
 * Given a complete binary tree, count the number of nodes.
 * @author zheng
 * @date 2020/09/27 10:25:18
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * Time complexity: O(n)
 * Space complexity: O(2^(h-1)) 或者 O(2^(h-2))  最后一层或者倒数第二层的结点数，h为树高
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function (root) {
	if (!root) return 0;
	let result = 0;
	let list = [root];

	while (list.length) {
		let size = list.length;
		result += size;
		while (size) {
			let node = list.shift();
			if (node.left) {
				list.push(node.left);
			}
			if (node.right) {
				list.push(node.right);
			}
			size--;
		}
	}
	return result;
};

let arr = [1, 2, 3, 4, 5, 6];
let root = createTree(arr);
console.log(countNodes(root));
