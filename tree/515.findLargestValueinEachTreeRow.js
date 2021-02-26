/**
 * @author zheng
 * @date 2021/02/26 09:57:46
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
	let result = [];

	let dfs = (root, idx) => {
		if (!root) return;
		if (result[idx] == null) {
			result[idx] = Number.MIN_SAFE_INTEGER;
		}

		result[idx] = Math.max(root.val, result[idx]);
		dfs(root.left, idx + 1);
		dfs(root.right, idx + 1);
	};

	dfs(root, 0);
	return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues2 = function (root) {
	if (!root) return [];
	let result = [];
	let stack = [root];

	while (stack.length) {
		let size = stack.length;
		let max = Number.MIN_SAFE_INTEGER;
		for (let i = 0; i < size; i++) {
			let node = stack.shift();
			max = Math.max(node.val, max);
			if (node.left) stack.push(node.left);
			if (node.right) stack.push(node.right);
		}
		result.push(max);
	}

	return result;
};

let root = createTree([1, 3, 2, 5, 3, null, 9]);
console.log(largestValues(root));
