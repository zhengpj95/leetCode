/**
 * @author zheng
 * @date 2021/02/24 16:21:39
 */

const { TreeNode, createTree } = require('./TreeNode');
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
	if (!root) return;
	if (!root.left && !root.right) return root.val;
	let stack = [root];
	let result = undefined;

	while (stack.length) {
		let row = [];
		while (stack.length) {
			let node = stack.shift();
			if (node.left) {
				row.push(node.left);
			}
			if (node.right) {
				row.push(node.right);
			}
		}
		if (row.length) {
			let node = row[0];
			result = node.val;
		}
		stack = row;
	}
	return result;
};

let root = createTree([3, 1, 5, 33, 2, 4, 6]);
console.log(findBottomLeftValue(root));
