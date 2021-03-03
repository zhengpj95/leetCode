/**
 * @author zheng
 * @date 2021/03/03 09:59:39
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
	let sum = 0;
	let dfs = (root) => {
		if (!root) return 0;
		let rightValue = dfs(root.right);
		sum += root.val;
		root.val = sum;
		dfs(root.left);
		return rightValue + root.val;
	};
	dfs(root);
	return root;
};

let root = createTree([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8]);
console.log(convertBST(root));
