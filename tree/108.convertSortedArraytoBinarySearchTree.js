/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more than 1.
 */

const { TreeNode } = require('./TreeNode');

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
	if (!nums || !nums.length) return null;

	let createTree = function (nums, start, end) {
		if (start > end) return null;
		let middle = Math.ceil((start + end) / 2);

		let root = new TreeNode(nums[middle]);
		root.left = createTree(nums, start, middle - 1);
		root.right = createTree(nums, middle + 1, end);
		return root;
	};

	let root = createTree(nums, 0, nums.length - 1);
	return root;
};

let arr = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(arr));
