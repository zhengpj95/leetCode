/**
 * Find the sum of all left leaves in a given binary tree.
 * @author zheng
 * @date 2020/09/30 14:25:47
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
	if (!root) return 0;
	let sum = 0;

	let findLeft = (root, isLeft) => {
		if (!root) return 0;
		if (root.left) {
			findLeft(root.left, true);
		}
		if (root.right) {
			findLeft(root.right, false);
		}
		if (!root.left && !root.right && isLeft) {
			sum += root.val;
		}
	};
	findLeft(root, false);
	return sum;
};

let arr = [3, 9, 20, null, null, 15, 7];
let root = createTree(arr);
console.log(sumOfLeftLeaves(root));

console.log(sumOfLeftLeaves(createTree([1]))); // 输出0
