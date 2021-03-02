/**
 * @author zheng
 * @date 2021/03/02 16:24:59
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
	let result = Number.MAX_SAFE_INTEGER;
	let preNode = null;
	let stack = [];

	while (stack.length || root) {
		while (root) {
			stack.push(root);
			root = root.left;
		}

		root = stack.pop();
		if (preNode) {
			result = Math.min(result, root.val - preNode.val);
		}
		preNode = root;
		root = root.right;
	}
	return result;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference2 = function (root) {
	let result = Number.MAX_SAFE_INTEGER;
	let preNode = null;

	let traversal = (root) => {
		if (!root) return;
		traversal(root.left);
		if (preNode) {
			result = Math.min(result, root.val - preNode.val);
		}
		preNode = root;
		traversal(root.right);
	};

	traversal(root);
	return result;
};

let root = createTree([1, null, 2, 3]);
console.log(getMinimumDifference(root));
console.log(getMinimumDifference2(root));
