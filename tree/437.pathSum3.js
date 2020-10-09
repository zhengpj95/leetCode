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
 * Time complexity: O(N^2) ??
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

/**
 * DFS
 * Time complexity: O(N^2) ??
 * Space complexity: O(N) ??
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum2 = function (root, sum) {
	let total = 0;

	let dfs = (root, currSum) => {
		if (!root) return;
		currSum += root.val;
		if (currSum === sum) {
			total += 1;
		}

		dfs(root.left, currSum);
		dfs(root.right, currSum);
	};

	let find = (root) => {
		if (!root) return;
		dfs(root, 0);
		find(root.left, 0);
		find(root.right, 0);
	};

	find(root);

	return total;
};

/**
 * DFS
 * Time complexity: O(N^2) ??
 * Space complexity: O(N) ??
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum3 = function (root, sum) {
	if (!root) return 0;

	let dfs = (root, sum) => {
		if (!root) return 0;

		let total = 0;
		if (sum === root.val) {
			total++;
		}

		total += dfs(root.left, sum - root.val);
		total += dfs(root.right, sum - root.val);
		return total;
	};

	return dfs(root, sum) + pathSum3(root.left, sum) + pathSum3(root.right, sum);
};

/**
 * Time complexity:
 * Space complexity:
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum4 = function (root, sum) {
	if (!root) return 0;
	let total = 0;
	let map = new Map();

	let helper = (root, currSum, targetSum, map) => {
		console.log(map);
		if (!root) return;
		currSum += root.val;
		if (map.has(currSum - targetSum)) {
			total += map.get(currSum - targetSum);
		}

		if (!map.has(currSum)) {
			map.set(currSum, 1);
		} else {
			map.set(currSum, map.get(currSum) + 1);
		}
		helper(root.left, currSum, targetSum, map);
		helper(root.right, currSum, targetSum, map);
		map.set(currSum, map.get(currSum) - 1);
	};

	helper(root, 0, sum, map);
	return total;
};

let arr = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1];
let root = createTree(arr);
// console.log(pathSum(root, 8));
// console.log(pathSum2(root, 8));
// console.log(pathSum3(root, 8));
console.log(pathSum4(root, 8));
// console.log(pathSum4(root, 1));
