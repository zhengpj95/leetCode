/**
 * Given a binary tree and a sum,
 * find all root-to-leaf paths where each path's sum equals the given sum.
 * Note: A leaf is a node with no children.
 */
const { createTree } = require('./TreeNode');

/**
 * Approach 1: recursive
 * Time complexity: O(n) 每个结点都需遍历一遍
 * Space complexity: O(n*h) h树高 ==> O(nlogn)
 * 	n个结点的树，树高为 log(n+1) 向上取整，或者 log(n)向下取整 + 1
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
	if (!root) return [];
	let result = [];

	let findPath = function (root, target, arr) {
		if (!root.left && !root.right && target == root.val) {
			arr.push(root.val);
			result.push(arr);
			return;
		}
		if (root.left) {
			findPath(root.left, target - root.val, arr.concat(root.val));
		}
		if (root.right) {
			findPath(root.right, target - root.val, arr.concat(root.val));
		}
	};

	findPath(root, sum, []);
	return result;
};

let arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
let root = createTree(arr);

console.log(pathSum(root, 22));
