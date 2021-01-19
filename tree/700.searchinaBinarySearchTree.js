/**
 * @author zheng
 * @date 2021/01/19 16:07:12
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
	let helper = (root, val) => {
		if (!root) return null;
		if (root.val == val) return root;
		if (root.val < val) {
			return helper(root.right, val);
		} else if (root.val > val) {
			return helper(root.left, val);
		}
	};
	return helper(root, val);
};

let tree = createTree([4, 2, 7, 1, 3]);
console.log(searchBST(tree, 2));
