/**
 * You are given a binary tree in which each node contains an integer value.
 * Find the number of paths that sum to a given value.
 * The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
 * The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.
 * @author zheng
 * @date 2020/10/09 10:59:24
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * DFS
 * Time complexity: O(N) ??
 * Space complexity: O(N) ??
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = function (root, sum) {
	if (!root) return 0;
	let total = 0;

	let dfs = (root, currSum, isStart) => {
		if (!root) return;
		currSum += root.val;
		if (currSum === sum) {
			total += 1;
		}

		dfs(root.left, currSum, false);
		dfs(root.right, currSum, false);

		if (isStart) {
			dfs(root.left, 0, true);
			dfs(root.right, 0, true);
		}
	};

	dfs(root, 0, true);
	return total;
};

let arr = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1];
let root = createTree(arr);
console.log(pathSum(root, 8));
