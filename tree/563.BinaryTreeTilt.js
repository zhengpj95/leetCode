/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
	let result = 0;

	let traversal = (root) => {
		if (!root) {
			return 0;
		}
		let leftV = traversal(root.left);
		let rightV = traversal(root.right);
		result += Math.abs(leftV - rightV);
		return leftV + rightV + root.val;
	};

	traversal(root);
	return result;
};
